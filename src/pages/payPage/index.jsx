import { useEffect, useRef, useState } from "react"
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk"
import { nanoid } from "nanoid"
import { useLocation } from "react-router-dom"

export default function Pay() {
  const paymentWidgetRef = useRef(null)
  const paymentMethodsWidgetRef = useRef(null)
  const [price, setPrice] = useState(50_000)
  const location = useLocation()
  const cartItems = location.state?.cartItems || []

  useEffect(() => {
    ;(async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey)

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods("#payment-widget", price)

      paymentWidgetRef.current = paymentWidget
      paymentMethodsWidgetRef.current = paymentMethodsWidget
    })()
  }, [])

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current

    if (paymentMethodsWidget == null) {
      return
    }

    paymentMethodsWidget.updateAmount(price, paymentMethodsWidget.UPDATE_REASON.COUPON)
  }, [price])

  const handlePayment = async () => {
    const paymentWidget = paymentWidgetRef.current

    try {
      const items = cartItems.map((item) => ({
        name: item.name,
        quantity: 1,
        price: item.price,
      }))

      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: "토스 티셔츠 외 2건",
        customerName: "김토스",
        customerEmail: "customer123@gmail.com",
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
        items,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>주문서</h1>
      <div id="payment-widget" />
      <div>
        <h2>장바구니 내역</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}원</p>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handlePayment}>결제하기</button>
    </div>
  )
}
