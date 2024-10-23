Search.setIndex({"docnames": ["intro", "notebooks/Accuracy_Muscle_Length_Reconstruction", "notebooks/Accuracy_Muscle_Volume_Reconstruction", "notebooks/Correlation_Analysis_SIS", "notebooks/Correlation_Analysis_TT"], "filenames": ["intro.md", "notebooks\\Accuracy_Muscle_Length_Reconstruction.ipynb", "notebooks\\Accuracy_Muscle_Volume_Reconstruction.ipynb", "notebooks\\Correlation_Analysis_SIS.ipynb", "notebooks\\Correlation_Analysis_TT.ipynb"], "titles": ["Introduction", "<span class=\"section-number\">4. </span>SIS 3 Paired T-Test and Regression Analysis for Muscle Lengths", "<span class=\"section-number\">1. </span>Results 3.2 Paired T-Test and Regression Analysis for Muscle Volumes", "<span class=\"section-number\">2. </span>Results 3.3 Correlation Analysis of Supraspinatus, Infraspinatus and Subscapularis", "<span class=\"section-number\">3. </span>SIS 1 Correlation Analysis of Teres Major and Minor"], "terms": {"3d": [0, 1, 2, 3, 4], "reconstruct": [0, 1, 2, 3, 4], "shoulder": [0, 3, 4], "muscl": [0, 3, 4], "hominoid": 0, "primat": 0, "correl": 0, "scapular": 0, "attach": 0, "area": [0, 1, 2, 3, 4], "volum": [0, 3, 4], "supplementari": [0, 1], "inform": [0, 1], "code": [0, 1, 2, 3, 4], "author": 0, "van": 0, "beesel": 0, "julia": 0, "melillo": 0, "stephani": 0, "vereeck": 0, "evi": 0, "thi": [0, 1, 2, 3, 4], "materi": 0, "detail": 0, "us": [0, 1, 2, 3, 4], "analyz": [0, 3], "data": [0, 1, 2], "produc": 0, "manuscript": [0, 2, 3], "The": [0, 1, 2, 3, 4], "raw": 0, "obj": 0, "file": [0, 1, 2, 3, 4], "can": [0, 1, 2, 3, 4], "found": [0, 1, 2, 3, 4], "zenodo": 0, "repositori": 0, "http": 0, "doi": 0, "org": 0, "10": [0, 1, 2, 3, 4], "5281": 0, "13381978": 0, "jupyt": 0, "notebook": 0, "creat": [0, 1, 2, 3, 4], "page": 0, "upcom": 0, "github": 0, "link": 0, "provid": [0, 1, 2], "cite": 0, "pleas": 0, "onc": 0, "publish": 0, "when": 0, "refer": 0, "here": [0, 1, 2, 3, 4], "result": [0, 1, 4], "3": [0, 4], "2": [0, 1, 3, 4], "pair": 0, "t": [0, 3, 4], "test": 0, "regress": [0, 3, 4], "analysi": 0, "supraspinatu": [0, 1, 2, 4], "infraspinatu": [0, 1, 2, 4], "subscapulari": [0, 1, 2, 4], "si": 0, "1": [0, 1, 2, 3], "tere": [0, 1, 2, 3], "major": [0, 1, 2, 3], "minor": [0, 1, 2, 3], "length": [0, 2], "accuraci": [0, 1, 2, 3, 4], "4": [0, 1, 2, 3, 4], "between": [0, 1, 2, 3, 4], "origin": [0, 1, 2, 3, 4], "pearson": 0, "In": [1, 2], "chapter": [1, 2], "perform": [1, 2, 3, 4], "compar": [1, 2], "experiment": [1, 2], "measur": [1, 2], "figur": [1, 2, 3, 4], "ar": [1, 2, 3, 4], "section": [1, 2], "requir": [1, 2, 3, 4], "packag": [1, 2, 3, 4], "txt": [1, 2, 3, 4], "ensur": [1, 2, 3, 4], "all": [1, 2, 3, 4], "depend": [1, 2, 3, 4], "instal": [1, 2, 3, 4], "befor": [1, 2, 3, 4], "run": [1, 2, 3, 4], "script": [1, 2, 3, 4], "matplotlib": [1, 2, 3, 4], "pyplot": [1, 2, 3, 4], "plt": [1, 2, 3, 4], "numpi": [1, 2, 3, 4], "np": [1, 2, 3, 4], "panda": [1, 2, 3, 4], "pd": [1, 2, 3, 4], "scipi": [1, 2, 3, 4], "stat": [1, 2, 3, 4], "ttest_rel": [1, 2], "os": [1, 2, 3, 4], "sklearn": [1, 2], "mean_absolute_error": [1, 2], "mean_squared_error": [1, 2], "r2_score": [1, 2], "statsmodel": [1, 2, 3, 4], "api": [1, 2, 3, 4], "sm": [1, 2, 3, 4], "seaborn": [1, 2, 3, 4], "sn": [1, 2, 3, 4], "set": [1, 2, 3, 4], "global": [1, 2], "style": [1, 2], "plot": [1, 2, 3, 4], "white": [1, 2], "ansi": [1, 2, 3, 4], "escap": [1, 2, 3, 4], "bold": [1, 2, 3, 4], "text": [1, 2, 3, 4], "print": [1, 2, 3, 4], "bold_start": [1, 2, 3, 4], "033": [1, 2, 3, 4], "1m": [1, 2, 3, 4], "bold_end": [1, 2, 3, 4], "0m": [1, 2, 3, 4], "load": [1, 2, 3, 4], "muscle_data": [1, 2, 3, 4], "xlsx": [1, 2, 3, 4], "contain": [1, 2, 3, 4], "remov": [1, 2, 3, 4], "specimen": [1, 2, 3, 4], "where": [1, 2, 3, 4], "have": [1, 2, 3, 4], "been": [1, 2, 3, 4], "excel": [1, 2, 3, 4], "file_path": [1, 2, 3, 4], "path": [1, 2, 3, 4], "join": [1, 2, 3, 4], "read_excel": [1, 2, 3, 4], "filter": [1, 2], "out": [1, 2, 3], "miss": [1, 2, 4], "specimen_id": [1, 2], "isin": [1, 2, 3, 4], "129": [1, 2], "130": [1, 2], "131": [1, 2], "log": [1, 2, 3, 4], "transform": [1, 2, 3, 4], "exp_length": 1, "length_exp": 1, "cm": [1, 3, 4], "poly_length": 1, "length_rec": 1, "store": [1, 2, 3, 4], "name": [1, 2, 3, 4], "speci": [1, 2], "muscle_nam": [1, 2, 3, 4], "specimen_nam": [1, 2, 3, 4], "genu": [1, 2, 3, 4], "against": [1, 2], "statist": [1, 2, 3, 4], "p": [1, 2, 3, 4], "valu": [1, 2, 3, 4], "t_stat": [1, 2], "p_valu": [1, 2], "f": [1, 2, 3, 4], "2f": [1, 2, 3, 4], "12": [1, 2, 3], "1m0": [1, 2], "04": [1, 4], "x": [1, 2, 3, 4], "add_const": [1, 2, 3, 4], "model": [1, 2, 3, 4], "ol": [1, 2, 3, 4], "fit": [1, 2, 3, 4], "intercept": [1, 2, 3, 4], "slope": [1, 2, 3, 4], "param": [1, 2, 3, 4], "r_squar": [1, 2], "rsquar": [1, 2], "summari": [1, 2, 3, 4], "clear": [1, 2], "format": [1, 2, 3, 4], "defin": [1, 2, 3, 4], "desir": [1, 2], "order": [1, 2, 3, 4], "desired_order_muscl": [1, 2], "desired_order_specimen": [1, 2], "hylob": [1, 2, 3, 4], "symphalangu": [1, 2, 3, 4], "pongo": [1, 2, 3, 4], "gorilla": [1, 2, 3, 4], "pan": [1, 2, 3, 4], "homo": [1, 2, 3, 4], "custom": [1, 2, 3, 4], "color": [1, 2, 3, 4], "each": [1, 2, 3, 4], "custom_color": [1, 2, 3, 4], "0": [1, 2, 3, 4], "467": [1, 2, 3], "710": [1, 2, 3], "367": [1, 2, 3], "7": [1, 2, 3], "47": [1, 2, 3, 4], "82": [1, 2, 3], "45": [1, 2, 3], "56": [1, 2, 3], "87": [1, 2, 3], "741": [1, 2, 3, 4], "8": [1, 2, 3, 4], "384": [1, 2, 3, 4], "871": [1, 2, 3, 4], "435": [1, 2, 3, 4], "427": [1, 2, 3, 4], "uniqu": [1, 2, 3, 4], "marker": [1, 2, 3, 4], "custom_mark": [1, 2, 3, 4], "d": [1, 2, 3, 4], "v": [1, 2, 3, 4], "s": [1, 2, 3, 4], "map": [1, 2], "base": [1, 2], "muscle_to_color": [1, 2], "bland": [1, 2], "altman": [1, 2], "fig": [1, 2, 3, 4], "ax": [1, 2, 3, 4], "subplot": [1, 2, 3, 4], "figsiz": [1, 2, 3, 4], "left": [1, 2, 3, 4], "ax1": [1, 2, 3, 4], "scatter": [1, 2, 3, 4], "regplot": [1, 2, 3, 4], "y": [1, 2, 3, 4], "fals": [1, 2, 3, 4], "red": [1, 2, 3, 4], "label": [1, 2, 3, 4], "point": [1, 2, 3, 4], "mask": [1, 2, 3, 4], "linewidth": [1, 2], "01": [1, 2], "30": [1, 2], "grei": [1, 2, 3, 4], "set_titl": [1, 2, 3, 4], "vs": [1, 2], "fontsiz": [1, 2, 3, 4], "set_xlabel": [1, 2, 3, 4], "exp": [1, 2], "9": [1, 2, 3, 4], "set_ylabel": [1, 2, 3, 4], "rec": [1, 2], "equation_text": [1, 2], "n": [1, 2, 3, 4], "r": [1, 2, 3, 4], "npair": [1, 2], "annot": [1, 2, 3, 4], "xy": [1, 2, 3, 4], "05": [1, 2, 3, 4], "95": [1, 2, 3, 4], "xycoord": [1, 2, 3, 4], "fraction": [1, 2, 3, 4], "horizontalalign": [1, 2, 3, 4], "verticalalign": [1, 2, 3, 4], "top": [1, 2, 3, 4], "appli": [1, 2, 3, 4], "font": [1, 2, 3, 4], "size": [1, 3, 4], "tick": [1, 2, 3, 4], "tick_param": [1, 2, 3, 4], "axi": [1, 2, 3, 4], "both": [1, 2, 3, 4], "which": [1, 2, 3, 4], "labels": [1, 2, 3, 4], "get_xticklabel": [1, 2, 3, 4], "get_yticklabel": [1, 2, 3], "set_siz": [1, 2, 3, 4], "add": [1, 2, 3, 4], "right": [1, 2, 3], "mean": [1, 2], "ax2": [1, 2, 3], "axhlin": [1, 2], "linestyl": [1, 2], "96": [1, 2], "std": [1, 2, 3, 4], "grai": [1, 2, 3, 4], "b": [1, 2, 3], "legend": [1, 2, 3, 4], "handles_muscl": [1, 2, 3, 4], "line2d": [1, 2, 3, 4], "o": [1, 2, 3, 4], "w": [1, 2, 3, 4], "markerfacecolor": [1, 2, 3, 4], "markers": [1, 2, 3, 4], "item": [1, 2, 3, 4], "handl": [1, 2, 3, 4], "italic": [1, 2, 3, 4], "handles_specimen": [1, 2, 3, 4], "abov": [1, 2, 3, 4], "below": [1, 2, 3, 4], "titl": [1, 2, 3, 4], "loc": [1, 2, 3, 4], "upper": [1, 2, 3, 4], "center": [1, 2, 3, 4], "ncol": [1, 2, 3, 4], "6": [1, 2, 3, 4], "lower": [1, 2, 3, 4], "displai": [1, 2], "adjust": [1, 2, 3, 4], "layout": [1, 2, 3, 4], "tight_layout": [1, 2, 3, 4], "rect": [1, 2, 3, 4], "leav": [1, 2, 3, 4], "space": [1, 2, 3, 4], "show": [1, 2, 3, 4], "dep": [1, 2, 3, 4], "variabl": [1, 2, 3, 4], "squar": [1, 2, 3, 4], "892": 1, "adj": [1, 2, 3, 4], "888": 1, "method": [1, 2, 3, 4], "least": [1, 2, 3, 4], "230": 1, "date": [1, 2, 3, 4], "wed": [1, 2, 3, 4], "23": [1, 2, 3, 4], "oct": [1, 2, 3, 4], "2024": [1, 2, 3, 4], "prob": [1, 2, 3, 4], "90e": 1, "15": [1, 2, 3, 4], "time": [1, 2, 3, 4], "17": [1, 2, 3, 4], "40": [1, 2, 3, 4], "27": [1, 2, 3], "likelihood": [1, 2, 3, 4], "18": [1, 3], "138": 1, "No": [1, 2, 3, 4], "observ": [1, 2, 3, 4], "aic": [1, 2, 3, 4], "32": [1, 3], "28": [1, 2], "df": [1, 2, 3, 4], "residu": [1, 2, 3, 4], "bic": [1, 2, 3, 4], "29": [1, 2], "covari": [1, 2, 3, 4], "type": [1, 2, 3, 4], "nonrobust": [1, 2, 3, 4], "coef": [1, 2, 3, 4], "err": [1, 2, 3, 4], "025": [1, 2, 3, 4], "975": [1, 2, 3, 4], "const": [1, 2, 3, 4], "0633": 1, "173": 1, "365": 1, "718": 1, "292": 1, "418": 1, "9574": 1, "063": 1, "000": [1, 2, 3], "828": 1, "087": 1, "omnibu": [1, 2, 3, 4], "060": 1, "durbin": [1, 2, 3, 4], "watson": [1, 2, 3, 4], "756": 1, "217": 1, "jarqu": [1, 2, 3, 4], "bera": [1, 2, 3, 4], "jb": [1, 2, 3, 4], "522": 1, "skew": [1, 2, 3, 4], "195": 1, "kurtosi": [1, 2, 3, 4], "968": 1, "cond": [1, 2, 3, 4], "21": [1, 2, 4], "5": [1, 4], "note": [1, 2, 3, 4], "standard": [1, 2, 3, 4], "assum": [1, 2, 3, 4], "matrix": [1, 2, 3, 4], "correctli": [1, 2, 3, 4], "specifi": [1, 2, 3, 4], "ones": [1, 2], "illustr": [1, 2, 3], "optim": [1, 2], "surround": [1, 2], "shade": [1, 2, 3, 4], "repres": [1, 2, 3, 4], "confid": [1, 2, 3, 4], "interv": [1, 2, 3, 4], "two": [1, 2], "shown": [1, 2], "dash": [1, 2], "while": [1, 2], "indic": [1, 2, 3], "limit": [1, 2], "agreement": [1, 2], "determin": [1, 2, 3, 4], "deviat": [1, 2], "absolut": [1, 2], "root": [1, 2], "errr": 1, "coeffici": [1, 2, 3, 4], "determinati": 1, "calcul": [1, 2, 3, 4], "mae": [1, 2], "rmse": [1, 2], "sqrt": [1, 2, 3, 4], "r2": [1, 2], "tabl": [1, 2], "r\u00b2": [1, 2], "14": [1, 2, 3], "we": [1, 2], "often": [1, 2], "want": [1, 2], "know": [1, 2], "would": [1, 2], "perfect": [1, 2], "one": [1, 2, 3], "relationship": [1, 2], "high": [1, 2], "doe": [1, 2], "significantli": [1, 2], "intercept_s": [1, 2], "slope_s": [1, 2], "bse": [1, 2], "t_stat_slop": [1, 2], "t_stat_intercept": [1, 2], "tvalu": [1, 2], "A": [1, 2], "estim": [1, 2], "check": [1, 2], "intercept_t_stat": [1, 2], "To": [1, 2], "hypothesi": [1, 2], "subtract": [1, 2], "t_stat_slope_vs_1": [1, 2], "probabl": [1, 2], "under": [1, 2], "null": [1, 2], "p_value_slope_vs_1": [1, 2], "cdf": [1, 2], "ab": [1, 2, 3, 4], "len": [1, 2, 3, 4], "help": [1, 2], "intercept_p_valu": [1, 2], "72": 1, "68": 1, "50": 1, "reconstructio": 2, "exp_volum": 2, "volume_exp": [2, 3, 4], "cm\u00b3": [2, 3, 4], "poly_volum": 2, "volume_rec": [2, 3, 4], "943": 2, "941": 2, "459": 2, "54e": 2, "19": 2, "31": 2, "1266": 2, "25": [2, 3], "06": 2, "1380": 2, "176": 2, "785": 2, "439": 2, "222": 2, "498": 2, "9481": 2, "044": 2, "857": 2, "039": 2, "337": 2, "311": [2, 3], "685": 2, "580": 2, "431": [2, 4], "960": 2, "22": 2, "94": 2, "43": 2, "44": 2, "python": [3, 4], "an": [3, 4], "specif": [3, 4], "conduct": [3, 4], "follow": [3, 4], "addition": 3, "separ": [3, 4], "improv": [3, 4], "from": [3, 4], "sandbox": [3, 4], "predstd": [3, 4], "wls_prediction_std": [3, 4], "rt": [3, 4], "construct": [3, 4], "rel": [3, 4], "logarithm": [3, 4], "origin_area": [3, 4], "muscle_volume_rec": [3, 4], "log_origin_area": [3, 4], "cm\u00b2": [3, 4], "log_volume_rec": [3, 4], "log_volume_exp": [3, 4], "investig": [3, 4], "them": [3, 4], "row": [3, 4], "either": 3, "filtered_data": 3, "muscle_origin": 3, "muscle_volum": 3, "shapiro": [3, 4], "wilk": [3, 4], "evalu": [3, 4], "q": [3, 4], "shapiro_test1": 3, "shapiro_test2": 3, "convert": [3, 4], "inch": [3, 4], "width_cm": [3, 4], "height_cm": [3, 4], "75": [3, 4], "aspect": [3, 4], "ratio": [3, 4], "option": [3, 4], "width_in": [3, 4], "54": [3, 4], "height_in": [3, 4], "data1": [3, 4], "probplot": [3, 4], "dist": [3, 4], "norm": [3, 4], "xlabel": [3, 4], "theoret": [3, 4], "quantil": [3, 4], "ylabel": [3, 4], "xtick": [3, 4], "ytick": [3, 4], "data2": [3, 4], "shapiroresult": [3, 4], "9892005715167651": 3, "pvalu": [3, 4], "9907832024086947": 3, "9838490399269613": 3, "9369937392036665": 3, "pearsonr": [3, 4], "degre": [3, 4], "freedom": [3, 4], "alpha": [3, 4], "signific": [3, 4], "level": [3, 4], "z": [3, 4], "arctanh": [3, 4], "se_z": [3, 4], "z_critic": [3, 4], "ppf": [3, 4], "z_lower": [3, 4], "z_upper": [3, 4], "r_lower": [3, 4], "tanh": [3, 4], "r_upper": [3, 4], "p_tex": [3, 4], "001": [3, 4], "elif": [3, 4], "els": [3, 4], "linear": [3, 4], "column": [3, 4], "re": [3, 4], "911": 3, "907": 3, "254": 3, "29e": 3, "35": 3, "9869": 3, "97": 3, "26": [3, 4], "57": 3, "3170": 3, "302": 3, "049": 3, "304": 3, "939": 3, "305": 3, "2119": 3, "076": 3, "957": 3, "056": 3, "368": 3, "619": 3, "327": 3, "734": 3, "691": 3, "186": 3, "708": 3, "error": [3, 4], "predict": [3, 4], "boundari": [3, 4], "prstd": [3, 4], "iv_l": [3, 4], "iv_u": [3, 4], "iloc": [3, 4], "first": [3, 4], "paramet": [3, 4], "remain": [3, 4], "y_pred": [3, 4], "line": [3, 4], "equat": [3, 4], "regression_eq": [3, 4], "report": [3, 4], "nthe": [3, 4], "wa": [3, 4], "2e": [3, 4], "nwith": [3, 4], "nrow": [3, 4], "sharei": 3, "true": 3, "get": [3, 4], "respect": [3, 4], "scatterplot": [3, 4], "supra": 3, "infra": 3, "subscap": 3, "isometr": [3, 4], "scale": [3, 4], "min": [3, 4], "visual": 3, "npearson": [3, 4], "n95": [3, 4], "ci": [3, 4], "make": [3, 4], "room": [3, 4], "1mr": [3, 4], "90": 3, "98": 3, "1my": [3, 4], "21x": 3, "versu": 3, "best": [3, 4], "around": [3, 4], "filtered_datater": 4, "step": 4, "dropna": 4, "subset": 4, "muscle_originter": 4, "muscle_volumeter": 4, "shapiro_test1ter": 4, "shapiro_test2ter": 4, "9764683665986374": 4, "9183015896483309": 4, "9379240782979819": 4, "2943891441958709": 4, "393": 4, "11": 4, "36": 4, "00421": 4, "39": 4, "520": 4, "48": 4, "71": 4, "9960": 4, "516": 4, "872": 4, "002": 4, "897": 4, "095": 4, "0780": 4, "320": 4, "370": 4, "004": 4, "396": 4, "760": 4, "199": 4, "944": 4, "905": 4, "399": 4, "070": 4, "819": 4, "263": 4, "99": 4, "c": 4, "programdata": 4, "anaconda3": 4, "env": 4, "env_muscvolreco": 4, "lib": 4, "site": 4, "_axis_nan_polici": 4, "py": 4, "531": 4, "userwarn": 4, "kurtosistest": 4, "onli": 4, "valid": 4, "20": 4, "continu": 4, "anywai": 4, "hypotest_fun_out": 4, "sampl": 4, "kwd": 4, "66": 4, "21e": 4, "03": 4, "86": 4, "08x": 4, "00": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"introduct": 0, "tabl": 0, "content": 0, "figur": 0, "si": [1, 4], "3": [1, 2, 3], "pair": [1, 2], "t": [1, 2], "test": [1, 2, 3, 4], "regress": [1, 2], "analysi": [1, 2, 3, 4], "muscl": [1, 2], "length": 1, "import": [1, 2, 3, 4], "input": [1, 2, 3, 4], "setup": [1, 2, 3, 4], "linear": [1, 2], "visual": [1, 2], "error": [1, 2], "metric": [1, 2], "differ": [1, 2], "from": [1, 2], "ident": [1, 2], "line": [1, 2], "result": [2, 3], "2": 2, "volum": 2, "correl": [3, 4], "supraspinatu": 3, "infraspinatu": 3, "subscapulari": 3, "filter": [3, 4], "data": [3, 4], "normal": [3, 4], "pearson": [3, 4], "1": 4, "tere": 4, "major": 4, "minor": 4}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})