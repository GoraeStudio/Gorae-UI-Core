import StyleCard from "../components/StyleCard";
import "../assets/css/gridStyles.css";
import Panel from "../components/Panel";
import RouteBar from "../components/RouteBar";
import BusInfoUnit from "../components/BusInfoUnit";
const Home = () => {
    return <div style={{ width: "100%" }}>
        <div style={{ width: "100%", gap: "20px", display: "flex", flexDirection: "column"}}>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px", background: "url(/img/main.png)", backgroundSize: "cover", backgroundPosition: "left", backgroundRepeat: "no-repeat", height:"100vh" }}>
            <div style={{color:"white"}}>welcome to gorae ui</div>
            <div>
                <h2 style={{ fontSize: "48px", fontWeight: "600", color:"white" }}>GORAE UI DESIGN SYSTEM</h2>
                <p style={{ fontSize: "20px", fontWeight: "normal", padding: "6px 0",color:"white" }}>단버스의 맛있는 디자인시스템</p>
            </div>
            <div  style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
                <button  className="home-button" style={{ backgroundColor: "#E6EDFF", color: "#0133CC", padding: "8px 16px", border: "none", borderRadius: "4px", cursor: "pointer" }}>Get Started</button>
                <button className="home-button" style={{ backgroundColor: "#008CBA", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>npm i @gorae-ui/react</button>
                <button className="home-button" style={{ backgroundColor: "#f44336", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>npm i @gorae-ui/vue</button>
            </div>
            </div>
            <div className="grid-container" style={{padding:"80px 0", display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"12px", alignSelf:"center", width:"100%"}}>
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
                    
                    <div style={{width:"300px"}}>
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
                <StyleCard title="select" element={<select><option>sample</option></select>} />
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
