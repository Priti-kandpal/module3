export default function Footer() {
    return `
    <footer style="
        background:#EAE4F2;
        padding:12px;
        text-align:center;
        margin-top:40px;
        border-top:2px solid #C9C5E9;">
        
        <p style="color:#6D597A; margin:0; font-size:14px;">
            by • © ${new Date().getFullYear()} Priti Kandpal
        </p>
    </footer>
    `;
}
