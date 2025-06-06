import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <Fragment>
            <style>{`
                * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: 'Segoe UI', sans-serif;
                    }

                    body {
                        background-color: #f3f7f0;
                        color: #333;
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                    }

                    header {
                        background-color: #4CAF50;
                        color: white;
                        padding: 1rem;
                        text-align: center;
                        font-size: 1.8rem;
                        font-weight: bold;
                    }

                    .dashboard {
                        flex: 1;
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        grid-template-rows: repeat(2, 1fr);
                        gap: 2rem;
                        padding: 2rem;
                        max-width: 1200px;
                        margin: auto;
                        height: 100%;
                    }

                    .card {
                        background-color: white;
                        border-radius: 15px;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        padding: 3rem 2rem;
                        text-align: center;
                        transition: transform 0.3s, box-shadow 0.3s;
                        cursor: pointer;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    .card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 8px 16px rgba(0,0,0,0.15);
                    }

                    .card h2 {
                        margin-bottom: 1rem;
                        color: #2e7d32;
                        font-size: 2rem;
                    }

                    .card p {
                        font-size: 1.1rem;
                        color: #666;
                    }

                    a {
                        text-decoration: none;
                        color: inherit;
                    }

                    @media (max-width: 768px) {
                        .dashboard {
                        grid-template-columns: 1fr;
                        grid-template-rows: auto;
                        }
                    }
            `}</style>

            <header>
                Dashboard
            </header>

            <section className="dashboard">
                <Link to="/ownerdashboard">
                    <div className="card">  
                        <h2>Owner</h2>
                        <p>Manage system settings and user privileges.</p>
                    </div>
                </Link>

                <Link to="/accounterdashboard">
                    <div className="card">
                        <h2>Accounter</h2>
                        <p>Track finances and manage transactions.</p>
                    </div>
                </Link>

                <Link to="/sellers">
                    <div className="card">
                        <h2>Seller</h2>
                        <p>Monitor sales and product listings.</p>
                    </div>
                </Link>

                <Link to="/farmers">
                    <div className="card">
                        <h2>Farmer</h2>
                        <p>View crop data and market trends.</p>
                    </div>
                </Link>
            </section>
        </Fragment>
    );
}
