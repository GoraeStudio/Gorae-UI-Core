interface ButtonProps {
    variant: "primary" | "default"
    size: "small" | "medium" | "large"
    children: React.ReactNode
}
const Button = ({variant="default",size="small",children}:ButtonProps) => {
    const styles = {
        primary: {
            color: "#0133CB",
            backgroundColor: "#E6EDFF",
            padding: "8px 16px",
            fontSize: "14px",
            fontWeight: "600"
        },
        default: {
            color: "#707070",
            backgroundColor: "#F6F6F6",
            padding: "8px 16px",
            fontSize: "14px",
            fontWeight: "600"
        },
        sizes: {
            small: {
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: "600"
            },
            medium: {
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "600"
            },
            large: {
                padding: "16px 32px",
                fontSize: "18px",
                fontWeight: "600"
            }
        }
    };

    const { color, backgroundColor, padding, fontSize, fontWeight } = {
        ...styles[variant],
        ...styles.sizes[size]
    };

    return <button style={{color, padding, borderRadius: "4px", backgroundColor, fontSize, fontWeight, border: "none"}}>{children}</button>
}

export default Button