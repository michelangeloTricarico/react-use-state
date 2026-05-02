export default function Card({description}) {
    //const actualLanguage = data.find((item) => item.id == actualData)
    //const actualDescription = actualLanguage.description 
  return (
    <div style={{border:"1px,solid", borderRadius: "5px", margin:"0.5rem 2rem", padding:"1rem", textAlign:"left", color:"black", fontSize:"15px"}}>
        <p>{description}</p>
    </div>

  );
}