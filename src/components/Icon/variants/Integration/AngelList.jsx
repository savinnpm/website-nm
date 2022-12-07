import * as React from "react";
const SvgAngelList = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z"
      fill="black"
    />
    <path
      d="M20.3992 14.6327C21.172 14.7516 21.707 15.1082 22.0043 15.5838C22.3015 16.0594 22.4799 16.8917 22.4799 17.9617C22.4799 20.1019 21.8259 21.8853 20.5181 23.2526C19.2102 24.6199 17.5457 25.3333 15.5244 25.3333C13.9453 25.3333 12.4825 24.776 11.3036 23.7282C9.9324 22.4941 8.76339 19.9843 9.99579 18.259C10.293 17.8428 10.8281 17.6051 11.482 17.4267C11.3631 17.1295 11.2442 16.8917 11.1847 16.6539C10.9694 16.0079 11.171 15.4787 11.6603 14.9893C12.0877 14.5619 12.6571 14.2515 13.2654 14.4543C13.4438 14.5138 13.6221 14.5732 13.8599 14.7516C13.3249 12.9681 12.7898 11.4819 12.4926 10.4713C12.1954 9.46068 12.0765 8.80675 12.0765 8.39062C12.0765 7.45831 12.6278 6.66663 13.6221 6.66663C14.7516 6.66663 15.1421 8.28036 16.5938 12.0546C16.8282 12.664 17.0106 13.1465 17.1295 13.5031C17.2484 13.2654 17.3673 12.8492 17.5457 12.3736C18.7941 8.80675 19.5536 7.20477 20.6016 7.08588C21.0151 7.03896 21.4692 7.14221 21.7665 7.43945C22.0043 7.73669 22.246 8.15706 22.1826 8.62841C21.8828 10.8593 21.0722 12.8154 20.3992 14.6327ZM11.2442 19.8641C11.3631 19.983 11.5414 20.2208 11.7198 20.518C12.2548 21.2908 12.7898 21.707 13.2654 21.707C13.9813 21.707 13.8737 20.9967 13.6221 20.5775C13.1981 19.8707 12.6593 19.1985 12.0765 18.6157C11.5705 18.2362 11.137 18.2592 10.7092 18.794C9.85785 19.8582 10.6072 21.5384 11.3631 22.4203C11.8981 23.0148 12.4926 23.5499 13.2654 23.9065C14.0382 24.2632 14.8111 24.4416 15.7622 24.4416C17.4268 24.4416 18.7941 23.8471 19.9236 22.5987C21.0531 21.3503 21.5881 19.8046 21.5881 17.9023C21.5881 17.3078 21.5287 16.8917 21.4692 16.535C21.2945 15.4866 19.8714 15.2463 19.0319 15.0488C18.0213 14.811 16.9512 14.6921 15.8811 14.6921C15.3928 14.6921 15.0489 14.8824 15.0489 15.4055C15.0489 16 15.3461 16.4161 16 16.6539C16.654 16.8917 17.724 17.07 19.1508 17.07C19.6051 17.07 20.2969 17.164 20.1019 17.6051C19.9443 17.9617 18.7691 18.1886 18.1996 18.6157C17.3125 19.2071 16.4756 20.3614 16.4756 21.4692C16.4756 22.1468 17.091 23.3337 16.8323 23.431C15.7977 23.8199 15.6433 21.5013 15.6433 20.9936C15.3713 21.2656 15.0391 21.2343 14.7516 21.1125C14.7516 21.6353 14.9099 22.0242 14.4544 22.4798C13.6973 23.2369 12.5527 22.6528 11.8981 22.0637C11.3631 21.5286 11.0326 21.0285 11.0326 20.4934C11.0326 20.2679 11.0788 20.0295 11.2442 19.8641ZM15.5244 19.983C16.1849 19.3225 14.8412 17.2935 14.4544 16.7133C14.035 15.9795 13.2026 14.9927 12.3737 15.8216C11.8879 16.3074 12.1361 16.8724 12.3737 17.4267C12.6115 17.8428 12.8493 18.259 13.206 18.7346C13.5754 19.2272 14.7491 20.7583 15.5244 19.983ZM16.3567 13.9787L14.93 9.99571C14.5733 8.9851 14.3355 8.27172 14.0977 7.97448C13.6984 7.309 12.8493 7.42295 12.8493 8.27172C12.8493 8.68786 13.0276 9.34178 13.3249 10.293C13.6221 11.2441 14.0977 12.5624 14.5938 14.1484C14.8286 13.6787 15.9531 13.9115 16.3567 13.9787ZM17.7835 17.8428C17.1286 17.8428 16.3726 17.7303 15.7622 17.4862C15.9844 18.0416 16.2384 18.5593 16.3567 19.1507C16.7513 18.6246 17.2623 18.2337 17.7835 17.8428ZM19.5075 14.3949C20.1019 12.8492 20.5181 11.5414 20.8748 10.5307C21.172 9.52013 21.3504 8.92565 21.3504 8.68786C21.3504 7.70772 20.4495 7.79727 20.0425 8.50951C19.8047 8.92565 19.5075 9.52013 19.2102 10.4118L17.9024 14.0976L19.5075 14.3949Z"
      fill="white"
    />
  </svg>
);
export default SvgAngelList;
