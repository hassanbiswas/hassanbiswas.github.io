import { author } from '../../lib/utils';

const BrandLogo = () => {
    const totalLogo = 10;

    return (
        <div style={{ padding: '0em' }} className="brand-logo-containe">
            <div
                style={{ padding: '0em', aspectRatio: 1 }}
                className="brand-wrapper-containe brand-logo-wrapper-containe stacking-container "
            >
                <span
                    className="logo-wrappe brand-logo-wrappe"
                    dangerouslySetInnerHTML={{ __html: author.logoOutlineSvg }}
                />
                {Array.from({ length: totalLogo - 1 }, (_, index) => (
                    <span
                        key={index}
                        className="logo-wrappe brand-logo-wrappe"
                        inert
                        aria-hidden="true"
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default BrandLogo;
