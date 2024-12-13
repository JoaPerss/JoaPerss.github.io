import googleCloudImage from '../images/associate-cloud-engineer.png';
import azureImage from '../images/microsoft-certified-fundamentals-badge.svg';
import checkmark from '../images/checkmark.png';

const Credentials = () => {
    return (
        <div className="container mx-auto bg-peach w-full p-5 rounded-lg opacity-98 h-max mt-5">
            <h1 className="lg:text-7xl text-center font-aloevera m-10 text-4xl">Certifications</h1>

            <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
                <div className="w-full sm:w-5/12 px-4 text-center flex flex-col items-center">
                    <div className="flex justify-center items-center bg-apricot shadow-lg rounded-lg w-72 h-72 mb-4">
                        <img 
                            src={googleCloudImage} 
                            alt="GCP Associate Cloud Engineer Badge" 
                            className="max-w-full max-h-full" 
                            draggable="false"
                        />
                    </div>
                    <h2 className="text-2xl font-aloevera font-bold">GCP Associate Cloud Engineer</h2>
                    <div className="flex items-center justify-center mt-2">
                        <a 
                            href="https://google.accredible.com/8d598a85-2dff-4582-86c4-d0f9ccc3611b" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 font-aloevera underline">View Certification</a>
                        <img src={checkmark} alt="Checkmark" className="w-6 h-6 ml-2" />
                    </div>
                </div>
                <div className="w-full sm:w-5/12 px-4 text-center flex flex-col items-center">
                    <div className="flex justify-center items-center bg-apricot shadow-lg rounded-lg w-72 h-72 mb-4">
                        <img 
                            src={azureImage} 
                            alt="AZ-900 Certification Badge" 
                            className="max-w-full max-h-full" 
                            draggable="false"
                        />
                    </div>
                    <h2 className="text-2xl font-aloevera font-bold">Microsoft Azure Fundamentals (AZ-900)</h2>
                    <div className="flex items-center justify-center mt-2">
                        <a 
                            href="https://learn.microsoft.com/en-us/users/joachimlvenskjoldpersson-5627/credentials/c84047276a7a6529" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 font-aloevera underline">View Certification</a>
                        <img src={checkmark} alt="Checkmark" className="w-6 h-6 ml-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Credentials;
