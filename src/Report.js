import React, {useState, useEffect} from "react";
import './Report.css';

const downloadPdf = async () => {  
    var content = document.getElementById("root");
    var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    pri.document.open();
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  };

const View = () => {
    const [url, setUrl] = useState(""); 

    useEffect(() => {
        setUrl(localStorage.getItem("url"));
    }, [])

    return(
    <div className="container">
        <div className="header">
            <button onClick={downloadPdf}>Download pdf</button>
            <button>Download pptx</button>

            <div>Report Title</div>
            <div className="settings-icon"></div>
        </div>
        <div className="iframe">
            <iframe id="ifmcontentstoprint" src={url} />
        </div>
        <div id="divcontents"></div>
    </div>)
}

export default View;