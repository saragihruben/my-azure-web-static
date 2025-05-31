import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import styles from "./Highlights.module.css";
import Link from "@docusaurus/Link";
import clsx from "clsx";

const ChromiumExample = `
curl \\
--request POST http://localhost:3000/forms/chromium/convert/url \\
--form url=https://my.url \\
--form landscape=true \\
--form marginTop=1 \\
--form marginBottom=1 \\
-o my.pdf
`;

const LibreOfficeExample = `
curl \\
--request POST http://localhost:3000/forms/libreoffice/convert \\
--form files=@/path/to/file.docx \\
--form files=@/path/to/file.xlsx \\
--form merge=true \\
--form pdfa=PDF/A-1b \\
-o my.pdf
`;

const PDFEnginesExample = `
curl \\
--request POST http://localhost:3000/forms/pdfengines/merge \\
--form files=@/path/to/file1.pdf \\
--form files=@/path/to/file2.pdf \\
--form files=@/path/to/file3.pdf \\
--form files=@/path/to/file4.pdf \\
-o my.pdf
`;

const ModuleList = [

];

function Modules() {

}


function Async() {
  return (
    <section className={clsx(styles.section, styles.darker)}>
      <div className="container">
         {/* Add a separator line */}
         <hr className={styles.separator} />
        <div className="row">
          <div className="col">
            <h2>
               Interactive Learn
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col col--6">
            <div className={styles.videoWrapper}>
                <img src="img/ghibly.png" alt="my youtube thumbnail"/>
            </div>
          </div>

          <div className="col col--6">
            <br/>
            <p className={styles.paddingTopLg}>
              Some hands-on sessions and material explanations on the Wiki will be enhanced with videos and are expected to help make it easier to understand the material being studied.
              <br/>
              Subscribe to <a href="https://www.youtube.com/@SaragihRubens" target="_blank">Saragih Ruben</a> YouTube channel to support me in creating future materials and videos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}


function Platform() {

}

function Sponsors() {

}

export default function Highlights() {
  return (
    <span>
      {Modules()} {Async()} {Platform()} {Sponsors()}
    </span>
  );
}
