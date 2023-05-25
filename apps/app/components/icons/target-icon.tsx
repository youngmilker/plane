import React from "react";

import type { Props } from "./types";

export const TargetIcon: React.FC<Props> = ({
  width = "24",
  height = "24",
  className,
  color = "#858E96",
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="9" r="5.4375" stroke={color} strokeLinecap="round" />
    <path
      fill={color}
      strokeWidth="0.5"
      d="M17.6033 7.51926C18.1597 9.22867 18.1241 11.0757 17.5021 12.7624C16.8802 14.4491 15.7083 15.8771 14.1753 16.8161C12.6424 17.7551 10.8378 18.1504 9.05269 17.9382C7.26757 17.7259 5.60599 16.9185 4.33594 15.6463C3.0659 14.374 2.26145 12.711 2.05235 10.9255C1.84325 9.14002 2.24169 7.33614 3.18341 5.80485C4.12512 4.27355 5.5552 3.10411 7.24298 2.48516C8.93076 1.86621 10.7778 1.83384 12.4863 2.39326L11.4383 3.44026C11.3803 3.49726 11.3283 3.56026 11.2803 3.62526C9.91235 3.34916 8.49189 3.52063 7.22898 4.11431C5.96606 4.70799 4.92774 5.69235 4.26757 6.92182C3.6074 8.15128 3.36045 9.56057 3.56322 10.9413C3.76599 12.3219 4.40773 13.6007 5.39353 14.5884C6.37933 15.5762 7.65683 16.2204 9.03712 16.4259C10.4174 16.6314 11.8272 16.3872 13.0579 15.7295C14.2887 15.0717 15.2751 14.0353 15.8713 12.7736C16.4674 11.5118 16.6417 10.0917 16.3683 8.72326C16.4367 8.67472 16.5009 8.62053 16.5603 8.56126L17.6023 7.51926H17.6033ZM14.8983 9.00026C15.1129 10.0534 14.9826 11.1477 14.5264 12.1209C14.0703 13.0942 13.3127 13.8945 12.3659 14.4033C11.4191 14.9121 10.3336 15.1022 9.27028 14.9456C8.20695 14.7889 7.22239 14.2938 6.46258 13.5336C5.70276 12.7734 5.20814 11.7886 5.05203 10.7252C4.89593 9.66176 5.08665 8.57635 5.59593 7.62984C6.10521 6.68334 6.90593 5.92615 7.87938 5.4705C8.85284 5.01486 9.94721 4.88503 11.0003 5.10026V6.64626C10.2539 6.42346 9.45458 6.45598 8.7288 6.73866C8.00302 7.02135 7.39227 7.53806 6.99325 8.20697C6.59423 8.87589 6.42973 9.65879 6.52581 10.4317C6.62188 11.2047 6.97304 11.9235 7.52368 12.4744C8.07432 13.0252 8.79298 13.3767 9.56588 13.4731C10.3388 13.5695 11.1218 13.4053 11.7908 13.0066C12.4599 12.6079 12.9769 11.9973 13.2599 11.2717C13.5429 10.546 13.5757 9.7467 13.3533 9.00026H14.8983ZM9.99826 11.5003C10.2283 11.5004 10.4553 11.4476 10.6617 11.346C10.868 11.2443 11.0483 11.0966 11.1884 10.9142C11.3286 10.7318 11.4249 10.5196 11.47 10.294C11.515 10.0684 11.5076 9.83551 11.4483 9.61326L13.0303 8.03026L13.0603 8.00026H15.5003C15.566 8.00038 15.631 7.98754 15.6918 7.96249C15.7525 7.93744 15.8077 7.90066 15.8543 7.85426L17.8543 5.85426C17.9244 5.78433 17.9721 5.69516 17.9915 5.59805C18.0109 5.50094 18.001 5.40027 17.963 5.3088C17.9251 5.21732 17.8609 5.13917 17.7785 5.08424C17.6961 5.02931 17.5993 5.00008 17.5003 5.00026H15.0003V2.50026C15.0002 2.40144 14.9709 2.30485 14.9161 2.22268C14.8612 2.1405 14.7832 2.07643 14.6919 2.03855C14.6006 2.00068 14.5002 1.99069 14.4033 2.00986C14.3063 2.02903 14.2172 2.0765 14.1473 2.14626L12.1473 4.14626C12.1007 4.1927 12.0637 4.24787 12.0385 4.30861C12.0133 4.36936 12.0003 4.43448 12.0003 4.50026V6.94026C11.99 6.94998 11.98 6.95998 11.9703 6.97026L10.3883 8.55026C10.1658 8.49057 9.93264 8.48287 9.70675 8.52775C9.48086 8.57263 9.26833 8.66889 9.0856 8.80908C8.90288 8.94926 8.75486 9.12961 8.65302 9.33617C8.55117 9.54273 8.49821 9.76996 8.49826 10.0003C8.49826 10.3981 8.65629 10.7796 8.9376 11.0609C9.2189 11.3422 9.60043 11.5003 9.99826 11.5003Z"
    />
  </svg>
);
