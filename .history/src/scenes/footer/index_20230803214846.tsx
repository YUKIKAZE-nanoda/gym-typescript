import Logo from '@/assets/Logo.png';
const Footer = () => {
    return (
        <footer className='bg-primart-100 py-16'>
            <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
                <div className='mt-16 basis-1/2 md:mt-0'>
                    <img alt='logo' src={Logo} />
                    <p> Lorem vitae ut </p>
                    <p>shigure All Rights Reserved </p>
                </div>
                <div className='mt-16 basis-1/4 md:t-0'>
                    <h4 className='font-bold'>Links</h4>
                    <p className='my-5'>Massa prci senectus</p>
                </div>
                <div></div>
                <div></div>

            </div>
        </footer>
    )
}

export default Footer;