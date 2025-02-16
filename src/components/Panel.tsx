const Panel = ({header,children}:{header:string,children:React.ReactNode}) => {
    return <div style={{padding:"16px 0",display:"flex",flexDirection:"column",backgroundColor:"white",gap:"24px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            <span style={{padding:"0 16px",fontSize:"16px",fontWeight:"600",color:"#707070"}}>{header}</span>
            <span style={{padding:"0 16px",fontSize:"12px",color:"#707070"}}>|||||||||||</span>
        </div>
        {children}
    </div>
}

export default Panel;