import React from 'react';

export default () => <div>
    <h1>Membership</h1>
    <p>If you are also a descendant, or spouse of a descendant, we would love to have you join us.
    </p>
    <p>Please fill in this form and mail it with your check for $5 made payable to Colby Family Association with a 4 generation pedigree chart to:
    </p>
    <div>
        James Colby<br/>
        PO Box 6663<br/>
        Scarborough, ME 04070<br/>
        <a href="mailto:jcolby6@maine.rr.com">jcolby6@maine.rr.com</a>
    </div>
    <br/>
    <table className="membershipForm">
        <thead><th colSpan="2">COLBY FAMILY ASSOCIATION MEMBERSHP</th></thead>
        <tbody>
        <tr><td>NAME</td><td className="rightCol">&nbsp;</td></tr>
        <tr><td>ADDRESS</td><td className="rightCol">&nbsp;</td></tr>
        <tr><td>CITY</td><td className="rightCol">&nbsp;</td></tr>
        <tr><td>STATE</td><td className="rightCol">&nbsp;</td></tr>
        <tr><td>ZIP</td><td className="rightCol">&nbsp;</td></tr>
        <tr><td>PHONE</td><td className="rightCol">&nbsp;</td></tr>
        <tr><td>E-MAIL</td><td className="rightCol">&nbsp;</td></tr>
        </tbody>
    </table>
</div>