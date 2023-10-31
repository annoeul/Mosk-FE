import { useLocation } from "react-router-dom"

export default function SuccessPage() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src="/img/check.png" style={{ width: "100%" }} />
      <p>주문이 완료 되었습니다</p>
    </div>
  )
}
