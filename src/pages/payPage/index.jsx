import { useEffect, useRef, useState } from "react"
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk"
import { nanoid } from "nanoid"

export default function App() {
  const paymentWidgetRef = useRef(null)
  const paymentMethodsWidgetRef = useRef(null)
  const [price, setPrice] = useState(100)
  const [amount, setAmount] = useState(100)

  const clientKey = import.meta.env.VITE_API_KEY_clientKey
  // const customerKey = import.meta.env.VITE_API_KEY_customerKey

  useEffect(() => {
    ;(async () => {
      // const paymentWidget = await loadPaymentWidget(clientKey, customerKey)
      const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS)

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
      await paymentWidget?.requestPayment({
        // amount,
        orderId: nanoid(),
        orderName: "토스 티셔츠 외 2건",
        customerName: "김토스",
        customerEmail: "customer123@gmail.com",
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {/* <h1>주문서</h1> */}
      <div id="payment-widget" />
      <div>
        {/* <input
          type="checkbox"
          onChange={(event) => {
            setPrice(event.target.checked ? price - 5000 : price + 5000)
          }}
        />
        <label>5,000원 할인 쿠폰 적용</label> */}
      </div>
      <button onClick={handlePayment}>결제하기</button>
    </div>
  )
}
