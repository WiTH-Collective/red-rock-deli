let seed = 0;
const fauxArray = [
    0.7685,
    0.2307,
    0.7286,
    0.2751,
    0.7657,
    0.1758,
    0.0204,
    0.3545,
    0.273,
    0.2182,
    0.2469,
    0.4282,
    0.9801,
    0.4047,
    0.9599,
    0.877,
    0.447,
    0.9755,
    0.2954,
    0.3758,
    0.2503,
    0.4617,
    0.0681,
    0.6567,
    0.5259,
    0.5646,
    0.3489,
    0.7782,
    0.5468,
    0.9295,
    0.3419,
    0.8539,
    0.9412,
    0.3457,
    0.3737,
    0.6433,
    0.4962,
    0.157,
    0.061,
    0.5278,
    0.8022,
    0.6694,
    0.6408,
    0.5654,
    0.0814,
    0.4807,
    0.385,
    0.4607,
    0.8822,
    0.3512,
    0.4443,
    0.6097,
    0.9311,
    0.6591,
    0.5239,
    0.6988,
    0.7806,
    0.4941,
    0.6844,
    0.2302,
    0.1568,
    0.5161,
    0.0117,
    0.2073,
    0.3913,
    0.0712,
    0.3639,
    0.0273,
    0.3727,
    0.835,
    0.5993,
    0.8479,
    0.0684,
    0.3027,
    0.3051,
    0.2314,
    0.2408,
    0.4156,
    0.1594,
    0.4166,
    0.7596,
    0.6082,
    0.7352,
    0.0752,
    0.461,
    0.1188,
    0.2054,
    0.3789,
    0.3502,
    0.7334,
    0.0571,
    0.2256,
    0.9375,
    0.2293,
    0.8959,
    0.2762,
    0.9168,
    0.6481,
    0.4968,
    0.9414,
    0.3543,
    0.0439,
    0.5225,
    0.472,
    0.352,
    0.6213,
    0.4906,
    0.635,
    0.9802,
    0.7814,
    0.5887,
    0.9992,
    0.6631,
    0.5691,
    0.9452,
    0.6585,
    0.0611,
    0.3946,
    0.0401,
    0.0177,
    0.0002,
    0.5008,
    0.8204,
    0.2036,
    0.2341,
    0.4408,
    0.3937,
    0.7174,
    0.1775,
    0.6535,
    0.6595,
    0.9139,
    0.0395,
    0.6299,
    0.7274,
    0.46,
    0.2692,
    0.6102,
    0.5998,
    0.9485,
    0.9843,
    0.0302,
    0.865,
    0.3383,
    0.1314,
    0.0274,
    0.043,
    0.4699,
    0.9009,
    0.0241,
    0.5028,
    0.7929,
    0.1997,
    0.2544,
    0.8095,
    0.9197,
    0.9067,
    0.8988,
    0.2452,
    0.9582,
    0.2751,
    0.3452,
    0.7483,
    0.6716,
    0.8781,
    0.0133,
    0.1307,
    0.4648,
    0.8767,
    0.7853,
    0.8755,
    0.4543,
    0.3744,
    0.7415,
    0.552,
    0.5145,
    0.3573,
    0.0514,
    0.62,
    0.0561,
    0.3058,
    0.583,
    0.4516,
    0.1483,
    0.8132,
    0.3312,
    0.5533,
    0.9523,
    0.7909,
    0.6563,
    0.7254,
    0.9053,
    0.351,
    0.5152,
    0.9258,
    0.9208,
    0.2949,
    0.1613,
    0.5789,
    0.7683,
    0.5333,
    0.4208,
    0.9691,
    0.4213,
    0.8202,
    0.3572,
    0.3176,
    0.289,
    0.81,
    0.2174,
    0.1071,
    0.2477,
    0.8635,
    0.98,
    0.4617,
    0.5503,
    0.1161,
    0.4302,
    0.1713,
    0.1415,
    0.8574,
    0.1579,
    0.9465,
    0.2735,
    0.1646,
    0.789,
    0.3765,
    0.0533,
    0.0754,
    0.2962,
    0.7152,
    0.5547,
    0.9918,
    0.3959,
    0.192,
    0.0048,
    0.9034,
    0.7402,
    0.7492,
    0.2635,
    0.6608,
    0.3338,
    0.3177,
    0.448,
    0.8091,
    0.9471,
    0.582,
    0.1102,
    0.386,
    0.7975,
    0.1273,
    0.8929,
    0.1834,
    0.1887,
    0.8743,
    0.6526,
    0.223,
    0.5268,
    0.7775,
    0.4543,
    0.6105,
    0.9931,
    0.376,
    0.2915,
    0.524,
    0.958,
    0.3337,
    0.5847,
    0.0141,
    0.3488,
    0.7573,
    0.3861,
    0.1603,
    0.5112,
    0.4583,
    0.7115,
    0.417,
    0.7227,
    0.7193,
    0.574,
    0.2078,
    0.8756,
    0.1676,
    0.4376,
    0.8113,
    0.1037,
    0.815,
    0.2324,
    0.4765,
    0.8105,
    0.4504,
    0.5879,
    0.2835,
    0.3603,
    0.2316,
    0.9268,
    0.5461,
    0.5143,
    0.6011,
    0.3399,
    0.095,
    0.059,
    0.6722,
    0.8845,
    0.5901,
    0.0954,
    0.6847,
    0.5342,
    0.0567,
    0.0782,
    0.1089,
    0.2887,
    0.7019,
    0.4739,
    0.8465,
    0.197,
    0.2388,
    0.4446,
    0.1754,
    0.6505,
    0.8328,
    0.2714,
    0.0041,
    0.2277,
    0.2513,
    0.1923,
    0.2189,
    0.7363,
    0.0732,
    0.9253,
    0.8254,
    0.7502,
    0.2534,
    0.0822,
    0.6319,
    0.935,
    0.5188,
    0.4674,
    0.2905,
    0.3558,
    0.9765,
    0.4184,
    0.976,
    0.7099,
    0.8354,
    0.7946,
    0.0215,
    0.5518,
    0.4972,
    0.1759,
    0.8958,
    0.801,
    0.5372,
    0.6671,
    0.8804,
    0.2087,
    0.0464,
    0.6706,
    0.8043,
    0.3838,
    0.8886,
    0.7703,
    0.0403,
    0.8444,
    0.2166,
    0.7179,
    0.2058,
    0.2928,
    0.3188,
    0.3824,
    0.5096,
    0.4887,
    0.7398,
    0.1348,
    0.1666,
    0.712,
    0.3691,
    0.176,
    0.1076,
    0.5131,
    0.1871,
    0.1408,
    0.53,
    0.9188,
    0.6418,
    0.5779,
    0.3272,
    0.669,
    0.5834,
    0.7466,
    0.779,
    0.0447,
    0.2251,
    0.4882,
    0.7324,
    0.6123,
    0.9468,
    0.6805,
    0.9847,
    0.4038,
    0.7205,
    0.9449,
    0.0633,
    0.3357,
    0.8777,
    0.4952,
    0.1338,
    0.4806,
    0.6498,
    0.5656,
    0.2144,
    0.6723,
    0.3989,
    0.4267,
    0.7148,
    0.5809,
    0.1709,
    0.9494,
    0.0781,
    0.2658,
    0.0196,
    0.0756,
    0.3482,
    0.6065,
    0.766,
    0.8056,
    0.9128,
    0.5112,
    0.2979,
    0.5493,
    0.6236,
    0.913,
    0.506,
    0.7498,
    0.8029,
    0.3118,
    0.7541,
    0.3497,
    0.8195,
    0.8978,
    0.054,
    0.7743,
    0.6126,
    0.5403,
    0.5782,
    0.8487,
    0.2047,
    0.3683,
    0.3831,
    0.2454,
    0.3749,
    0.7303,
    0.3562,
    0.7334,
    0.3846,
    0.2355,
    0.4011,
    0.9755,
    0.3176,
    0.3425,
    0.1628,
    0.0067,
    0.6434,
    0.4804,
    0.0804,
    0.0078,
    0.5169,
    0.6812,
    0.4645,
    0.3814,
    0.2753,
    0.0002,
    0.5017,
    0.9996,
    0.1215,
    0.9034,
    0.187,
    0.1834,
    0.3894,
    0.0413,
    0.2607,
    0.2052,
    0.3161,
    0.021,
    0.0104,
    0.5874,
    0.8722,
    0.5375,
    0.1457,
    0.6563,
    0.2126,
    0.7669,
    0.7747,
    0.3989,
    0.3794,
    0.1376,
    0.8064,
    0.4283,
    0.8415,
    0.4422,
    0.0116,
    0.5666,
    0.7943,
    0.1911,
    0.711,
    0.3695,
    0.301,
    0.014,
    0.3644,
    0.196,
    0.5316,
    0.1493,
    0.1352,
    0.7969,
    0.2548,
    0.6952,
    0.4192,
    0.6053,
    0.137,
    0.4442,
    0.952,
    0.4859,
    0.4175,
    0.1577,
    0.2729,
    0.7511,
    0.1793,
    0.86,
    0.6339,
    0.9007,
    0.4934,
    0.201,
    0.7118,
    0.9702,
    0.8652,
    0.9911,
    0.9516,
    0.8242,
    0.9981,
    0.1164,
    0.3317,
    0.5963,
    0.0006,
    0.0757,
    0.8871,
    0.4503,
    0.621,
    0.5684,
    0.2479,
    0.6901,
    0.6984,
    0.6059,
    0.9527,
    0.9055,
    0.7858,
    0.7209,
    0.7014,
    0.0498,
    0.3714,
    0.9599,
    0.6758,
    0.4839,
    0.8575,
    0.6289,
    0.4931,
    0.4224,
    0.6558,
    0.0197,
    0.727,
    0.4549,
    0.7432,
    0.948,
    0.4712,
    0.1522,
    0.7588,
    0.1476,
    0.5986,
    0.5479,
    0.4035,
    0.2348,
    0.5438,
    0.24,
    0.7374,
    0.8205,
    0.7098,
    0.9901,
    0.2639,
    0.1524,
    0.9988,
    0.8065,
    0.7574,
    0.3595,
    0.7927,
    0.6502,
    0.1244,
    0.6876,
    0.3846,
    0.7051,
    0.8722,
    0.4233,
    0.6358,
    0.2293,
    0.5869,
    0.3978,
    0.362,
    0.9765,
    0.1804,
    0.5054,
    0.518,
    0.5753,
    0.1767,
    0.7448,
    0.9699,
    0.4152,
    0.5922,
    0.2104,
    0.7585,
    0.7333,
    0.7877,
    0.9091,
    0.9016,
    0.564,
    0.5173,
    0.5652,
    0.4053,
    0.3458,
    0.8414,
    0.8003,
    0.8208,
    0.4659,
    0.9929,
    0.202,
    0.2417,
    0.4372,
    0.9466,
    0.1455,
    0.3177,
    0.1991,
    0.4453,
    0.0806,
    0.5344,
    0.8686,
    0.1195,
    0.904,
    0.6747,
    0.5151,
    0.0126,
    0.8149,
    0.726,
    0.0179,
    0.0907,
    0.4693,
    0.6306,
    0.818,
    0.2263,
    0.3511,
    0.8976,
    0.3555,
    0.8587,
    0.1121,
    0.1636,
    0.7183,
    0.929,
    0.5986,
    0.4519,
    0.4569,
    0.2934,
    0.6226,
    0.0315,
    0.2301,
    0.2877,
    0.4212,
    0.6153,
    0.1175,
    0.6229,
    0.1448,
    0.4357,
    0.6744,
    0.5992,
    0.9673,
    0.236,
    0.6963,
    0.5232,
    0.6934,
    0.8912,
    0.366,
    0.0676,
    0.3398,
    0.8136,
    0.828,
    0.5798,
    0.4104,
    0.2884,
    0.7999,
    0.0571,
    0.7285,
    0.6548,
    0.3414,
    0.6671,
    0.3735,
    0.871,
    0.2595,
    0.354,
    0.5399,
    0.6547,
    0.6972,
    0.197,
    0.0588,
    0.631,
    0.1769,
    0.7409,
    0.2916,
    0.3391,
    0.681,
    0.4479,
    0.5367,
    0.3296,
    0.229,
    0.2276,
    0.3038,
    0.1515,
    0.9045,
    0.847,
    0.0591,
    0.9458,
    0.8946,
    0.5545,
    0.9887,
    0.9066,
    0.8839,
    0.6097,
    0.9142,
    0.747,
    0.9223,
    0.2432,
    0.4736,
    0.3464,
    0.7363,
    0.9456,
    0.9416,
    0.3785,
    0.3857,
    0.5767,
    0.8266,
    0.9209,
    0.0052,
    0.0535,
    0.5046,
    0.0376,
    0.9024,
    0.0352,
    0.7838,
    0.7304,
    0.8118,
    0.2156,
    0.817,
    0.236,
    0.9279,
    0.341,
    0.8607,
    0.418,
    0.7649,
    0.4953,
    0.551,
    0.444,
    0.9546,
    0.0992,
    0.0049,
    0.8746,
    0.5942,
    0.2079,
    0.6077,
    0.6483,
    0.8137,
    0.6036,
    0.0528,
    0.5494,
    0.6609,
    0.0845,
    0.6646,
    0.5466,
    0.077,
    0.1112,
    0.1711,
    0.2873,
    0.1413,
    0.0688,
    0.1168,
    0.424,
    0.9009,
    0.4669,
    0.9976,
    0.7218,
    0.8919,
    0.1972,
    0.0619,
    0.582,
    0.8564,
    0.9327,
    0.2575,
    0.6871,
    0.3445,
    0.7281,
    0.5554,
    0.2082,
    0.7076,
    0.9938,
    0.6594,
    0.4794,
    0.6039,
    0.6486,
    0.1726,
    0.3477,
    0.7208,
    0.1008,
    0.9814,
    0.8208,
    0.3397,
    0.764,
    0.1,
    0.2393,
    0.0051,
    0.9983,
    0.0856,
    0.6445,
    0.231,
    0.2384,
    0.6421,
    0.9393,
    0.9166,
    0.83,
    0.2625,
    0.3435,
    0.3926,
    0.5763,
    0.4105,
    0.7588,
    0.7758,
    0.7434,
    0.576,
    0.895,
    0.2319,
    0.6097,
    0.6268,
    0.7752,
    0.3305,
    0.9761,
    0.3346,
    0.3407,
    0.6427,
    0.5717,
    0.3168,
    0.1748,
    0.1135,
    0.1194,
    0.3143,
    0.1284,
    0.6201,
    0.4195,
    0.4733,
    0.0685,
    0.5699,
    0.014,
    0.2664,
    0.5655,
    0.0054,
    0.2863,
    0.7514,
    0.5942,
    0.9683,
    0.9272,
    0.9745,
    0.1588,
    0.8662,
    0.0266,
    0.205,
    0.9751,
    0.9901,
    0.9718,
    0.0298,
    0.8991,
    0.1628,
    0.0882,
    0.0413,
    0.4956,
    0.3483,
    0.1658,
    0.7537,
    0.9017,
    0.0295,
    0.0051,
    0.9998,
    0.8563,
    0.7968,
    0.8915,
    0.5082,
    0.7596,
    0.266,
    0.2535,
    0.8152,
    0.1917,
    0.5871,
    0.7393,
    0.2864,
    0.7009,
    0.9918,
    0.7667,
    0.9107,
    0.3904,
    0.8527,
    0.1547,
    0.1403,
    0.6942,
    0.7053,
    0.8655,
    0.3394,
    0.943,
    0.9744,
    0.6959,
    0.8185,
    0.3763,
    0.3584,
    0.7368,
    0.0793,
    0.8921,
    0.5293,
    0.6979,
    0.851,
    0.842,
    0.8239,
    0.1549,
    0.1789,
    0.4221,
    0.668,
    0.9199,
    0.8799,
    0.7552,
    0.49,
    0.8218,
    0.0395,
    0.5913,
    0.2076,
    0.4617,
    0.8614,
    0.4656,
    0.4426,
    0.4684,
    0.2708,
    0.9041,
    0.4271,
    0.8016,
    0.4581,
    0.243,
    0.5017,
    0.9011,
    0.2101,
    0.5099,
    0.9846,
    0.6736,
    0.7035,
    0.7442,
    0.8552,
    0.3503,
    0.1797,
    0.9184,
    0.777,
    0.9151,
    0.7136,
    0.0892,
    0.0373,
    0.9605,
    0.5322,
    0.9793,
    0.5268,
    0.9851,
    0.6522,
    0.5493,
    0.3838,
    0.8716,
    0.3188,
    0.1236,
    0.2826,
    0.9643,
    0.1926,
    0.081,
    0.5952,
    0.7667,
    0.9742,
    0.3453,
    0.6568,
    0.0199,
    0.9742,
    0.5404,
    0.2276,
    0.2279,
    0.8834,
    0.2745,
    0.6487,
    0.8579,
    0.7291,
    0.4051,
    0.0586,
    0.3145,
    0.9811,
    0.9576,
    0.484,
    0.3174,
    0.4118,
    0.3371,
    0.2384,
    0.1303,
    0.5526,
    0.833,
    0.9204,
    0.4326,
    0.6851,
    0.3317,
    0.6264,
    0.9908,
    0.3712,
    0.5767,
    0.1898,
    0.518,
    0.7388,
    0.7249,
    0.7557,
    0.7607,
    0.5557,
    0.0855,
    0.4242,
    0.9973,
    0.3674,
    0.8864,
    0.3946,
    0.4391,
    0.6871,
    0.5211,
    0.0184,
    0.2295,
    0.4845,
    0.6183,
    0.066,
    0.0104,
    0.3693,
    0.1454,
    0.6182,
    0.0593,
    0.0091,
    0.4811,
    0.0405,
    0.981,
    0.5323,
    0.9996,
    0.4531,
    0.2312,
    0.5675,
    0.6084,
    0.2082,
    0.1183,
    0.9924,
    0.4739,
    0.1572,
    0.3062,
    0.6768,
    0.5966,
    0.482,
    0.7741,
    0.4873,
    0.9166,
    0.6578,
    0.9083,
    0.9042,
    0.4728,
    0.3796,
    0.119,
    0.1604,
    0.2805,
    0.6217,
    0.696,
    0.1107,
    0.3783,
    0.0921,
    0.2087,
    0.927,
    0.3933,
    0.6561,
    0.326,
    0.1032,
    0.3384,
    0.4872,
    0.0759,
    0.633,
    0.9087,
    0.1107,
    0.5923,
    0.6191,
    0.1903,
    0.2843,
    0.2779,
    0.7128,
    0.6985,
    0.3316,
    0.1527,
    0.7712,
    0.8264,
    0.2572,
    0.2761,
    0.652,
    0.0342,
    0.7442,
    0.9087,
    0.1043,
    0.2939,
    0.3074,
    0.6166,
    0.4514,
    0.9109,
    0.0874,
    0.1283,
    0.8023,
    0.345,
    0.7668,
    0.8817,
    0.0142,
    0.6708,
    0.0609,
    0.0724,
    0.5614,
    0.8014,
    0.6463,
    0.2008,
    0.5225,
    0.4141,
    0.5553,
    0.6509,
    0.0482,
    0.8334,
    0.9242,
    0.0791,
    0.4451,
    0.5596,
    0.8931,
    0.2865,
    0.8525,
    0.3236,
    0.9915,
    0.1226,
    0.6698,
    0.5011,
    0.4972,
    0.9952,
    0.9259,
    0.5184,
    0.1664,
    0.7049,
    0.4078,
    0.3951,
    0.8654,
    0.1153,
    0.3303,
    0.8116,
    0.6914,
    0.1452,
    0.6166,
    0.3601,
    0.8373,
    0.766,
    0.7941,
    0.258,
    0.9062,
    0.5529,
    0.7656,
    0.3281,
    0.3661,
    0.8629,
    0.5446,
    0.7404,
    0.1491,
    0.1604,
    0.091,
    0.5565,
    0.5574,
    0.0471,
    0.545,
    0.8108,
    0.8968,
    0.8887,
    0.8855,
    0.1825,
    0.2715,
    0.348,
    0.6909,
    0.2488,
    0.1801,
    0.1806,
    0.0026,
    0.1515,
    0.61,
    0.0311,
    0.7143,
    0.9518,
    0.8147,
    0.6427,
    0.7389,
    0.1814,
    0.9977,
    0.1014,
    0.4083,
    0.9109,
    0.2024,
    0.5075,
    0.4035,
    0.2518,
    0.0559,
    0.3062,
    0.9134,
    0.234,
    0.777,
    0.7805,
    0.5924,
    0.3615,
    0.7644,
    0.6889,
    0.32,
    0.348,
    0.1771,
    0.2944,
    0.3731,
    0.9901,
    0.9368,
    0.7133,
    0.1823,
    0.5462,
    0.3024,
    0.0959,
    0.2312,
    0.9278,
    0.1549,
    0.2491,
    0.1014,
    0.7892,
    0.5465,
    0.6345,
    0.0488,
    0.778,
    0.6533,
    0.7788,
    0.6289,
    0.078,
    0.8535,
    0.8734,
    0.0655,
    0.3476,
    0.0498,
    0.9147,
    0.4513,
    0.2713,
    0.3653,
    0.6253,
    0.0335,
    0.1935,
    0.9348,
    0.3677,
    0.1082,
    0.8681,
    0.3923,
    0.713,
    0.0589,
    0.1072,
    0.5393,
    0.0197,
    0.2804,
    0.2891,
    0.3198,
    0.7029,
    0.8145,
    0.0092,
    0.0713,
    0.9086,
    0.1968,
    0.2609,
    0.6569,
    0.6274,
    0.3334,
    0.1083,
    0.4853,
    0.5619,
    0.2654,
    0.7686,
    0.5781,
    0.8739,
    0.2527,
    0.499,
    0.8342,
    0.5891,
    0.4907,
    0.2749,
    0.1429,
    0.2483,
    0.5447,
    0.2371,
    0.2947,
    0.684,
    0.9988,
    0.5402,
    0.591,
    0.9428,
    0.6758,
    0.7526,
    0.6149,
    0.7223,
    0.7017,
    0.4007,
    0.4452,
    0.2017,
    0.9398,
    0.3726,
    0.7668,
    0.4697,
    0.294,
    0.8861,
    0.4367,
    0.8179,
    0.1924,
    0.2528,
    0.6354,
    0.8144,
    0.2436,
    0.3517,
    0.294,
    0.386,
    0.4258,
    0.7903,
    0.5166,
    0.3156,
    0.7203,
    0.9445,
    0.334,
    0.0536,
    0.6567,
    0.8203,
    0.7938,
    0.0097,
    0.3045,
    0.2894,
    0.0234,
    0.7521,
    0.5229,
    0.5881,
    0.0648,
    0.0681,
    0.6239,
    0.0175,
    0.525,
    0.4626,
    0.1189,
    0.5188,
    0.6464,
    0.3107,
    0.1204,
    0.7525,
    0.4115,
    0.4214,
    0.1678,
    0.4779,
    0.7352,
    0.9557,
    0.6254,
    0.293,
    0.9394,
    0.0482,
    0.5687,
    0.5392,
    0.1767,
    0.0748,
    0.3466,
    0.9838,
    0.9575,
    0.9723,
    0.1975,
    0.2588,
    0.7706,
    0.4409,
    0.6503,
    0.208,
    0.0438,
    0.1296,
    0.1549,
    0.8445,
    0.5659,
    0.1744,
    0.9172,
    0.6611,
    0.2298,
    0.9065,
    0.9184,
    0.1809,
    0.14,
    0.1138,
    0.3656,
    0.6993,
    0.4003,
    0.3192,
    0.6609,
    0.4145,
    0.5456,
    0.7111,
    0.679,
    0.4315,
    0.6804,
    0.4869,
    0.2406,
    0.2267,
    0.7823,
    0.6072,
    0.4387,
    0.3371,
    0.9652,
    0.3832,
    0.0968,
    0.8159,
    0.6273,
    0.6519,
    0.441,
    0.3223,
    0.9159,
    0.318,
    0.2064,
    0.9451,
    0.739,
    0.86,
    0.0245,
    0.162,
    0.4065,
    0.1933,
    0.4645,
    0.6394,
    0.0517,
    0.2885,
    0.7112,
    0.2783,
    0.5031,
    0.9156,
    0.7429,
    0.2442,
    0.2308,
    0.3476,
    0.6684,
    0.3636,
    0.9207,
    0.6982,
    0.8189,
    0.329,
    0.9704,
    0.9734,
    0.2094,
    0.6914,
    0.5149,
    0.7173,
    0.3876,
    0.6881,
    0.3275,
    0.4816,
    0.9547,
    0.6331,
    0.1055,
    0.2311,
    0.9159,
    0.1798,
    0.9337,
    0.285,
    0.8229,
    0.3645,
    0.5006,
    0.3554,
    0.7217,
    0.7953,
    0.3257,
    0.9352,
    0.05,
    0.1502,
    0.4646,
    0.4804,
    0.2376,
    0.9171,
    0.5284,
    0.7412,
    0.5817,
    0.8968,
    0.2561,
    0.7675,
    0.7059,
    0.9507,
    0.7238,
    0.3098,
    0.7876,
    0.2127,
    0.6338,
    0.654,
    0.8787,
    0.348,
    0.3212,
    0.2639,
    0.9162,
    0.2578,
    0.5739,
    0.181,
    0.6939,
    0.8284,
    0.6158,
    0.4749,
    0.3931,
    0.057,
    0.1274,
    0.8177,
    0.3837,
    0.8398,
    0.8002,
    0.3407,
    0.0356,
    0.7027,
    0.8125,
    0.6869,
    0.5699,
    0.6648,
    0.4158,
    0.0715,
    0.7655,
    0.1483,
    0.6597,
    0.9341,
    0.7789,
    0.8492,
    0.3194,
    0.258,
    0.9494,
    0.2525,
    0.2771,
    0.5029,
    0.715,
    0.6263,
    0.3138,
    0.3212,
    0.7473,
    0.7404,
    0.9646,
    0.9899,
    0.8297,
    0.9327,
    0.0788,
    0.0711,
    0.4159,
    0.6872,
    0.3503,
    0.3724,
    0.4061,
    0.7363,
    0.6088,
    0.4403,
    0.4833,
    0.7777,
    0.9943,
    0.1801,
    0.5066,
    0.5449,
    0.6418,
    0.7932,
    0.7073,
    0.7102,
    0.4543,
    0.4936,
    0.0876,
    0.8563,
    0.9018,
    0.1289,
    0.8337,
    0.5527,
    0.0177,
    0.6492,
    0.4373,
    0.2336,
    0.5462,
    0.8507,
    0.4444,
    0.0185,
    0.7309,
    0.2069,
    0.7435,
    0.7111,
    0.2252,
    0.5632,
    0.7669,
    0.4306,
    0.5366,
    0.8033,
    0.6878,
    0.0459,
    0.1375,
    0.7229,
    0.9352,
    0.0925,
    0.5695,
    0.767,
    0.8459,
    0.3509,
    0.7143,
    0.6839,
    0.7719,
    0.7448,
    0.8785,
    0.3143,
    0.6728,
    0.8421,
    0.4531,
    0.6366,
    0.4605,
    0.2481,
    0.2998,
    0.9007,
    0.1781,
    0.0518,
    0.1478,
    0.1027,
    0.5747,
    0.9021,
    0.0635,
    0.1132,
    0.1064,
    0.4547,
    0.4209,
    0.3066,
    0.0972,
    0.8841,
    0.11,
    0.7347,
    0.1006,
    0.3734,
    0.4748,
    0.7725,
    0.4939,
    0.9844,
    0.5313,
    0.19,
    0.5957,
    0.1775,
    0.9523,
    0.8619,
    0.5725,
    0.6217,
    0.4703,
    0.6518,
    0.8119,
    0.0899,
    0.3659,
    0.4746,
    0.3598,
    0.3294,
    0.956,
    0.7405,
    0.1725,
    0.0706,
    0.4454,
    0.4656,
    0.8032,
    0.232,
    0.4305,
    0.2805,
    0.5746,
    0.0337,
    0.0521,
    0.9182,
    0.4233,
    0.5787,
    0.7996,
    0.1273,
    0.5149,
    0.6926,
    0.704,
    0.3872,
    0.9348,
    0.565,
    0.1392,
    0.5202,
    0.4687,
    0.5261,
    0.3418,
    0.2845,
    0.0759,
    0.6909,
    0.0668,
    0.7506,
    0.4277,
    0.2228,
    0.876,
    0.8987,
    0.9381,
    0.1606,
    0.5061,
    0.7113,
    0.3101,
    0.9709,
    0.451,
    0.3955,
    0.798,
    0.8486,
    0.8488,
    0.2726,
    0.1601,
    0.879,
    0.2359,
    0.5475,
    0.8751,
    0.2903,
    0.9581,
    0.6063,
    0.0023,
    0.1766,
    0.9109,
    0.7763,
    0.5799,
    0.8787,
    0.0681,
    0.1003,
    0.9464,
    0.9675,
    0.0321,
    0.4975,
    0.0991,
    0.9199,
    0.0937,
    0.5157,
    0.2456,
    0.2925,
    0.6877,
    0.4275,
    0.3948,
    0.0789,
    0.623,
    0.1279,
    0.2441,
    0.787,
    0.8257,
    0.0103,
    0.6336,
    0.4254,
    0.9018,
    0.8403,
    0.0721,
    0.9332,
    0.8908,
    0.5752,
    0.428,
    0.8249,
    0.6931,
    0.2469,
    0.6484,
    0.1724,
    0.8096,
    0.7801,
    0.6663,
    0.1822,
    0.4143,
    0.0952,
    0.2902,
    0.2855,
    0.8027,
    0.2403,
    0.422,
    0.4275,
    0.2382,
    0.773,
    0.446,
    0.8535,
    0.555,
    0.4875,
    0.4106,
    0.9699,
    0.915,
    0.5035,
    0.5805,
    0.336,
    0.1952,
    0.4227,
    0.2017,
    0.0771,
    0.5434,
    0.6174,
    0.4134,
    0.6757,
    0.6798,
    0.7197,
    0.9271,
    0.9965,
    0.3595,
    0.4412,
    0.5402,
    0.0096,
    0.2924,
    0.1394,
    0.7669,
    0.393,
    0.3716,
    0.5246,
    0.777,
    0.1766,
    0.1019,
    0.9725,
    0.23,
    0.0486,
    0.8836,
    0.4394,
    0.6729,
    0.1835,
    0.8035,
    0.2088,
    0.7626,
    0.5703,
    0.6947,
    0.7242,
    0.3365,
    0.4105,
    0.4948,
    0.0101,
    0.1832,
    0.5626,
    0.5482,
    0.1428,
    0.5486,
    0.7862,
    0.1487,
    0.9593,
    0.0479,
    0.2497,
    0.0064,
    0.9238,
    0.6145,
    0.1964,
    0.7552,
    0.206,
    0.1115,
    0.5931,
    0.5802,
    0.2367,
    0.3765,
    0.349,
    0.237,
    0.7247,
    0.9777,
    0.5915,
    0.0422,
    0.9774,
    0.9143,
    0.8211,
    0.3661,
    0.1812,
    0.2768,
    0.1156,
    0.4741,
    0.3413,
    0.6959,
    0.2339,
    0.5439,
    0.5325,
    0.0441,
    0.412,
    0.2387,
    0.8866,
    0.6458,
    0.7183,
    0.0368,
    0.5266,
    0.2014,
    0.1707,
    0.8452,
    0.3229,
    0.3351,
    0.9682,
    0.5041,
    0.5372,
    0.7664,
    0.7599,
    0.7831,
    0.6702,
    0.7548,
    0.2266,
    0.183,
    0.592,
    0.1304,
    0.9612,
    0.6427,
    0.3753,
    0.6676,
    0.4495,
    0.5566,
    0.3886,
    0.7929,
    0.0591,
    0.6232,
    0.3301,
    0.4751,
    0.7597,
    0.7234,
    0.5068,
    0.6861,
    0.6549,
    0.6202,
    0.8953,
    0.753,
    0.9711,
    0.8306,
    0.2354,
    0.394,
    0.5307,
    0.196,
    0.1029,
    0.886,
    0.4279,
    0.028,
    0.0259,
    0.2026,
    0.1449,
    0.8348,
    0.3328,
    0.4636,
    0.1182,
    0.8543,
    0.7536,
    0.3611,
    0.2359,
    0.7702,
    0.7888,
    0.2864,
    0.785,
    0.2531,
    0.8457,
    0.3063,
    0.136,
    0.7312,
    0.0585,
    0.7578,
    0.9386,
    0.7527,
    0.9411,
    0.7131,
    0.7338,
    0.2768,
    0.9511,
    0.8167,
    0.7083,
    0.6634,
    0.1615,
    0.9776,
    0.9605,
    0.7819,
    0.9474,
    0.9682,
    0.7348,
    0.1231,
    0.3302,
    0.1365,
    0.9909,
    0.4039,
    0.4183,
    0.8289,
    0.2237,
    0.1648,
    0.1051,
    0.5306,
    0.6866,
    0.219,
    0.0217,
    0.1884,
    0.9918,
    0.5351,
    0.7249,
    0.1299,
    0.2815,
    0.68,
    0.8182,
    0.3389,
    0.3392,
    0.7114,
    0.3897,
    0.1917,
    0.758,
    0.8942,
    0.7503,
    0.2145,
    0.2498,
    0.6734,
    0.7161,
    0.929,
    0.3057,
    0.1962,
    0.2481,
    0.031,
    0.5187,
    0.2185,
    0.3013,
    0.4588,
    0.8365,
    0.6227,
    0.0674,
    0.8225,
    0.6652,
    0.0728,
    0.9688,
    0.3846,
    0.2172,
    0.0171,
    0.5365,
    0.0006,
    0.2121,
    0.1844,
    0.0809,
    0.122,
    0.9829,
    0.8572,
    0.5792,
    0.2017,
    0.191,
    0.9732,
    0.9525,
    0.6095,
    0.8251,
    0.972,
    0.3568,
    0.9395,
    0.6736,
    0.4417,
    0.9382,
    0.6969,
    0.3845,
    0.9799,
    0.5005,
    0.2292,
    0.3569,
    0.2996,
    0.905,
    0.6272,
    0.9214,
    0.9317,
    0.9557,
    0.632,
    0.6766,
    0.435,
    0.8218,
    0.7605,
    0.7556,
    0.8267,
    0.9911,
    0.9184,
    0.8234,
    0.4043,
    0.672,
    0.8639,
    0.922,
    0.7272,
    0.7641,
    0.6876,
    0.9472,
    0.3188,
    0.3203,
    0.4882,
    0.9664,
    0.2233,
    0.2985,
    0.124,
    0.0621,
    0.8429,
    0.4231,
    0.5779,
    0.8213,
    0.5792,
    0.0048,
    0.9778,
    0.6678,
    0.2345,
    0.6236,
    0.639,
    0.5074,
    0.0634,
    0.6009,
    0.699,
    0.3948,
    0.0751,
    0.4521,
    0.9436,
    0.7143,
    0.0236,
    0.0031,
    0.1474,
    0.7053,
    0.151,
    0.9593,
    0.1628,
    0.2716,
    0.7711,
    0.5135,
    0.5418,
    0.1028,
    0.3487,
    0.8712,
    0.0728,
    0.2914,
    0.3138,
    0.772,
    0.419,
    0.0483,
    0.2289,
    0.2789,
    0.0923,
    0.4554,
    0.5754,
    0.5988,
    0.3142,
    0.1362,
    0.5301,
    0.9716,
    0.9661,
    0.1859,
    0.191,
    0.7457,
    0.1212,
    0.2978,
    0.0668,
    0.887,
    0.8867,
    0.2966,
    0.1276,
    0.5528,
    0.0969,
    0.9829,
    0.3202,
    0.0862,
    0.433,
    0.8779,
    0.0367,
    0.8861,
    0.4165,
    0.1932,
    0.4967,
    0.7861,
    0.9549,
    0.1447,
    0.0598,
    0.7434,
    0.3255,
    0.562,
    0.8512,
    0.6795,
    0.1046,
    0.713,
    0.8342,
    0.312,
    0.6416,
    0.058,
    0.1122,
    0.0436,
    0.9242,
    0.8811,
    0.0126,
    0.4216,
    0.4121,
    0.4876,
    0.04,
    0.1265,
    0.571,
    0.7085,
    0.7028,
    0.7185,
    0.119,
    0.4506,
    0.5745,
    0.6637,
    0.6302,
    0.4603,
    0.5988,
    0.5497,
    0.2979,
    0.3399,
    0.0707,
    0.6273,
    0.5818,
    0.466,
    0.065,
    0.7653,
    0.3643,
    0.6931,
    0.9756,
    0.8565,
    0.4836,
    0.2857,
    0.5728,
    0.4039,
    0.4588,
    0.6529,
    0.4803,
    0.2722,
    0.4934,
    0.215,
    0.2307,
    0.3263,
    0.9243,
    0.5659,
    0.0886,
    0.847,
    0.1207,
    0.435,
    0.1599,
    0.4985,
    0.1136,
    0.1311,
    0.5078,
    0.51,
    0.3012,
    0.2096,
    0.1886,
    0.0387,
    0.1766,
    0.3393,
    0.1266,
    0.4628,
    0.6225,
    0.1996,
    0.1835,
    0.8616,
    0.6611,
    0.3365,
    0.7465,
    0.8024,
    0.0526,
    0.4223,
    0.5569,
    0.6062,
    0.5651,
    0.6589,
    0.8565,
    0.4201,
    0.2295,
    0.913,
    0.9715,
    0.5727,
    0.4243,
    0.9876,
    0.2872,
    0.6709,
    0.7592,
    0.7142,
    0.6929,
    0.7927,
    0.2153,
    0.7751,
    0.7611,
    0.2093,
    0.3322,
    0.7779,
    0.1602,
    0.8889,
    0.8226,
    0.2761,
    0.1125,
    0.6796,
    0.5126,
    0.1132,
    0.352,
    0.6227,
    0.3152,
    0.2002,
    0.9323,
    0.864,
    0.6022,
    0.7251,
    0.9869,
    0.8441,
    0.3961,
    0.1413,
    0.631,
    0.9624,
    0.6185,
    0.4348,
    0.7401,
    0.9751,
    0.7273,
    0.4891,
    0.9577,
    0.0904,
    0.2514,
    0.6815,
    0.8942,
    0.8821,
    0.7297,
    0.5586,
    0.3253,
    0.4753,
    0.4151,
    0.974,
    0.3837,
    0.5585,
    0.881,
    0.6091,
    0.7829,
    0.0634,
    0.1457,
    0.4594,
    0.2499,
    0.708,
    0.7946,
    0.4488,
    0.1621,
    0.9332,
    0.6606,
    0.7586,
    0.7287,
    0.0452,
    0.7262,
    0.9165,
    0.111,
    0.045,
    0.3545,
    0.2736,
    0.7819,
    0.7915,
    0.8061,
    0.5526,
    0.2704,
    0.4092,
    0.0845,
    0.8358,
    0.5053,
    0.3671,
    0.154,
    0.3125,
    0.3013,
    0.7581,
    0.4879,
    0.6225,
    0.1544,
    0.6424,
    0.0795,
    0.3009,
    0.0799,
    0.2074,
    0.6258,
    0.2218,
    0.1212,
    0.282,
    0.8492,
    0.5887,
    0.1172,
    0.0204,
    0.0067,
    0.8055,
    0.072,
    0.5191,
    0.8673,
    0.8795,
    0.7574,
    0.6897,
    0.2848,
    0.046,
    0.7525,
    0.9137,
    0.5336,
    0.3707,
    0.3817,
    0.6839,
    0.7266,
    0.3391,
    0.0849,
    0.123,
    0.3149,
    0.2367,
    0.4805,
    0.8329,
    0.5,
    0.3377,
    0.1857,
    0.0333,
    0.5589,
    0.8147,
    0.8956,
    0.3571,
    0.8038,
    0.8427,
    0.7951,
    0.5121,
    0.0601,
    0.8972,
    0.1728,
    0.8542,
    0.9178,
    0.0677,
    0.4107,
    0.7685,
    0.9934,
    0.1313,
    0.7346,
];

const setSeed = (n) => {
    n = Math.abs(n);
    n %= fauxArray.length;
    seed = n;
};

export function FauxRandom(n) {
    n ? setSeed(n) : setSeed(seed + 1);
    return fauxArray[seed];
    // return Math.random();
}

// function returns a cos wave distribution between -1 and 1.
export function CosRandom() {
    return Math.cos(FauxRandom() * Math.PI * 2);
}
