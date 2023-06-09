const provider = new ethers.providers.Web3Provider(window.ethereum);

            const MoodContractAddress = "0x53f13D6647CE5f579E6441CF77D00843230560B8";
            const MoodContractABI = [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_mood",
                        "type": "string"
                    }
                ],
                "name": "setMood",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getMood",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }

            ];

    let MoodContract;
    let signer;

    provider.send("eth_requestAccounts", []).then(() => {
      provider.listAccounts().then(function (accounts) {
        signer = provider.getSigner(accounts[0]);
        MoodContract = new ethers.Contract(
          MoodContractAddress,
          MoodContractABI,
          signer
        );
      });
    });

    async function getMood() {
      const getMoodPromise = MoodContract.getMood();
      const Mood = await getMoodPromise;
      console.log(Mood);
    }

    async function setMood() {
      const mood = document.getElementById("mood").value;
      const setMoodPromise = MoodContract.setMood(mood);
      await setMoodPromise;
    }