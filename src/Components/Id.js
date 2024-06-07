import React from 'react';

export const Id = () => {
    return (
        <div style={{paddingLeft:"25vw", paddingTop:"10vh"}}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src="/me.jpg" alt="Description of the image" style={{ width: "300px", height: "380px" }} />
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                            <h1 style={{verticalAlign: "top" }}>Software Developer</h1>
                            
                            <table >
                                <tbody>
                                    <tr>
                                        <td>Column 1 Content</td>
                                        <td>Column 2 Content</td>
                                    </tr>
                                    <tr>
                                        <td>Column 1 Content</td>
                                        <td>Column 2 Content</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    
                       
                </tbody>
            </table>
        </div>
    );
}
