import { useEffect, useRef, useState } from "react"
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk"
import { nanoid } from "nanoid"
import { useLocation, useNavigate } from "react-router-dom"

export default function App() {
  const paymentWidgetRef = useRef(null)
  const paymentMethodsWidgetRef = useRef(null)
  const [amount, setAmount] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()
  const cartItems = location.state?.cartItems || []

  const clientKey = import.meta.env.VITE_API_KEY_clientKey

  const calculateTotalPrice = () => {
    let totalPrice = 0

    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity
    })

    return totalPrice
  }

  useEffect(() => {
    ;(async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS)

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods("#payment-widget")

      paymentWidgetRef.current = paymentWidget
      paymentMethodsWidgetRef.current = paymentMethodsWidget
    })()
  }, [])

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current

    if (paymentMethodsWidget == null) {
      return
    }

    paymentMethodsWidget.updateAmount(amount, paymentMethodsWidget.UPDATE_REASON.COUPON)
  }, [amount])

  useEffect(() => {
    const totalAmount = calculateTotalPrice()
    setAmount(totalAmount)
  }, [cartItems])

  const handlePayment = async () => {
    const paymentWidget = paymentWidgetRef.current

    try {
      console.log(amount)
      const paymentResult = await paymentWidget?.requestPayment({
        amount: amount,
        orderId: nanoid(),
        orderName: "토스 티셔츠 외 2건",
        customerName: "김토스",
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      })

      const orderData = {
        paymentKey: paymentResult.paymentKey,
        orderId: paymentResult.orderId,
        orderProductRequests: cartItems.map((item) => ({
          productId: item.productId,
          optionIds: item.optionIds,
          quantity: item.quantity,
        })),
      }

      // 주문하기 API 호출
      const orderResponse = await fetch("http://localhost:9090/api/v1/public/1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      if (orderResponse.ok) {
        const responseData = await orderResponse.json()
        console.log("주문 응답 데이터:", responseData)

        // 결제 승인 API 호출
        const confirmResponse = await fetch("http://localhost:9090/api/v1/public/1/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentKey: responseData.paymentKey,
            orderId: responseData.orderId,
            orderProductRequests: responseData.orderProductRequests,
          }),
        })
        if (confirmResponse.ok) {
          const confirmData = await confirmResponse.json()
          console.log("결제 승인 응답 데이터:", confirmData)
          navigate("/success", { state: { responseData: orderData } })
        } else {
          console.log("결제 승인을 처리하는 도중 오류가 발생했습니다.")
        }
      } else {
        console.log("주문을 처리하는 도중 오류가 발생했습니다.")
      }
    } catch (err) {
      console.log("주문 처리 중 에러가 발생했습니다:", err)
    }
  }

  return (
    <div>
      <div id="payment-widget" />
      <button
        style={{
          backgroundColor: "#5e4bb1",
          border: "none",
          color: "white",
          padding: "10px 20px",
          textAlign: "center",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
          width: "fit-content",
          margin: "0 auto",
        }}
        onClick={handlePayment}
      >
        결제하기
      </button>
    </div>
  )
}
