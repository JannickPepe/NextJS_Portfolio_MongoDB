import BaseLayout from '@/layouts/BaseLayout';

const Cv = () =>
    <BaseLayout>
        <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
            <iframe src="/CV_FrontendDev_Candeno.pdf" style={{width: '100%', height: '800px'}}>
            </iframe>
        </div>
        </div>
    </BaseLayout>

export default Cv;