interface ButtonProps {
    variant: "primary" | "default"
    size: "small" | "medium" | "large"
    children: React.ReactNode
}
const Button = ({variant="default",size="small",children}:ButtonProps) => {
    let color = "#0033CC"
    let padding = "8px 16px"
    let backgroundColor = "#F6F6F6"
    let fontSize = "14px"
    let fontWeight = "600"
    if(variant === "primary"){
        color = "#0133CB"
        backgroundColor = "#E6EDFF"
    }else if(variant=="default"){
        color = "#707070"
        backgroundColor = "#F6F6F6"
    }

    if(size === "small"){
        padding = "8px 16px"
        fontSize = "14px"
        fontWeight = "600"
    }else if(size === "medium"){
        padding = "12px 24px"
        fontSize = "16px"
        fontWeight = "600"
    }else if(size === "large"){
        padding = "16px 32px"
        fontSize = "18px"
        fontWeight = "600"
    }


    return <button style={{color:color,padding:padding,borderRadius:"4px",backgroundColor:backgroundColor,fontSize:fontSize,fontWeight:fontWeight,border:"none"}}>{children}</button>
}

export default Button