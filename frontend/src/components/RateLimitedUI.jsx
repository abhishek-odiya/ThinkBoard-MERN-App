import { ZapIcon } from 'lucide-react';

const RateLimitedUI = () => {
    return (
        <div className="hero h-500 py-40">
            <div className="hero-content flex-col lg:flex-row">
                <ZapIcon size={100} />
                <div>
                    <h3 className="text-5xl font-bold">Rate limit Reached</h3>
                    <p className="py-2">
                        You've made too many requests in a short period. Please wait a moment.
                    </p>
                    <p className="py-4, px-1" >
                        Try again in a few seconds for the best experience.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default RateLimitedUI