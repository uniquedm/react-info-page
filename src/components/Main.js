import React from "react";

export default function Main({darkMode}) {
    return (
        <content className={darkMode ? "dark" : ""}>
            <h1 className="content--title">Facts about React</h1>
            <ul className="ul">
                <li>Released in 2013</li>
                <li>Originally Created by Jordan Walke</li>
                <li>Maintained by Facebook</li>
                <li>Over 100K stars on GitHub</li>
            </ul>
        </content>
    );
}