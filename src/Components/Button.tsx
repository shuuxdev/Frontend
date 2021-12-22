import React from "react";
import { FlexboxRow, IBorder, IFlexbox, ITranslate } from "../Styles/Container"


const Button: React.FC<{ background?: string }
    & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & IBorder & IFlexbox & ITranslate> = ({ children, background, border, borderRadius, onClick, height, width }) => {
        return (
            <button style={{ overflow: "hidden", borderRadius: borderRadius ?? "5px", border: border, cursor: "pointer", outline: "none" }} type="button" onClick={onClick}>
                <FlexboxRow background={background} height={height ?? "40px"} width={width ?? "70px"} justifyContent="center" alignItems="center">
                    {children}
                </FlexboxRow>
            </button>
        )
    }


export default Button