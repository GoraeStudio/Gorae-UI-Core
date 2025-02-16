import StyleCard from "../components/StyleCard";
import "../assets/css/gridStyles.css";

const Home = () => {
    return <div style={{ width: "100%" }}>
        <div style={{ width: "100%", gap: "20px", display: "flex", flexDirection: "column"}}>

<div style={{display:"flex",flexDirection:"column",gap:"20px", background: "linear-gradient(180deg, #654AFF 0%, #476EE3 54%, #045EE7 100%)", padding:"120px 24px" }}>
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
                <StyleCard title="button" element={<button>sample</button>} />
                </div>
                <div style={{width:"100%",height:"100%"}}>
                <StyleCard title="div" element={<div>sample</div>} />
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
