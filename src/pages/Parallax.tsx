import { useEffect, useState } from 'react';

const Parallax = () => {
    const [offsetY, setoffsetY] = useState<number>(0);
    const handleScroll = () => setoffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="background-one">
                <h1 className="background-one__title">Parallax</h1>

                <div
                    className="box box-one"
                    style={{
                        transform: `translateY(${offsetY * 0.7}px)`,
                    }}
                >
                    <div className="box-one__inner">
                        <h2>Box one {offsetY}</h2>
                    </div>
                </div>

                <div
                    className="box box-two"
                    style={{
                        transform: `translateY(${offsetY * 0.5}px)`,
                    }}
                >
                    <div className="box-two__inner">
                        <h2>Box two</h2>
                    </div>
                </div>

                <div
                    className="box box-three"
                    style={{
                        transform: `translateY(${offsetY * 0.4}px)`,
                    }}
                >
                    <div className="box-three__inner">
                        <h2>Box three</h2>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Parallax;
