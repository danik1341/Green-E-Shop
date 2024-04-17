import { LiaCartPlusSolid } from "react-icons/lia";
import { LuEye } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";

function ButtonsAppearOnHover() {
  return (
    <div className="mb-2">
      <div id="button-container" className="flex gap-3">
        <div id="add-to-cart-icon">
          <LiaCartPlusSolid className="w-6 h-6 transition ease-in-out hover:scale-125 delay-150 hover:text-green-400" />
        </div>
        <div id="eye-icon">
          <LuEye className="w-6 h-6 transition ease-in-out hover:scale-125 delay-150 hover:text-green-400" />
        </div>
        <div id="like-icon">
          <AiOutlineHeart className="w-6 h-6  hover:text-rose-500 transition ease-in-out hover:scale-125 delay-150" />
        </div>
      </div>
    </div>
  );
}
export { ButtonsAppearOnHover };
