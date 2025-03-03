import  ArrowDownSvg from "../assets/svg/arrow-down.svg?react"
import { useState } from "react"
interface BusInfoUnitProps {
    busNumber: string
    busStation: string
    busTime: string
    lastStation: string
    initialOpen?: boolean
    busColor?:string
}
const BusInfoUnit = ({busNumber,busStation,busTime,lastStation,initialOpen,busColor}:BusInfoUnitProps) => {
    const [isOpen,setIsOpen] = useState(initialOpen || false)
    return (
        <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:"white",padding:"0 16px",borderRadius:"6px",width:"100%",justifyContent:"space-between"}}>
<div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
    <span style={{fontSize:"18px",fontWeight:"600",color: busColor ? busColor : "#222222"}}>{busNumber}</span>
    <span style={{fontSize:"14px",color:"#707070"}}>{busStation}</span>
</div>
<div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"16px"}}>
<span style={{fontSize:"12px",color:"#0033CC",padding:"3px 7px",backgroundColor:"#E6EDFF"}}>{lastStation}</span>
    <span style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"1px"}}>
    <span style={{fontSize:"18px",fontWeight:"600",color:"#222222"}}>{busTime}</span>
    <span onClick={()=>setIsOpen(!isOpen)} style={{width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center"}}>
    {isOpen ? <ArrowDownSvg /> : <span style={{ transform: "rotate(180deg)" }}><ArrowDownSvg /></span>}
    </span>
    </span>
</div>
    </div>
{isOpen && 


<div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"white",padding:"0 16px",borderRadius:"6px",width:"100%"}}>
    {/* <button>Opened!</button> */}
    <div></div>{/* 임시 블럭 */}
    <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
    <span style={{paddingRight:"24px",fontSize:"14px",color:"#707070"}}>26분 전</span>
    <span style={{paddingRight:"24px",fontSize:"14px",color:"#707070"}}>52분 후</span>
    </div>
    </div>}
</div>
    );
}

export default BusInfoUnit;