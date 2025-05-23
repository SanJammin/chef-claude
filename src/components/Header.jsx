import chefClaudeLogo from "/logo.png";

export default function Header() {
    return (
        <header className="header">
            <img src={chefClaudeLogo} alt="Robot chef wearing a hat" className="logo" />
            <h1 className="title">Chef Claude</h1>
        </header>
    );
}