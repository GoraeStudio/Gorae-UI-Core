import { Link } from "react-router"
import ArrowDownSvg from "../assets/svg/arrow-down.svg?react"

interface RouteBarProps {
    title: string
    path?: string
}

const RouteBar = ({title,path}:RouteBarProps) => {
    return <div style={{padding:"16px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"white",borderRadius:"6px",width:"100%"}}>
            <span style={{fontSize:"14px"}}>{title}</span>
            {path && <Link to={path}><ArrowDownSvg style={{rotate:"270deg"}} /></Link>}
        </div>
}

export default RouteBar;