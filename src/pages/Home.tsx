import StyleCard from "../components/StyleCard";
import "../assets/css/gridStyles.css";
import Panel from "../components/Panel";
import RouteBar from "../components/RouteBar";
import BusInfoUnit from "../components/BusInfoUnit";
import Button from "../components/\bButton";
const Home = () => {
    return <div style={{ width: "100%" }}>
        <div style={{ width: "100%", gap: "20px", display: "flex", flexDirection: "column"}}>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px", background: "url(/img/main.png)", backgroundSize: "cover", backgroundPosition: "left", backgroundRepeat: "no-repeat", height:"100vh" }}>
            <div style={{color:"white"}}>welcome to gorae ui</div>
            <div style={{display:"flex",flexDirection:"column",gap:"12px", justifyContent:"center", alignItems:"center"}}>
                <h2 style={{ fontSize: "48px", fontWeight: "600", color:"white" }}>GORAE UI</h2>
                <p style={{ fontSize: "20px", fontWeight: "normal", padding: "6px 0",color:"white" }}>단버스의 맛있는 디자인시스템</p>
            </div>
            <div  style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
                <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
                <Button variant="primary" size="small">Get Started</Button>
                <Button variant="default" size="small">npm i @gorae-ui/react</Button>
                <Button variant="default" size="small">npm i @gorae-ui/vue</Button>
                </div>
            </div>
            </div>
            <div className="grid-container" style={{padding:"80px 16px", display:"grid", gridTemplateColumns:"repeat(2,1fr)", alignSelf:"center", width:"100%"}}>
                <div style={{width:"100%",height:"100%"}}>
                <StyleCard title="panel" element={
                    <div style={{width:"200px"}}>
                    <Panel header="||||||||||||||" >
                    <span style={{fontSize:"14px",padding:"0 16px"}}>This is Home</span>
                    <span style={{fontSize:"14px",padding:"0 16px"}}>This is Home</span>
                    </Panel>
                    </div>
                    } />
                </div>
                <div style={{width:"100%",height:"100%"}}>
                <StyleCard title="routebar" element={
                    <div style={{width:"200px"}}>
                    <RouteBar />
                    </div>
                    } />
                </div>
                <div style={{width:"100%",height:"100%"}}>
            
                <StyleCard title="businfo" element={
                    
                    <div style={{width:"200px"}}>
                    <BusInfoUnit busNumber="720-2" busStation="죽전 평화의 광장" busTime="10:00" lastStation="3전" />
                    </div>
                    } />
                </div>
                <div style={{width:"100%",height:"100%"}}>
                <StyleCard title="select" element={
                    <div style={{width:"300px"}}>
                    <Panel header="죽전역">
                    <BusInfoUnit busNumber="720-2" busStation="죽전 평화의 광장" busTime="10:00" lastStation="3전" />
                    <BusInfoUnit busNumber="720-2" busStation="죽전 평화의 광장" busTime="10:00" lastStation="3전" />
                    </Panel>
                    </div>
                    } />
                </div>
                <div style={{width:"100%",height:"100%"}}>
                <StyleCard title="select" element={
                    <div style={{display:"flex",flexDirection:"column",gap:"12px",padding:"12px",backgroundColor:"white"}}>
                    <Button variant="primary" size="small">sample</Button> <Button variant="default" size="small">sample</Button> <Button variant="primary" size="medium">sample</Button> 
                    </div>
                    } />
                </div>
                <div style={{width:"100%",height:"100%"}}>  
                <StyleCard title="select" element={<select><option>sample</option></select>} />
                </div>
                <div style={{width:"100%",height:"100%"}}>
                <StyleCard title="select" element={<select><option>sample</option></select>} />
                </div>
            </div>
        </div>

    </div>;
};

export default Home;
