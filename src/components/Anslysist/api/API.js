class API {
	static GETToilet = async () => {
		const response = await [
			{
				"2018-11-20": [
					{
						time: "00:00",
						tempt: 22,
						moist: 70,
						CO2: 700
					},
					{
						time: "04:00",
						tempt: 22,
						moist: 60,
						CO2: 800
					},
					{
						time: "08:00",
						tempt: 16,
						moist: 75,
						CO2: 500
					},
					{
						time: "12:00",
						tempt: 17,
						moist: 70,
						CO2: 400
					},
					{
						time: "16:00",
						tempt: 22,
						moist: 90,
						CO2: 900
					},
					{
						time: "20:00",
						tempt: 18,
						moist: 70,
						CO2: 850
					}
				]
			},
			{
				"2018-11-21": [
					{
						time: "00:00",
						tempt: 22,
						moist: 70,
						CO2: 700
					},
					{
						time: "04:00",
						tempt: 22,
						moist: 60,
						CO2: 800
					},
					{
						time: "08:00",
						tempt: 16,
						moist: 75,
						CO2: 500
					},
					{
						time: "12:00",
						tempt: 17,
						moist: 70,
						CO2: 400
					},
					{
						time: "16:00",
						tempt: 22,
						moist: 90,
						CO2: 900
					},
					{
						time: "20:00",
						tempt: 18,
						moist: 70,
						CO2: 850
					}
				]
			},
			{
				"2018-11-22": [
					{
						time: "00:00",
						tempt: 22,
						moist: 70,
						CO2: 700
					},
					{
						time: "04:00",
						tempt: 22,
						moist: 60,
						CO2: 800
					},
					{
						time: "08:00",
						tempt: 16,
						moist: 75,
						CO2: 500
					},
					{
						time: "12:00",
						tempt: 17,
						moist: 70,
						CO2: 400
					},
					{
						time: "16:00",
						tempt: 22,
						moist: 90,
						CO2: 900
					},
					{
						time: "20:00",
						tempt: 18,
						moist: 70,
						CO2: 850
					}
				]
			},
			{
				"2018-11-23": [
					{
						time: "00:00",
						tempt: 22,
						moist: 70,
						CO2: 700
					},
					{
						time: "04:00",
						tempt: 22,
						moist: 60,
						CO2: 800
					},
					{
						time: "08:00",
						tempt: 16,
						moist: 75,
						CO2: 500
					},
					{
						time: "12:00",
						tempt: 17,
						moist: 70,
						CO2: 400
					},
					{
						time: "16:00",
						tempt: 22,
						moist: 90,
						CO2: 900
					},
					{
						time: "20:00",
						tempt: 19,
						moist: 80,
						CO2: 670
					}
				]
			},
			{
				"2018-11-24": [
					{
						time: "00:00",
						tempt: 17,
						moist: 40,
						CO2: 450
					},
					{
						time: "04:00",
						tempt: 15,
						moist: 30,
						CO2: 400
					},
					{
						time: "08:00",
						tempt: 17,
						moist: 50,
						CO2: 500
					},
					{
						time: "12:00",
						tempt: 19,
						moist: 45,
						CO2: 500
					},
					{
						time: "16:00",
						tempt: 21,
						moist: 50,
						CO2: 400
					},
					{
						time: "20:00",
						tempt: 20,
						moist: 35,
						CO2: 650
					}
				]
			}
		];
		return response;
	};

	static GETKitchen = async () => {
		const response = await [
			{
				"2018-22-11": [
					{
						time: "00:00",
						tempt: "22",
						moist: "56",
						CO2: "700"
					},
					{
						time: "05:00",
						tempt: "22",
						moist: "40",
						CO2: "800"
					},
					{
						time: "10:00",
						tempt: "16",
						moist: "48",
						CO2: "500"
					},
					{
						time: "15:00",
						tempt: "17",
						moist: "72",
						CO2: "400"
					},
					{
						time: "20:00",
						tempt: "22",
						moist: "45",
						CO2: "900"
					}
				]
			}
		];
		return response;
	};
}

export default API;
