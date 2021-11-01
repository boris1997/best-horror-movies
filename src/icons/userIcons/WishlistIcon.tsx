import { FC } from "react";
import { IIcon } from "../IconType";

const WishlistIcon: FC<IIcon> = ({ fill, IconClasses }) => {
  return (
    <svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      className={IconClasses && IconClasses}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.467 9.55034L10.9167 18L19.3663 9.55034C20.3056 8.61103 20.8333 7.33706 20.8333 6.00867C20.8333 3.24246 18.5909 1 15.8247 1C14.4963 1 13.2223 1.5277 12.283 2.46701L10.9167 3.83333L9.55034 2.46701C8.61103 1.5277 7.33706 1 6.00867 1C3.24246 1 1 3.24246 1 6.00867C1 7.33706 1.5277 8.61103 2.467 9.55034Z"
        fill="transparent"
      />
      <path
        d="M10.9167 18L10.5631 18.3536C10.7584 18.5488 11.075 18.5488 11.2702 18.3536L10.9167 18ZM2.467 9.55034L2.11345 9.90389L2.11345 9.90389L2.467 9.55034ZM19.3663 9.55034L19.0128 9.19679L19.0128 9.19679L19.3663 9.55034ZM9.55034 2.46701L9.90389 2.11345L9.90389 2.11345L9.55034 2.46701ZM10.9167 3.83333L10.5631 4.18689C10.7584 4.38215 11.075 4.38215 11.2702 4.18689L10.9167 3.83333ZM12.283 2.46701L11.9294 2.11345L11.9294 2.11345L12.283 2.46701ZM11.2702 17.6464L2.82056 9.19678L2.11345 9.90389L10.5631 18.3536L11.2702 17.6464ZM19.0128 9.19679L10.5631 17.6464L11.2702 18.3536L19.7199 9.90389L19.0128 9.19679ZM9.19679 2.82056L10.5631 4.18689L11.2702 3.47978L9.90389 2.11345L9.19679 2.82056ZM11.2702 4.18689L12.6365 2.82056L11.9294 2.11345L10.5631 3.47978L11.2702 4.18689ZM15.8247 0.5C14.3637 0.5 12.9625 1.08038 11.9294 2.11345L12.6365 2.82056C13.4821 1.97502 14.6289 1.5 15.8247 1.5V0.5ZM20.3333 6.00867C20.3333 7.20445 19.8583 8.35125 19.0128 9.19679L19.7199 9.90389C20.753 8.87082 21.3333 7.46966 21.3333 6.00867H20.3333ZM21.3333 6.00867C21.3333 2.96632 18.867 0.5 15.8247 0.5V1.5C18.3147 1.5 20.3333 3.5186 20.3333 6.00867H21.3333ZM6.00867 1.5C7.20445 1.5 8.35125 1.97502 9.19679 2.82056L9.90389 2.11345C8.87082 1.08038 7.46966 0.5 6.00867 0.5V1.5ZM1.5 6.00867C1.5 3.5186 3.5186 1.5 6.00867 1.5V0.5C2.96632 0.5 0.5 2.96632 0.5 6.00867H1.5ZM2.82056 9.19678C1.97502 8.35124 1.5 7.20445 1.5 6.00867H0.5C0.5 7.46966 1.08037 8.87081 2.11345 9.90389L2.82056 9.19678Z"
        fill="black"
      />
    </svg>
  );
};
export default WishlistIcon;