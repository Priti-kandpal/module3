export default function Navbar() {
    return `
    <nav style="
        background:#F7EDE2;
        padding:15px;
        display:flex;
        align-items:center;
        border-bottom:2px solid #E2CFCF;
        position:relative;">
        
        <!-- App name on LEFT -->
        <h2 style="color:#5E548E; margin:0;">Todos App</h2>

        <!-- Links centered -->
        <div style="
            position:absolute;
            left:50%;
            transform:translateX(-50%);
            display:flex;
            gap:30px;
        ">
            <a href="index.html" style="color:#5E548E; text-decoration:none;">Home</a>
            <a href="signup.html" style="color:#5E548E; text-decoration:none;">Signup</a>
            <a href="login.html" style="color:#5E548E; text-decoration:none;">Login</a>
        </div>

    </nav>
    `;
}
