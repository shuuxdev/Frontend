import { Column, FlexboxRow } from "../Styles/Container";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import Button from "./Button";
import { useContext, useRef } from "react";
import { CartContext } from "../Contexts/CartProvider";

const Quantity: React.FC<{ quantity: number, cart_id: number }> = ({ quantity, cart_id }) => {
    const { updateItemQuantity } = useContext(CartContext)
    return (

        <FlexboxRow height="30px" width="120px" alignItems="center" justifyContent="center">
            <Column >
                <Button height="30px" width="40px" border="none" borderRadius="0px" onClick={() => updateItemQuantity(cart_id, -1)}>
                    <AiOutlineMinus></AiOutlineMinus>
                </Button>
            </Column>
            <Column height="30px" width="40px" >
                <input type="text" value={quantity} style={{ height: 30, width: 40, border: "1px solid rgba(0,0,0,0.09)", outline: "none", borderRadius: "none" }} />
            </Column>

            <Column>
                <Button height="30px" width="40px" border="none" borderRadius="0px" onClick={() => updateItemQuantity(cart_id, 1)}>
                    <AiOutlinePlus></AiOutlinePlus>
                </Button>
            </Column>
        </FlexboxRow>
    );
};

export default Quantity;