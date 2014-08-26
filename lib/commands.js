var commands = {
	transition: {
		mix: "VMX:000",
		wipe: "VMX:210"
	},

	a: {
		input: {
			1: "<02>VCP:200<03>",
			2: "<02>VCP:201<03>",
			3: "<02>VCP:202<03>",
			4: "<02>VCP:203<03>",
			5: "<02>VCP:204<03>"
		},
		effect: {
			str: {
				0: "<02>VDE:070<03>",
				1: "<02>VDE:071<03>",
				2: "<02>VDE:072<03>",
				3: "<02>VDE:073<03>",
				4: "<02>VDE:074<03>",
				5: "<02>VDE:075<03>"
			},
			mos: {
				0: "<02>VDE:076<03>",
				1: "<02>VDE:077<03>",
				2: "<02>VDE:078<03>",
				3: "<02>VDE:079<03>",
				4: "<02>VDE:080<03>",
				5: "<02>VDE:081<03>"
			},
			pnt: {
				0: "<02>VDE:082<03>",
				1: "<02>VDE:083<03>",
				2: "<02>VDE:084<03>",
				3: "<02>VDE:085<03>",
				4: "<02>VDE:086<03>"
			},
			neg: {
				off: "<02>VDE:087<03>",
				on: "<02>VDE:088<03>"
			},
			frz: {
				fld: "<02>VDE:089<03>",
				frm: "<02>VDE:090<03>"
			}
		}
	},

	b: {
		input: {
			1: "<02>VCP:205<03>",
			2: "<02>VCP:206<03>",
			3: "<02>VCP:207<03>",
			4: "<02>VCP:208<03>",
			5: "<02>VCP:209<03>"
		},
		effect: {
			str: {
				0: "<02>VDE:094<03>",
				1: "<02>VDE:095<03>",
				2: "<02>VDE:096<03>",
				3: "<02>VDE:097<03>",
				4: "<02>VDE:098<03>",
				5: "<02>VDE:099<03>"
			},
			mos: {
				0: "<02>VDE:100<03>",
				1: "<02>VDE:101<03>",
				2: "<02>VDE:102<03>",
				3: "<02>VDE:103<03>",
				4: "<02>VDE:104<03>",
				5: "<02>VDE:105<03>"
			},
			pnt: {
				0: "<02>VDE:106<03>",
				1: "<02>VDE:107<03>",
				2: "<02>VDE:108<03>",
				3: "<02>VDE:109<03>",
				4: "<02>VDE:110<03>"
			},
			neg: {
				off: "<02>VDE:111<03>",
				on: "<02>VDE:112<03>"
			},
			frz: {
				fld: "<02>VDE:113<03>",
				frm: "<02>VDE:114<03>"
			}
		}
	},

	wipe: {
		direction: {
			one: "VWD:040",
			reverse: "VWD:041"
		},
		edge: {
			none: "VWB:042",
			border: "VWB:043",
			soft: "VWB:044"
		},
		spEdge: {
			none: "VWB:061",
			border: "VWB:062",
			soft: "VWB:063"
		},
		multi: {
			1: "VWM:045",
			2: "VWM:046",
			3: "VWM:047",
			4: "VWM:048"
		},
		mode: {
			normal: "VWM:049",
			compression: "VWM:050",
			slide: "VWM:051",
			pair: "VWM:052",
			slideCompression: "VWM:053",
			normal: "VWM:054"
		},
		operation: {
			over: "VWM:054",
			remove: "VWM:055",
			flip: "VWM:056",
			push: "VWM:057"
			// 58, 59, 60?
		},


		squareCorner: {
			ul: "<02>VWP:001<03>",
			dl: "<02>VWP:002<03>",
			dr: "<02>VWP:003<03>",
			dl: "<02>VWP:004<03>"
		},
		blind: {
			l: "<02>VWP:005<03>",
			d: "<02>VWP:006<03>",
			r: "<02>VWP:007<03>",
			u: "<02>VWP:008<03>"
		},
		triangleCorner: {
			ul: "<02>VWP:009<03>",
			dl: "<02>VWP:010<03>",
			dr: "<02>VWP:011<03>",
			dl: "<02>VWP:012<03>"
		},
		triangle: {
			l: "<02>VWP:013<03>",
			d: "<02>VWP:014<03>",
			r: "<02>VWP:015<03>",
			u: "<02>VWP:016<03>"
		},
		center: {
			square: "<02>VWP:017<03>",
			circle: "<02>VWP:018<03>",
			ovale: "<02>VWP:019<03>",
			losange: "<02>VWP:020<03>"
		},
		line: {
			vert: "<02>VWP:021<03>",
			horiz: "<02>VWP:022<03>",
			cross: "<02>VWP:023<03>"
		},
		special: {
			24: "<02>VWP:024<03>",
			25: "<02>VWP:025<03>",
			26: "<02>VWP:026<03>",
			27: "<02>VWP:027<03>",
			28: "<02>VWP:028<03>",
			29: "<02>VWP:029<03>",
			30: "<02>VWP:030<03>",
			31: "<02>VWP:031<03>",
			32: "<02>VWP:032<03>",
			33: "<02>VWP:033<03>",
			34: "<02>VWP:034<03>",
			35: "<02>VWP:035<03>",
			36: "<02>VWP:036<03>",
			37: "<02>VWP:037<03>"
			//38: "<02>VWP:038<03>"
			//39: "<02>VWP:039<03>"
		}
	},

	color: {
		back: {
			w: "<02>VBC:140<03>",
			y: "<02>VBC:141<03>",
			c: "<02>VBC:142<03>",
			g: "<02>VBC:143<03>",
			m: "<02>VBC:144<03>",
			r: "<02>VBC:145<03>",
			b: "<02>VBC:146<03>",
			blk: "<02>VBC:147<03>",
			u: "<02>VBC:148<03>"                  // user
		},
		border: {
			w: "<02>VEC:150<03>",
			y: "<02>VEC:151<03>",
			c: "<02>VEC:152<03>",
			g: "<02>VEC:153<03>",
			m: "<02>VEC:154<03>",
			r: "<02>VEC:155<03>",
			b: "<02>VEC:156<03>",
			blk: "<02>VEC:157<03>",
			u: "<02>VEC:158<03>"                  // user
		},
		mode: {
			n: "<02>VBG:160<03>",
			1: "<02>VBG:161<03>",
			2: "<02>VBG:162<03>",
			3: "<02>VBG:163<03>",
			4: "<02>VBG:164<03>"
		},
		title: {
			int: "<02>VTC:165<03>",
			ext: "<02>VTC:166<03>"
		},
		edge: {
			0: "<02>VTE:167<03>",
			1: "<02>VTE:168<03>",
			2: "<02>VTE:169<03>",
			3: "<02>VTE:170<03>",
			4: "<02>VTE:171<03>",
			5: "<02>VTE:172<03>"
		}
	}




// ACC_OFF$ = "<02>VDE:091<03>"
// ACC_ON$ = "<02>VDE:092<03>"
// BCC_OFF$ = "<02>VDE:115<03>"
// BCC_ON$ = "<02>VDE:116<03>"
// ACHR_LEV$ = "<02>VDE:093"+"80"+"<03>" 'xxxxx
// BCHR_LEV$ = "<02>VDE:117"+"80"+"<03>" 'xxxxx

// AFOL_ON$ = "<02>AML:120<03>"
// AFOL_OFF$ = "<02>AML:121<03>"
// AFOL4_ON$ = "<02>AML:126<03>"
// AFOL4_OFF$ = "<02>AML:127<03>"
// ALEV_1B$ = "<02>ALV:122" 'xxxxx (xx is ASCII 00H-1AH)
// ALEV_2B$ = "<02>ALV:123" 'xxxxx
// ALEV_3B$ = "<02>ALV:124" 'xxxxx
// ALEV_4B$ = "<02>ALV:125" 'xxxxx

// VFAD_ON$ = "<02>VFD:130<03>"
// VFAD_OFF$ = "<02>VFD:131<03>"
// AFAD_ON$ = "<02>VFD:132<03>"
// AFAD_OFF$ = "<02>VFD:133<03>"
// TFAD_ON$ = "<02>VFD:134<03>"
// TFAD_OFF$ = "<02>VFD:135<03>"
// FTO_WHT$ = "<02>VFD:136<03>"
// FTO_BK$ = "<02>VFD:137<03>"
// FTO_COL$ = "<02>VFD:138<03>"


// USER_BACK$ = "<02>VBM:174"+"80"+"80"+"<03>" 'xxxxx
// USER_BORD$ = "<02>VBM:175"+"80"+"80"+"<03>" 'xxxxx
// LEVER_POS$ = "<02>VMM:175"+"80"+"<03>" 'xxxxx

// ADIG_ON$ = "<02>VDE:180<03>"
// ADIG_OFF$ = "<02>VDE:181<03>"
// BDIG_ON$ = "<02>VDE:182<03>"
// BDIG_OFF$ = "<02>VDE:183<03>"
// AFRZ_ON$ = "<02>VDE:184<03>"
// AFRZ_OFF$ = "<02>VDE:185<03>"
// BFRZ_ON$ = "<02>VDE:186<03>"
// BFRZ_OFF$ = "<02>VDE:187<03>"

// SPEED_SET$ = "<02>VAS:190"+DEF_TRANS_TIME$+"<03>"
// 'SPEED_SET_IN$ = "<02>VAS:190"+DEF_TRANS_TIME_IN$+"<03>" 'xxxxx DEF_TRANS_TIME$
// 'SPEED_SET_OUT$ = "<02>VAS:190"+DEF_TRANS_TIME_IN$+"<03>"
// FADE$ = "<02>VFM:191<03>"
// TAKE$ = "<02>VMA:192<03>"
// COMP_ON$ = "<02>ZYC:193<03>"
// COMP_OFF$ = "<02>ZYC:194<03>"

// CB_ON$ = "<02>VBC:197<03>"
// CB_OFF$ = "<02>VBC:197<03>"
// FACTORY_SET$ = "<02>ZRS:199<03>"


// LUM_SET$ = "<02>VMX:211"+"80"+"<03>" 'xxx
// LUM_EXE$ = "<02>VMX:212<03>"
// CHR_KEY$ = "<02>VMX:213<03>"
// CHR_SET$ = "<02>VCS:214"+"80"+"80"+"80"+"<03>" 'xxxxx
// CHR_UNDO$ = "<02>ZUD:215<03>"
// ENTER$ = "<02>ZEN:216<03>"

// POS_CC$ = "<02>VPS:217"+"80"+"80"+"<03>"
// POS_WIPE$ = "<02>VPS:218"+"80"+"80"+"<03>"
// POS_SG$ = "<02>VPS:219"+"80"+"80"+"<03>"
// EVENT_MEM_CLR$ = "<02>VGP:220"+"00"+"<03>"
// EVENT_MEM_1$ = "<02>VGP:220"+"01"+"<03>"
// EVENT_MEM_2$ = "<02>VGP:220"+"02"+"<03>"
// EVENT_MEM_3$ = "<02>VGP:220"+"03"+"<03>"
// EVENT_MEM_4$ = "<02>VGP:220"+"04"+"<03>"
// EVENT_CALL$ = "<02>VGP:222"+"80"+"<03>"
// EVENT_CALL_OFF$ = "<02>VGP:223"+"80"+"<03>"
}

module.exports.commands = commands;
