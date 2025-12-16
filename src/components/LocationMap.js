'use client';

export default function LocationMap() {
    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 className="heading-lg">Où nous trouver ?</h2>
                    <p className="subtitle">Immeuble 45, Avenue du Japon, 1073 Montplaisir, Tunis, Tunisie</p>
                </div>

                <div style={{
                    width: '100%',
                    height: '450px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid var(--border)'
                }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.0!2d10.18!3d36.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd340f45555555%3A0x123456789abcdef!2sAvenue+du+Japon%2C+Tunis!5e0!3m2!1sen!2stn!4v1700000000000!5m2!1sen!2stn&q=Immeuble+45,+Avenue+du+Japon,+1073+Montplaisir,+Tunis,+Tunisie"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
