class API {
	static GETBathroom = async () => {
		const response = await [
			{
				"2018-11-20": [
					{
						time: "00:00",
						tempt: 22,
						humidity: 70,
						CO2: 700,
						watt: 100,
						cost: 2
					},
					{
						time: "04:00",
						tempt: 22,
						humidity: 60,
						CO2: 800,
						watt: 150,
						cost: 2.5
					},
					{
						time: "08:00",
						tempt: 16,
						humidity: 75,
						CO2: 500,
						watt: 600,
						cost: 5
					},
					{
						time: "12:00",
						tempt: 17,
						humidity: 70,
						CO2: 400,
						watt: 300,
						cost: 2.75
					},
					{
						time: "16:00",
						tempt: 22,
						humidity: 90,
						CO2: 900,
						watt: 500,
						cost: 4
					},
					{
						time: "20:00",
						tempt: 18,
						humidity: 70,
						CO2: 850,
						watt: 700,
						cost: 8
					}
				]
			},
			{
				"2018-11-21": [
					{
						time: "00:00",
						tempt: 22,
						humidity: 70,
						CO2: 700,
						watt: 300,
						cost: 1
					},
					{
						time: "04:00",
						tempt: 22,
						humidity: 60,
						CO2: 800,
						watt: 500,
						cost: 2
					},
					{
						time: "08:00",
						tempt: 16,
						humidity: 75,
						CO2: 500,
						watt: 750,
						cost: 5
					},
					{
						time: "12:00",
						tempt: 17,
						humidity: 70,
						CO2: 400,
						watt: 150,
						cost: 6
					},
					{
						time: "16:00",
						tempt: 22,
						humidity: 90,
						CO2: 900,
						watt: 400,
						cost: 8
					},
					{
						time: "20:00",
						tempt: 18,
						humidity: 70,
						CO2: 850,
						watt: 600,
						cost: 10
					}
				]
			},
			{
				"2018-11-22": [
					{
						time: "00:00",
						tempt: 22,
						humidity: 70,
						CO2: 700,
						watt: 100,
						cost: 1
					},
					{
						time: "04:00",
						tempt: 22,
						humidity: 60,
						CO2: 800,
						watt: 120,
						cost: 1.2
					},
					{
						time: "08:00",
						tempt: 16,
						humidity: 75,
						CO2: 500,
						watt: 600,
						cost: 6
					},
					{
						time: "12:00",
						tempt: 17,
						humidity: 70,
						CO2: 400,
						watt: 1200,
						cost: 14
					},
					{
						time: "16:00",
						tempt: 22,
						humidity: 90,
						CO2: 900,
						watt: 600,
						cost: 6
					},
					{
						time: "20:00",
						tempt: 18,
						humidity: 70,
						CO2: 850,
						watt: 800,
						cost: 8
					}
				]
			},
			{
				"2018-11-23": [
					{
						time: "00:00",
						tempt: 22,
						humidity: 70,
						CO2: 700,
						watt: 75,
						cost: 0.75
					},
					{
						time: "04:00",
						tempt: 22,
						humidity: 60,
						CO2: 800,
						watt: 100,
						cost: 1
					},
					{
						time: "08:00",
						tempt: 16,
						humidity: 75,
						CO2: 500,
						watt: 400,
						cost: 4
					},
					{
						time: "12:00",
						tempt: 17,
						humidity: 70,
						CO2: 400,
						watt: 700,
						cost: 8
					},
					{
						time: "16:00",
						tempt: 22,
						humidity: 90,
						CO2: 900,
						watt: 800,
						cost: 10
					},
					{
						time: "20:00",
						tempt: 19,
						humidity: 80,
						CO2: 670,
						watt: 1200,
						cost: 15
					}
				]
			},
			{
				"2018-11-24": [
					{
						time: "00:00",
						tempt: 17,
						humidity: 40,
						CO2: 450,
						watt: 100,
						cost: 1
					},
					{
						time: "04:00",
						tempt: 15,
						humidity: 30,
						CO2: 150,
						watt: 120,
						cost: 1.2
					},
					{
						time: "08:00",
						tempt: 17,
						humidity: 50,
						CO2: 500,
						watt: 600,
						cost: 8
					},
					{
						time: "12:00",
						tempt: 19,
						humidity: 45,
						CO2: 500,
						watt: 800,
						cost: 10
					},
					{
						time: "16:00",
						tempt: 21,
						humidity: 50,
						CO2: 400,
						watt: 800,
						cost: 10
					},
					{
						time: "20:00",
						tempt: 20,
						humidity: 35,
						CO2: 650,
						watt: 1000,
						cost: 14
					}
				]
			},
			{
				"2018-11-25": [
					{
						time: "00:00",
						tempt: 17,
						humidity: 40,
						CO2: 450,
						watt: 100,
						cost: 1
					},
					{
						time: "04:00",
						tempt: 15,
						humidity: 30,
						CO2: 150,
						watt: 120,
						cost: 1.2
					},
					{
						time: "08:00",
						tempt: 17,
						humidity: 50,
						CO2: 500,
						watt: 600,
						cost: 6
					},
					{
						time: "12:00",
						tempt: 19,
						humidity: 45,
						CO2: 500,
						watt: 800,
						cost: 8
					},
					{
						time: "16:00",
						tempt: 21,
						humidity: 50,
						CO2: 400,
						watt: 800,
						cost: 10
					},
					{
						time: "20:00",
						tempt: 20,
						humidity: 35,
						CO2: 650,
						watt: 1000,
						cost: 11
					}
				]
			}
		];
		return response;
	};

	static GETBedroom = async () => {
		const response = await [
			{
				"2018-11-20": [
					{
						time: "00:00",
						tempt: 22.0066,
						humidity: 57.3067,
						CO2: 644.1229,
						watt: 2.3843,
						cost: 3.5764
					},
					{
						time: "04:00",
						tempt: 22.0061,
						humidity: 35.1581,
						CO2: 541.013,
						watt: 14.5569,
						cost: 21.835
					},
					{
						time: "08:00",
						tempt: 29.3104,
						humidity: 38.1091,
						CO2: 614.0648,
						watt: 1.5348,
						cost: 2.3022
					},
					{
						time: "12:00",
						tempt: 12.0161,
						humidity: 46.0459,
						CO2: 414.5106,
						watt: 11.0098,
						cost: 16.5147
					},
					{
						time: "16:00",
						tempt: 18.5907,
						humidity: 37.1862,
						CO2: 512.1574,
						watt: 5.8863,
						cost: 8.8294
					},
					{
						time: "20:00",
						tempt: 18.5907,
						humidity: 37.1862,
						CO2: 512.1574,
						watt: 5.8863,
						cost: 8.82945
					}
				]
			},
			{
				"2018-11-21": [
					{
						time: "00:00",
						tempt: 12.9907,
						humidity: 55.2822,
						CO2: 632.1156,
						watt: 18.0459,
						cost: 27.0688
					},
					{
						time: "04:00",
						tempt: 10.3337,
						humidity: 59.1675,
						CO2: 648.0232,
						watt: 13.2292,
						cost: 19.8438
					},
					{
						time: "08:00",
						tempt: 19.6833,
						humidity: 33.932,
						CO2: 520.3082,
						watt: 19.2842,
						cost: 28.9262
					},
					{
						time: "12:00",
						tempt: 23.2841,
						humidity: 54.3126,
						CO2: 230.7285,
						watt: 8.7141,
						cost: 13.07115
					},
					{
						time: "16:00",
						tempt: 18.9388,
						humidity: 54.6609,
						CO2: 412.5558,
						watt: 0.6557,
						cost: 0.9835
					},
					{
						time: "20:00",
						tempt: 20.6567,
						humidity: 37.2999,
						CO2: 542.0661,
						watt: 8.5328,
						cost: 12.7991
					}
				]
			},
			{
				"2018-11-22": [
					{
						time: "00:00",
						tempt: 19.5566,
						humidity: 62.7535,
						CO2: 366.1725,
						watt: 4.4283,
						cost: 6.64245
					},
					{
						time: "04:00",
						tempt: 12.4245,
						humidity: 48.14,
						CO2: 380.1613,
						watt: 13.4515,
						cost: 20.17725
					},
					{
						time: "08:00",
						tempt: 15.9978,
						humidity: 43.8667,
						CO2: 233.0402,
						watt: 16.8678,
						cost: 25.3016
					},
					{
						time: "12:00",
						tempt: 25.2615,
						humidity: 35.3201,
						CO2: 600.0483,
						watt: 2.7403,
						cost: 4.11045
					},
					{
						time: "16:00",
						tempt: 17.0017,
						humidity: 39.858,
						CO2: 393.717,
						watt: 11.8155,
						cost: 17.72325
					},
					{
						time: "20:00",
						tempt: 27.1055,
						humidity: 55.3672,
						CO2: 546.4972,
						watt: 3.1589,
						cost: 4.7383
					}
				]
			},
			{
				"2018-11-23": [
					{
						time: "00:00",
						tempt: 21.1842,
						humidity: 33.5614,
						CO2: 278.1306,
						watt: 14.616,
						cost: 21.924
					},
					{
						time: "00:00",
						tempt: 12.7158,
						humidity: 69.2148,
						CO2: 667.2994,
						watt: 17.1001,
						cost: 25.650150000000004
					},
					{
						time: "00:00",
						tempt: 15.9528,
						humidity: 37.8262,
						CO2: 684.6684,
						watt: 9.8948,
						cost: 14.8422
					},
					{
						time: "00:00",
						tempt: 18.0423,
						humidity: 51.8494,
						CO2: 606.8696,
						watt: 17.6245,
						cost: 26.4367
					},
					{
						time: "00:00",
						tempt: 25.2122,
						humidity: 53.7202,
						CO2: 322.4294,
						watt: 4.4674,
						cost: 6.7019
					},
					{
						time: "00:00",
						tempt: 29.2165,
						humidity: 58.0013,
						CO2: 438.0962,
						watt: 3.0249,
						cost: 4.53735
					}
				]
			},
			{
				"2018-11-24": [
					{
						time: "00:00",
						tempt: 28.3824,
						humidity: 55.2809,
						CO2: 431.1271,
						watt: 13.3968,
						cost: 20.0952
					},
					{
						time: "04:00",
						tempt: 21.2264,
						humidity: 69.3516,
						CO2: 430.6615,
						watt: 10.9411,
						cost: 16.41165
					},
					{
						time: "08:00",
						tempt: 11.3084,
						humidity: 36.5022,
						CO2: 298.5456,
						watt: 19.1575,
						cost: 28.73625
					},
					{
						time: "12:00",
						tempt: 25.2076,
						humidity: 43.6642,
						CO2: 491.651,
						watt: 5.2074,
						cost: 7.8111
					},
					{
						time: "16:00",
						tempt: 21.7044,
						humidity: 30.8424,
						CO2: 231.603,
						watt: 16.9249,
						cost: 25.38735
					},
					{
						time: "20:00",
						tempt: 18.1586,
						humidity: 31.0377,
						CO2: 207.4282,
						watt: 16.4567,
						cost: 24.685
					}
				]
			},
			{
				"2018-11-25": [
					{
						time: "00:00",
						tempt: 25.7086,
						humidity: 38.8667,
						CO2: 290.8665,
						watt: 12.1531,
						cost: 18.22965
					},
					{
						time: "04:00",
						tempt: 11.2551,
						humidity: 32.9225,
						CO2: 400.76,
						watt: 16.5174,
						cost: 24.7761
					},
					{
						time: "08:00",
						tempt: 29.7453,
						humidity: 60.3718,
						CO2: 528.5896,
						watt: 19.0307,
						cost: 28.54605
					},
					{
						time: "12:00",
						tempt: 14.8789,
						humidity: 30.4559,
						CO2: 352.2464,
						watt: 13.827,
						cost: 20.7405
					},
					{
						time: "16:00",
						tempt: 19.6701,
						humidity: 32.3024,
						CO2: 275.1316,
						watt: 6.6692,
						cost: 10.0038
					},
					{
						time: "20:00",
						tempt: 24.5888,
						humidity: 40.8747,
						CO2: 498.8846,
						watt: 2.2683,
						cost: 3.40245
					}
				]
			}
		];
		return response;
	};

	static GETKitchen = async () => {
		const response = await [
			{
				"2018-11-20": [
					{
						time: "00:00",
						tempt: 28.9035,
						humidity: 32.9712,
						CO2: 610.8858,
						watt: 14.5908,
						cost: 21.8862
					},
					{
						time: "00:00",
						tempt: 20.7234,
						humidity: 61.4039,
						CO2: 320.2956,
						watt: 10.6037,
						cost: 15.90555
					},
					{
						time: "00:00",
						tempt: 25.2255,
						humidity: 40.2598,
						CO2: 530.8311,
						watt: 7.3848,
						cost: 11.0772
					},
					{
						time: "00:00",
						tempt: 10.3393,
						humidity: 39.4034,
						CO2: 500.7913,
						watt: 12.6673,
						cost: 19.00095
					},
					{
						time: "00:00",
						tempt: 24.8559,
						humidity: 43.3527,
						CO2: 565.0219,
						watt: 13.9656,
						cost: 20.9484
					},
					{
						time: "00:00",
						tempt: 25.0911,
						humidity: 62.2245,
						CO2: 627.2903,
						watt: 3.7348,
						cost: 5.6022
					}
				]
			},
			{
				"2018-11-21": [
					{
						time: "00:00",
						tempt: 19.1661,
						humidity: 42.6588,
						CO2: 234.3422,
						watt: 1.2374,
						cost: 1.8561
					},
					{
						time: "00:00",
						tempt: 10.4484,
						humidity: 48.6542,
						CO2: 617.8281,
						watt: 8.6694,
						cost: 13.0041
					},
					{
						time: "00:00",
						tempt: 23.5253,
						humidity: 69.3166,
						CO2: 691.2856,
						watt: 2.3299,
						cost: 3.4948
					},
					{
						time: "00:00",
						tempt: 25.7555,
						humidity: 36.1832,
						CO2: 674.549,
						watt: 8.372,
						cost: 12.558
					},
					{
						time: "00:00",
						tempt: 12.8273,
						humidity: 65.256,
						CO2: 688.8114,
						watt: 1.4075,
						cost: 2.11125
					},
					{
						time: "00:00",
						tempt: 16.9015,
						humidity: 59.9066,
						CO2: 687.3487,
						watt: 3.7472,
						cost: 5.6208
					}
				]
			},
			{
				"2018-11-22": [
					{
						time: "00:00",
						tempt: 16.2601,
						humidity: 68.5436,
						CO2: 687.0949,
						watt: 6.8063,
						cost: 10.20945
					},
					{
						time: "00:00",
						tempt: 28.2176,
						humidity: 51.2354,
						CO2: 293.2956,
						watt: 16.7108,
						cost: 25.0662
					},
					{
						time: "00:00",
						tempt: 26.3051,
						humidity: 42.5517,
						CO2: 356.6174,
						watt: 10.8919,
						cost: 16.33785
					},
					{
						time: "00:00",
						tempt: 20.6609,
						humidity: 46.1436,
						CO2: 513.1852,
						watt: 13.0903,
						cost: 19.63545
					},
					{
						time: "00:00",
						tempt: 24.4065,
						humidity: 69.3445,
						CO2: 396.6554,
						watt: 0.1601,
						cost: 0.2401
					},
					{
						time: "00:00",
						tempt: 21.4285,
						humidity: 57.4977,
						CO2: 227.7448,
						watt: 7.0264,
						cost: 10.5396
					}
				]
			},
			{
				"2018-11-23": [
					{
						time: "00:00",
						tempt: 11.1647,
						humidity: 48.6229,
						CO2: 633.3868,
						watt: 12.3879,
						cost: 18.58185
					},
					{
						time: "04:00",
						tempt: 26.6597,
						humidity: 57.616,
						CO2: 347.794,
						watt: 13.8482,
						cost: 20.7723
					},
					{
						time: "08:00",
						tempt: 13.9384,
						humidity: 41.3504,
						CO2: 382.1155,
						watt: 10.0936,
						cost: 15.1404
					},
					{
						time: "12:00",
						tempt: 25.8928,
						humidity: 66.3209,
						CO2: 616.3575,
						watt: 5.6358,
						cost: 8.4537
					},
					{
						time: "16:00",
						tempt: 14.1019,
						humidity: 61.5801,
						CO2: 562.0878,
						watt: 16.2426,
						cost: 24.3639
					},
					{
						time: "20:00",
						tempt: 28.8306,
						humidity: 42.681,
						CO2: 421.3369,
						watt: 6.7531,
						cost: 10.12965
					}
				]
			},
			{
				"2018-11-24": [
					{
						time: "00:00",
						tempt: 18.713,
						humidity: 46.4179,
						CO2: 259.4276,
						watt: 10.1723,
						cost: 15.25845
					},
					{
						time: "04:00",
						tempt: 25.3975,
						humidity: 54.1661,
						CO2: 456.1652,
						watt: 13.8444,
						cost: 20.7666
					},
					{
						time: "08:00",
						tempt: 20.7369,
						humidity: 43.9214,
						CO2: 607.5289,
						watt: 6.6927,
						cost: 10.03905
					},
					{
						time: "12:00",
						tempt: 22.9704,
						humidity: 57.7811,
						CO2: 546.1845,
						watt: 11.7321,
						cost: 17.59815
					},
					{
						time: "16:00",
						tempt: 12.966,
						humidity: 43.0999,
						CO2: 430.3041,
						watt: 16.6033,
						cost: 24.90495
					},
					{
						time: "20:00",
						tempt: 16.0141,
						humidity: 38.7192,
						CO2: 669.3729,
						watt: 5.1518,
						cost: 7.7277
					}
				]
			},
			{
				"2018-11-25": [
					{
						time: "00:00",
						tempt: 16.0253,
						humidity: 58.7597,
						CO2: 303.5188,
						watt: 4.8818,
						cost: 7.3227
					},
					{
						time: "04:00",
						tempt: 26.1773,
						humidity: 56.2168,
						CO2: 422.1442,
						watt: 18.6689,
						cost: 28.00335
					},
					{
						time: "08:00",
						tempt: 10.6663,
						humidity: 68.5366,
						CO2: 567.956,
						watt: 11.1858,
						cost: 16.7787
					},
					{
						time: "12:00",
						tempt: 15.4542,
						humidity: 66.4799,
						CO2: 557.3169,
						watt: 1.3998,
						cost: 2.0997
					},
					{
						time: "16:00",
						tempt: 27.9413,
						humidity: 43.3962,
						CO2: 512.9623,
						watt: 11.3409,
						cost: 17.01135
					},
					{
						time: "20:00",
						tempt: 10.285,
						humidity: 60.9027,
						CO2: 417.9352,
						watt: 0.9504,
						cost: 1.4256
					}
				]
			}
		];
		return response;
	};

	static GETLivingroom = async () => {
		const response = await [
			{
				"2018-11-20": [
					{
						time: "00:00",
						tempt: 16.0253,
						humidity: 58.7597,
						CO2: 303.5188,
						watt: 4.8818,
						cost: 7.3227
					},
					{
						time: "00:00",
						tempt: 26.1773,
						humidity: 56.2168,
						CO2: 422.1442,
						watt: 18.6689,
						cost: 28.00335
					},
					{
						time: "00:00",
						tempt: 10.6663,
						humidity: 68.5366,
						CO2: 567.956,
						watt: 11.1858,
						cost: 16.7787
					},
					{
						time: "00:00",
						tempt: 15.4542,
						humidity: 66.4799,
						CO2: 557.3169,
						watt: 1.3998,
						cost: 2.0997
					},
					{
						time: "00:00",
						tempt: 27.9413,
						humidity: 43.3962,
						CO2: 512.9623,
						watt: 11.3409,
						cost: 17.01135
					},
					{
						time: "00:00",
						tempt: 10.285,
						humidity: 60.9027,
						CO2: 417.9352,
						watt: 0.9504,
						cost: 1.4256
					}
				]
			},
			{
				"2018-11-21": [
					{
						time: "00:00",
						tempt: 21.9348,
						humidity: 57.5129,
						CO2: 355.2661,
						watt: 3.38,
						cost: 5.07
					},
					{
						time: "00:00",
						tempt: 21.731,
						humidity: 49.4606,
						CO2: 550.7108,
						watt: 7.5643,
						cost: 11.34645
					},
					{
						time: "00:00",
						tempt: 13.0509,
						humidity: 69.082,
						CO2: 569.2292,
						watt: 13.8662,
						cost: 20.7993
					},
					{
						time: "00:00",
						tempt: 18.6209,
						humidity: 58.3629,
						CO2: 484.4164,
						watt: 10.0961,
						cost: 15.14415
					},
					{
						time: "00:00",
						tempt: 26.4659,
						humidity: 63.0965,
						CO2: 318.1047,
						watt: 10.8499,
						cost: 16.27485
					},
					{
						time: "00:00",
						tempt: 28.486,
						humidity: 41.094,
						CO2: 519.0957,
						watt: 19.5901,
						cost: 29.38515
					}
				]
			},
			{
				"2018-11-22": [
					{
						time: "00:00",
						tempt: 10.0545,
						humidity: 40.352,
						CO2: 200.1855,
						watt: 12.033,
						cost: 18.0495
					},
					{
						time: "00:00",
						tempt: 22.3215,
						humidity: 45.3254,
						CO2: 555.7497,
						watt: 12.8506,
						cost: 19.2759
					},
					{
						time: "00:00",
						tempt: 23.5079,
						humidity: 47.8395,
						CO2: 494.7601,
						watt: 12.3299,
						cost: 18.49485
					},
					{
						time: "00:00",
						tempt: 16.1157,
						humidity: 58.8527,
						CO2: 609.6903,
						watt: 19.4065,
						cost: 29.109750000000002
					},
					{
						time: "00:00",
						tempt: 12.2852,
						humidity: 31.9005,
						CO2: 489.6918,
						watt: 13.6231,
						cost: 20.43465
					},
					{
						time: "00:00",
						tempt: 10.3254,
						humidity: 44.6495,
						CO2: 225.6205,
						watt: 7.349,
						cost: 11.0235
					}
				]
			},
			{
				"2018-11-23": [
					{
						time: "00:00",
						tempt: 26.0793,
						humidity: 48.4894,
						CO2: 204.2998,
						watt: 15.2299,
						cost: 22.84485
					},
					{
						time: "00:00",
						tempt: 29.2636,
						humidity: 44.2036,
						CO2: 659.8084,
						watt: 4.0176,
						cost: 6.0264
					},
					{
						time: "00:00",
						tempt: 15.753,
						humidity: 50.193,
						CO2: 592.7872,
						watt: 4.3965,
						cost: 6.5947499999999994
					},
					{
						time: "00:00",
						tempt: 12.6051,
						humidity: 33.8233,
						CO2: 533.8186,
						watt: 1.8902,
						cost: 2.8353
					},
					{
						time: "00:00",
						tempt: 19.8882,
						humidity: 43.3712,
						CO2: 436.8284,
						watt: 19.3973,
						cost: 29.095950000000002
					},
					{
						time: "00:00",
						tempt: 12.2314,
						humidity: 35.2725,
						CO2: 589.1736,
						watt: 8.3929,
						cost: 12.58935
					}
				]
			},
			{
				"2018-11-24": [
					{
						time: "00:00",
						tempt: 15.2872,
						humidity: 36.0323,
						CO2: 449.6662,
						watt: 13.5602,
						cost: 20.3403
					},
					{
						time: "00:00",
						tempt: 21.427,
						humidity: 50.5381,
						CO2: 379.523,
						watt: 8.9383,
						cost: 13.40745
					},
					{
						time: "00:00",
						tempt: 25.3799,
						humidity: 54.7356,
						CO2: 227.547,
						watt: 9.26,
						cost: 13.89
					},
					{
						time: "00:00",
						tempt: 18.8187,
						humidity: 58.0459,
						CO2: 453.8828,
						watt: 0.0872,
						cost: 0.1308
					},
					{
						time: "00:00",
						tempt: 15.4127,
						humidity: 54.0569,
						CO2: 356.0743,
						watt: 17.6748,
						cost: 26.5122
					},
					{
						time: "00:00",
						tempt: 24.6281,
						humidity: 35.2638,
						CO2: 269.2309,
						watt: 12.5124,
						cost: 18.7686
					}
				]
			},
			{
				"2018-11-25": [
					{
						time: "00:00",
						tempt: 14.6338,
						humidity: 50.7162,
						CO2: 317.3697,
						watt: 14.4831,
						cost: 21.72465
					},
					{
						time: "00:00",
						tempt: 24.7056,
						humidity: 52.3215,
						CO2: 586.1255,
						watt: 4.9225,
						cost: 7.383750000000001
					},
					{
						time: "00:00",
						tempt: 14.8598,
						humidity: 43.7262,
						CO2: 591.3005,
						watt: 15.9363,
						cost: 23.904449999999997
					},
					{
						time: "00:00",
						tempt: 12.8632,
						humidity: 35.5242,
						CO2: 298.1881,
						watt: 3.4729,
						cost: 5.209350000000001
					},
					{
						time: "00:00",
						tempt: 15.673,
						humidity: 61.5725,
						CO2: 419.978,
						watt: 6.8017,
						cost: 10.20255
					},
					{
						time: "00:00",
						tempt: 20.8136,
						humidity: 67.831,
						CO2: 586.8595,
						watt: 8.636,
						cost: 12.953999999999999
					}
				]
			}
		];
		return response;
	};
}

export default API;
