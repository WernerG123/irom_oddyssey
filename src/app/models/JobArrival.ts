//Template 1
import { ObjectId } from 'mongodb';

// export class JobArrival {
//     _id: "", : "";
//     customerInfo= {
//         barcode: {
//             available: "", : "";
//             comment: "", : "";
//         };
//         assetUni: "", : "";
//         projectNo: "", : "";
//         customer: "", : "";
//         salesOrderNo: "", : "";
//         customerSite: "", = "";
//         customerPO= "", = "";
//         customerMaterialNo= "", = "";
//         workshopArrival: string = "";
//         drawingRef: string = "";
//         arrivalDate: any;
//         serialNo: string = "";
//         assetType: string = "";
//         customerDeliveryAddress?: string = "";
//     } = {
//             barcode: {
//                 available: "",
//                 comment: ""
//             },
//             assetUni: "",
//             projectNo: "",
//             customer: "",
//             salesOrderNo: "",
//             customerSite: "",
//             customerPO: "",
//             customerMaterialNo: "",
//             workshopArrival: "",
//             drawingRef: "",
//             arrivalDate: "",
//             serialNo: "",
//             assetType: ""
//         };
//     pulleyArrival: {
//         shellOD: string = "";
//         faceWidth: string;
//         lagging: string;
//         bearingHousingCenters: string;
//         lockingElementSizeType: string;
//         bearingHousingType: string;
//         coverPlate: {
//             available: string;
//             comment: string;
//         };
//         speedFlagsAndBrackets: {
//             available: string;
//             comment: string;
//         };
//         coupling: {
//             available: string;
//             comment: string;
//         };
//         transportCradle: {
//             available: string;
//             comment: string;
//         };
//         generalComments: string;
//         arrivalPhotos: {
//             [key: string]: string;
//         };
//     } = {
//             shellOD: "",
//             faceWidth: "",
//             lagging: "",
//             bearingHousingCenters: "",
//             lockingElementSizeType: "",
//             bearingHousingType: "",
//             coverPlate: {
//                 available: "",
//                 comment: ""
//             },
//             speedFlagsAndBrackets: {
//                 available: "",
//                 comment: ""
//             },
//             coupling: {
//                 available: "",
//                 comment: ""
//             },
//             transportCradle: {
//                 available: "",
//                 comment: ""
//             },
//             generalComments: "",
//             arrivalPhotos: {
//                 "1": "",
//                 "2": "",
//                 "3": ""
//             }
//         };
//     shellOD: string = "";
//     faceWidth: string = "";
//     lagging: string = "";
//     bearingHousingCenters: string = "";
//     lockingElementSizeType: string = "";
//     bearingHousingType: string = "";
//     coverPlate: {
//         available: string;
//         comment: string;
//     } = {
//             available: "",
//             comment: ""
//         };
//     speedFlagsAndBrackets: {
//         available: string;
//         comment: string;
//     } = {
//             available: "",
//             comment: ""
//         };
//     coupling: {
//         available: string;
//         comment: string;
//     } = {
//             available: "",
//             comment: ""
//         };
//     transportCradle: {
//         available: string;
//         comment: string;
//     } = {
//             available: "",
//             comment: ""
//         };
//     generalComments: string = "";
//     arrivalPhotos: {
//         [key: string]: string;
//     } = {
//             "1": "IMAGE1",
//             "2": "IMAGE2",
//             "3": "IMAGE3"
//         };
//     scopeOfWork: {
//         drawingRef: string;
//         pulleyType: string;
//         pulleyMajorComponents: {
//             [key: string]: {
//                 comment: string;
//                 action: string;
//             };
//         };
//         pulleyMinorComponents: {
//             [key: string]: {
//                 comment: string;
//                 action: string;
//             };
//         };
//     } = {
//             drawingRef: "",
//             pulleyType: "",
//             pulleyMajorComponents: {
//                 lagging: {
//                     comment: "",
//                     action: ""
//                 },
//                 shaftMajorDiameterAndLength: {
//                     comment: "",
//                     action: ""
//                 },
//                 shellBoreDiameterAndDepth: {
//                     comment: "",
//                     action: ""
//                 },
//                 lockingElementSizeAndType: {
//                     comment: "",
//                     action: ""
//                 },
//                 coverPlate: {
//                     comment: "",
//                     action: ""
//                 },
//                 coverPlateScrews: {
//                     comment: "",
//                     action: ""
//                 },
//                 speedFlagsAndBrackets: {
//                     comment: "",
//                     action: ""
//                 },
//                 housingAssemblies: {
//                     comment: "",
//                     action: ""
//                 },
//                 sealsType: {
//                     comment: "",
//                     action: ""
//                 },
//                 greaseType: {
//                     comment: "",
//                     action: ""
//                 },
//                 bearingSeries: {
//                     comment: "",
//                     action: ""
//                 },
//                 bearingAssembly: {
//                     comment: "",
//                     action: ""
//                 },
//                 couplingAndKeys: {
//                     comment: "",
//                     action: ""
//                 },
//                 NDTAndMPI: {
//                     comment: "",
//                     action: ""
//                 }
//             },
//             pulleyMinorComponents: {
//                 pulleyNameplate: {
//                     comment: "",
//                     action: ""
//                 },
//                 pulleyCradleNameBoard: {
//                     comment: "",
//                     action: ""
//                 },
//                 pulleyCradle: {
//                     comment: "",
//                     action: ""
//                 },
//                 nameplateAndFixedEndTags: {
//                     comment: "",
//                     action: ""
//                 },
//                 cradleStickers: {
//                     comment: "",
//                     action: ""
//                 },
//                 shrinkWrap: {
//                     comment: "",
//                     action: ""
//                 },
//                 clearViewingWindows: {
//                     comment: "",
//                     action: ""
//                 },
//                 moistureAbsorbent: {
//                     comment: "",
//                     action: ""
//                 },
//                 cradleChannel: {
//                     comment: "",
//                     action: ""
//                 },
//                 cradleDrawing: {
//                     comment: "",
//                     action: ""
//                 },
//                 pulleyCradleNameplate: {
//                     comment: "",
//                     action: ""
//                 },
//                 pulleyTimber: {
//                     comment: "",
//                     action: ""
//                 }
//             }
//         };
// }



// export class CriticalAssetDetails {
//     _id: any = '';
//     assetUni: string = '';
//     site: string = '';
//     client: string = '';
//     arrivalDate: string = '';
//     customerPO: string = '';
//     serialNo: string = '';
//     materialNo: string = '';
//     oemJobNo: string = '';
//     pulleyType: string = '';
//     sealType: string = '';
//     drawingRefCustomer: string = '';
//     lockingAssemblies: string = '';
//     drawingOEM: string = '';
//     lockingAssembliesNm: string = '';
//     housingManufacturer: string = '';
//     lagging: string = '';
//     housingsType: string = '';
//     shellThickness: string = '';
//     bearingDesignation: string = '';
//     pulleyDIA: string = '';
//     bearingOpenSealed: string = '';
//     pulleyFaceWidth: string = '';
//     bearingManufacturer: string = '';
//     shaftOL: string = '';
//     bearingLoadAppliedAtVA: string = '';
//     bearingShaftDIA: string = '';
//     vaRunningTestSpeed: string = '';
//     housingCenters: string = '';
//     greaseType: string = '';
//     mass: string = '';
// }

// export class ScopeOfWork {
//     scopeOfWork = {
//         assetUni: "",
//         prokJobNo: "",
//         pulleyType: "",
//         customerPO: "",
//         clientPart: "",
//     }
//     pulleyMajorComponents = {
//         lagging: {
//             comment: "",
//             action: ""
//         },
//         shaftMajorDiameterAndLength: {
//             comment: "",
//             action: ""
//         },
//         shellBoreDiameterAndDepth: {
//             comment: "",
//             action: ""
//         },
//         lockingElementSizeAndType: {
//             comment: "",
//             action: ""
//         },
//         coverPlate: {
//             comment: "",
//             action: ""
//         },
//         coverPlateScrews: {
//             comment: "",
//             action: ""
//         },
//         speedFlagsAndBrackets: {
//             comment: "",
//             action: ""
//         },
//         housingAsseblies: {
//             comment: "",
//             action: ""
//         },
//         sealsType: {
//             comment: "",
//             action: ""
//         },
//         greaseType: {
//             comment: "",
//             action: ""
//         },
//         bearingSeries: {
//             comment: "",
//             action: ""
//         },
//         bearingAssembly: {
//             comment: "",
//             action: ""
//         },
//         couplingAndKeys: {
//             comment: "",
//             action: ""
//         },
//         NDTAndMPI: {
//             comment: "",
//             action: ""
//         }
//     }
//     pulleyMinorComponents = {
//         pulleyNameplate: {
//             comment: "",
//             action: ""
//         },
//         pulleyCradleNameBoard: {
//             comment: "",
//             action: ""
//         },
//         pulleyCradle: {
//             comment: "",
//             action: ""
//         },
//         nameplateAndFixedEndTags: {
//             comment: "",
//             action: ""
//         },
//         cradleStickers: {
//             comment: "",
//             action: ""
//         },
//         shrinkWrap: {
//             comment: "",
//             action: ""
//         },
//         clearViewingWindows: {
//             comment: "",
//             action: ""
//         },
//         moistureAbsorbent: {
//             comment: "",
//             action: ""
//         },
//         cradleChannel: {
//             comment: "",
//             action: ""
//         },
//         cradleDrawing: {
//             comment: "",
//             action: ""
//         },
//         pulleyCradleNameplate: {
//             comment: "",
//             action: ""
//         },
//         pulleyTimber: {
//             comment: "",
//             action: ""
//         }
//     }
// }

// export class RefurbCondition {
//     attention = "";
//     copyTo = "";
//     preparedBy = "";
//     dateOfReport = "";
//     prokReportNo = "";
//     clientPO = "";
//     clientMaterialNo = "";
//     pulleyType = "";
//     client = "";
//     site = "";
//     customerPO = "";
//     arrivalDate = "";
//     technicians = "";
//     prokJobNo = "";
//     inspectionDate = "";
//     serialNo = "";
//     clientPart = "";
//     drawingRef = "";
//     specialFeature = "";
//     mass = "";
//     cradleType = "";
//     imgNamePlate = "";
//     imgTag1 = "";
//     imgTag2 = "";

//     pulleyCondition = {
//         shell: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         speedFlags: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         protectiveCoatings: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         lagging: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         shaft: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         couplings: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         fixedEndBearing: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         fixedEndHousing: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         floatEndBearing: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         floatEndHousing: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         fixedEndLockingAssembly: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         floatEndLockingAssembly: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         lockingAssemblyCoverPlate: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         transportCradle: {
//             condition: "",
//             description: "",
//             comment: ""
//         },
//         conclusion: ""
//     }

//     pulleyCradle = {
//         pulleyCradleType: "",
//         ratchetQuantityOverPulley: "",
//         stencinlingComplaint: {
//             available: "",
//             pass: ""
//         },
//         frameCondition: "",
//         surfaceCoating: {
//             available: "",
//             action: ""
//         },
//         cradleConditionDetails: {
//             condition: "",
//             comment: ""
//         },
//         imgPulleyCradleNameplate: "",
//         imgPulleyCradleFromFront: "",
//         imgPulleyCradleFromSideL: "",
//         imgPulleyCradleFromSideR: "",
//     }

//     pulleySpeedFlags = {
//         speedFlags: {
//             available: "",
//             pass: ""
//         },
//         fixEndFlag: {
//             quantity: "",
//             action: ""
//         },
//         floatEndFlag: {
//             quantity: "",
//             action: ""
//         },
//         imgSpeedFlagFloatEnd: "",
//         imgSpeedFlagFixEnd: "",
//     }

//     protectiveCoatings = {
//         endDisc: {
//             coated: "",
//             coatingColor: ""
//         },
//         coatingCondition: {
//             condition: "",
//             comment: ""
//         },
//         imgFixAEnd: "",
//         imgFloatBEnd: ""
//     }

//     pulleyMeasurements = {
//         imgMeasurementDrawing: "",
//         dimensions: {
//             A: {
//                 actualMeasurements: "",
//                 drawingMeasurements: ""
//             },
//             B: {
//                 actualMeasurements: "",
//                 drawingMeasurements: ""
//             },
//             C: {
//                 actualMeasurements: "",
//                 drawingMeasurements: ""
//             },
//             D: {
//                 actualMeasurements: "",
//                 drawingMeasurements: ""
//             },
//             E: {
//                 actualMeasurements: "",
//                 drawingMeasurements: ""
//             },
//             F: {
//                 actualMeasurements: "",
//                 drawingMeasurements: ""
//             }
//         }
//     }

//     couplings = {
//         couplingsFittedToPulley: "",
//         couplingSingleOrDualDrive: "",
//         couplingType: "",
//         oilInjectionGroovesPresent: "",
//         stressReliefGroovesPresent: "",
//         signsOfSurfaceDamage: "",
//         runoutCheckedAsRecievedCondition: "",
//         measurementsOfRunout: "",
//         couplingCondition: "",
//         imgCouplingDetailsSingleDriveFixEnd: "",
//         singleDriveImages: {
//             imgBeforeRemoval: "",
//             imgAfterRemoval: "",
//             imgFace: "",
//             imgSide: "",
//             imgInternalBores: "",
//             imgTopView: ""
//         },
//         couplingDimensions: {
//             boreDimensions: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     toleranceRequired: "",
//                     journalDiameterWithinToleranceSpec: ""
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     toleranceRequired: "",
//                     journalDiameterWithinToleranceSpec: ""
//                 },
//                 C: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     toleranceRequired: "",
//                     journalDiameterWithinToleranceSpec: ""
//                 }
//             },
//             couplingMeasurements: {
//                 D: "",
//                 E: "",
//                 F: "",
//                 G: "",
//                 H: ""
//             },
//             oilInjectionGroovesCount: "",
//             journalLength: "",
//             journalLengthInSpec: "",
//             couplingConditionDetails: {
//                 condition: "",
//                 comment: ""
//             },
//         },

//         imgCouplingDetailsDualDrive: "",
//         couplingDimensionsFixEnd: {
//             boreDimensions: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     toleranceRequired: "",
//                     journalDiameterWithinToleranceSpec: ""
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     toleranceRequired: "",
//                     journalDiameterWithinToleranceSpec: ""
//                 },
//                 C: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     toleranceRequired: "",
//                     journalDiameterWithinToleranceSpec: ""
//                 }
//             },
//             couplingMeasurements: {
//                 D: "",
//                 E: "",
//                 F: "",
//                 G: "",
//                 H: ""
//             },
//             oilInjectionGroovesCount: "",
//             journalLength: "",
//             journalLengthInSpec: "",
//             couplingConditionDetails: {
//                 condition: "",
//                 comment: ""
//             },
//         },
//         dualDriveFixEndImages: {
//             imgFace: "",
//             imgSide: "",
//             imgInternalBores: "",
//             imgLength: "",
//         },
//         couplingDimensionsFloatEnd: {
//             boreDimensions: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     toleranceRequired: "",
//                     journalDiameterWithinToleranceSpec: ""
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     toleranceRequired: "",
//                     journalDiameterWithinToleranceSpec: ""
//                 },
//                 C: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     toleranceRequired: "",
//                     journalDiameterWithinToleranceSpec: ""
//                 }
//             },
//             couplingMeasurements: {
//                 D: "",
//                 E: "",
//                 F: "",
//                 G: "",
//                 H: ""
//             },
//             oilInjectionGroovesCount: "",
//             journalLength: "",
//             journalLengthInSpec: "",
//             couplingConditionDetails: {
//                 condition: "",
//                 comment: ""
//             },
//         },
//         dualDriveFloatEndImages: {
//             imgFace: "",
//             imgSide: "",
//             imgInternalBores: "",
//             imgLength: "",
//         },

//     }

//     bearingAndHousingAssembly = {
//         fixEnd: {
//             housingDesignation: "",
//             housingType: "",
//             housingAEndFixEnd: "",
//             housingManufacturer: "",
//             housingSeriesNo: "",
//             housingAEndFixEndDamage: {
//                 damaged: "",
//                 comment: ""
//             },
//             greaseNippleStatus: "",
//             greaseStatus: {
//                 condition: "",
//                 comment: ""
//             },
//             sealCondition: {
//                 condition: "",
//                 comment: ""
//             },
//             overallBearingHousingCondition: "",
//             sealType: "",
//             bearingTypeAEnd: "",
//             bearingManufacturer: "",
//             bearingNo: "",
//             sleeveManufacturer: "",
//             sleeveNo: "",
//             radialClearance: "",
//             sleeveCondition: "",
//             bearingAssemblyConditionFixEnd: "",
//             observedAndSpecialModsFixEnd: ""
//         },
//         floatEnd: {
//             housingDesignation: "",
//             housingBEndFloatEnd: "",
//             housingManufacturer: "",
//             mountingHoles: "",
//             housingSeriesNo: "",
//             housingBEndFloatEndDamage: {
//                 damaged: "",
//                 comment: ""
//             },
//             greaseNippleStatus: "",
//             greaseStatus: {
//                 condition: "",
//                 comment: ""
//             },
//             sealCondition: {
//                 condition: "",
//                 comment: ""
//             },
//             overallBearingHousingCondition: "",
//             sealType: "",
//             bearingTypeBEnd: "",
//             bearingManufacturer: "",
//             bearingNo: "",
//             sleeveManufacturer: "",
//             sleeveNo: "",
//             radialClearance: "",
//             sleeveCondition: "",
//             bearingAssemblyConditionFloatEnd: "",
//             observedAndSpecialModsFloatEnd: ""
//         },
//         bearingAndHousingAssemblyImages: {
//             imgAEnd: "",
//             imgBEnd: "",
//             imgCoverplateRemovedAEnd: "",
//             imgCoverplateRemovedBEnd: "",
//             imgAEndTopHousingRemoved: "",
//             imgBEndTopHousingRemoved: "",
//             imgAEndBearingFitted: "",
//             imgBEndBearingFitted: "",
//             imgAEndSplitHousingGreased: "",
//             imgBEndSplitHousingGreased: "",
//             imgAEndHousingCleaned: "",
//             imgBEndHousingCleaned: "",
//             imgAEndBearingRollersGreased: "",
//             imgBEndBearingRollersGreased: "",
//             imgAEndBearingOuterRaceway1: "",
//             imgAEndBearingOuterRaceway2: "",
//             imgBEndBearingOuterRaceway1: "",
//             imgBEndBearingOuterRaceway2: "",
//             imgAEndSleeve1: "",
//             imgAEndSleeve2: "",
//             imgBEndSleeve1: "",
//             imgBEndSleeve2: "",
//             imgAEndBearingRollers: "",
//             imgBEndBearingRollers: "",
//             imgAEndBearingDamageInner: "",
//             imgBEndBearingDamageInner: "",
//             imgAEndBearingDamageOuter: "",
//             imgBEndBearingDamageOuter: "",
//             imgAEndSeal1: "",
//             imgAEndSeal2: "",
//             imgBEndSeal1: "",
//             imgBEndSeal2: "",
//         }
//     }

//     lockingAssembly = {
//         lockingAssemblyCoverplate: "",
//         thickness: "",
//         outsideDiameter: "",
//         insideDiameter: "",
//         pcdOnBoltHoles: "",
//         chordLengthOfBoltHoles: "",
//         diameterOfBoreHoles: "",
//         coverplateCondition: {
//             condition: "",
//             comment: "",
//         },
//         lockingAssemblyTpye: "",
//         lockingAssemblyModelSeries: "",
//         lockingAssemblyOutsideDiameter: "",
//         lockingAssemblyInsideDiameter: "",
//         signsOfDamage: {
//             fixAEnd: {
//                 damaged: "",
//                 action: "",
//             },
//             floatBEnd: {
//                 damaged: "",
//                 action: "",
//             }
//         },
//         lockingElementConditionFixEnd: {
//             condition: "",
//             comment: "",
//         },
//         lockingElementConditionFloatEnd: {
//             condition: "",
//             comment: "",
//         },
//         lockingAssemblyBoresFixEnd: {
//             condition: "",
//             comment: "",
//         },
//         lockingAssemblyBoresFloatEnd: {
//             condition: "",
//             comment: "",
//         },
//         lockingAssemblyImages: {
//             imgAEndLockingAssemblyBeforeRemoval: "",
//             imgBEndLockingAssemblyBeforeRemoval1: "",
//             imgBEndLockingAssemblyBeforeRemoval2: "",
//             imgAEndLockingAssemblyRemoved1: "",
//             imgAEndLockingAssemblyRemoved2: "",
//             imgBEndLockingAssemblyRemoved: "",
//             imgAEndLockingElement: "",
//             imgBEndLockingElement1: "",
//             imgBEndLockingElement2: "",
//         }
//     }

//     pulleyShaft = {
//         dimensions: {
//             shaftLength: {
//                 actual: "",
//                 drawing: "",
//                 commentsInSpec: ""
//             },
//             shaftDiameterInCenter: {
//                 actual: "",
//                 drawing: "",
//                 commentsInSpec: ""
//             },
//             internalThreads: {
//                 actual: "",
//                 drawing: "",
//                 commentsInSpec: ""
//             }
//         },
//         shaftKeyway: {
//             hasKeyway: "",
//             commentsInSpec: ""
//         },
//         keywayDims: {
//             actual: "",
//             drawing: "",
//             commentsInSpec: ""
//         },
//         sealAreaConditionFixEnd: {
//             comment: "",
//             commentsInSpec: "",
//         },
//         sealAreaConditionFloatEnd: {
//             comment: "",
//             commentsInSpec: "",
//         },
//         nonDestructiveTestingCompleted: "",
//         ultraSonicTest: "",
//         magneticParticleTest: "",
//         imgLockingAssemblyDrawing: "",
//         lockingAssemblyShaftDimensions: {
//             fixEnd: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 pass: "",
//                 lockingJournalLength: "",
//                 lockingJournalLengthPass: ""
//             },
//             floatEnd: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 pass: "",
//                 lockingJournalLength: "",
//                 lockingJournalLengthPass: ""
//             },
//             toleranceRequired: ""
//         },
//         bearingShaftDimensions: {
//             fixEnd: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 pass: "",
//                 bearingJournalLength: "",
//                 bearingJournalLengthPass: ""
//             },
//             floatEnd: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 pass: "",
//                 bearingJournalLength: "",
//                 bearingJournalLengthPass: ""
//             },
//             toleranceRequired: ""
//         },
//         sealDimensions: {
//             fixEnd: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 pass: "",
//                 sealAreaWidth: "",
//                 sealAreaWidthPass: ""
//             },
//             floatEnd: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 pass: "",
//                 sealAreaWidth: "",
//                 sealAreaWidthPass: ""
//             },
//             toleranceRequired: ""
//         },
//         couplingShaftDimensions: {
//             fixEnd: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 pass: "",
//                 couplingJournalLength: "",
//                 couplingJournalLengthPass: ""
//             },
//             floatEnd: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: ""
//                 },
//                 pass: "",
//                 couplingJournalLength: "",
//                 couplingJournalLengthPass: ""
//             },
//             toleranceRequired: ""
//         },
//         pulleyShaftCondtion: "",
//         overallShaftDescription: "",
//         pulleyShaftImages: {
//             imgOverallShaft: "",
//             imgLockingJournalFixEnd: "",
//             imgLockingJournalFloatEnd: "",
//             imgBearingJournalFixEnd: "",
//             imgBearingJournalFloatEnd: "",
//             imgFixEndLockingJournalWear: "",
//             imgFloatEndLockingJournalWear: "",
//             imgFixEndBearingJournalWear: "",
//             imgFloatEndBearingJournalWear: "",
//             imgFixEndCouplingJournal: "",
//             imgFloatEndCouplingJournal: "",
//             imgFixEndCouplingJournalWear: "",
//             imgFloatEndCouplingJournalWear: "",

//         }
//     }

//     pulleyLagging = {
//         currentLaggingType: "",
//         pattern: "",
//         thickness: "",
//         signsOfDamage: "",
//         laggingConditionDetails: "",
//         pulleyLaggingCondition: "",
//         pulleyLaggingImages: {
//             imgOverallConditionOfLagging: "",
//             imgFixEndView: "",
//             imgFloatEndView: "",
//             imgLaggingWear: "",
//             imgLaggingDepthMeasurement: "",
//         }
//     }

//     pulleyShell = {
//         faceWidth: "",
//         minShellThickness: "",
//         minShellThicknessPass: "",
//         outsideDiameterOverShell: "",
//         outsideDiameterOverShellPass: "",
//         shellInSpec: "",
//         shellType: "",
//         balanceWeightWeldInspection: "",
//         balanceWeightWeldInspectionPass: "",
//         shellWeldPassCondition: "",
//         shellWeldPassConditionPass: "",
//         magneticParticleTest: {
//             tested: "",
//             pass: "",
//         },
//         ultrasonicWeldTest: {
//             tested: "",
//             pass: "",
//         },
//         ultrasonicThicknessTest: {
//             tested: "",
//             pass: "",
//         },
//         visualShellCondition: "",
//         speedFlags: {
//             available: "",
//             quantityFixEnd: "",
//             quantityFloatEnd: "",
//         },
//         dimensions: {
//             fixEndBore: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     tolerance: "",
//                     withinSpec: "",
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     tolerance: "",
//                     withinSpec: "",
//                 },
//                 backingRing: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     tolerance: "",
//                     withinSpec: "",
//                 },
//                 boreWidth: "",
//                 boreInSpec: ""
//             },
//             floatEndBore: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     tolerance: "",
//                     withinSpec: "",
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     tolerance: "",
//                     withinSpec: "",
//                 },
//                 backingRing: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     tolerance: "",
//                     withinSpec: "",
//                 },
//                 boreWidth: "",
//                 boreInSpec: ""
//             },
//             shellThickness: {
//                 A: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     5: "",
//                     minimum: "",
//                     withinSpec: "",
//                 },
//                 B: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     5: "",
//                     minimum: "",
//                     withinSpec: "",
//                 },
//                 C: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     5: "",
//                     minimum: "",
//                     withinSpec: "",
//                 },
//                 D: {
//                     1: "",
//                     2: "",
//                     3: "",
//                     4: "",
//                     5: "",
//                     minimum: "",
//                     withinSpec: "",
//                 }
//             }
//         },
//         shellCondition: "",
//         shellImages: {
//             imgShellFace: "",
//             imgOverallEndDiscFixEnd: "",
//             imgOverallEndDiscFloatEnd: "",
//             imgBoreDimensionsFixEnd1: "",
//             imgBoreDimensionsFixEnd2: "",
//             imgBoreDimensionsFloatEnd1: "",
//             imgBoreDimensionsFloatEnd2: "",
//             imgShellSeam: "",
//             imgFixEndDiscCircWeld: "",
//             imgFloatEndDiscCircWeld: "",
//             imgFixEndBalanceWeights: "",
//             imgFloatEndBalanceWeights: "",
//         }
//     }

//     pulleyVADetails = {
//         pulleyDetails: {
//             proposedTestTime: "",
//             pulleyType: "",
//             materialNo: "",
//             bearingHousingCenters: "",
//             overallDiameter: "",
//             bearingFixEnd: {
//                 type: "",
//                 number: "",
//                 brand: ""
//             },
//             bearingFloatEnd: {
//                 type: "",
//                 number: "",
//                 brand: ""
//             },
//             greaseType: "",
//             permissibleLoad: "",
//             plummerBlockSealsType: "",
//         },
//         endUserDetails: {
//             customer: "",
//             site: "",
//             customerPO: "",
//             triggerOrRANo: "",
//             prokJobNo: "",
//             testSpeed: "",
//             pulleyMass: "",
//         }
//     }

//     pulleyJobPack = {
//         jobNumber: "",
//         pulleyArrivalDate: "",
//         client: "",
//         strippingDueDate: "",
//         site: "",
//         quoteDueDate: "",
//         pulleyType: "",
//         assemblyDueDate: "",
//         drawingNo: "",
//         materialNo: "",
//         customerPO: ""
//     }

// }


export default interface JobArrivalAlt {
    assetUni: number;
    site: string;
    client: string;
    arrivalDate: Date;
    customerPO: number;
    serialNo: number;
    materialNo: number;
    oemJobNo: number;
    pulleyType: string;
    sealType: string;
    drawingRefCustomer: string;
    lockingAssemblies: string;
    drawingOEM: string;
    lockingAssembliesNm: number;
    housingManufacturer: string;
    lagging: number;
    housingsType: string;
    shellThickness: number;
    bearingDesignation: string;
    pulleyDIA: string;
    bearingOpenSealed: string;
    pulleyFaceWidth: number;
    bearingManufacturer: string;
    shaftOL: string;
    bearingLoadAppliedAtVA: string;
    bearingShaftDIA: string;
    vaRunningTestSpeed: number;
    housingCenters: number;
    greaseType: string;
    mass: number;
    id?: ObjectId
}
// module.exports = JobArrival

export class ProkJob {
    _id?: string
  customerJobInfo = {
    customer:"" ,
    customerSite: "",
    customerPO: "",
    customerMaterialNo: "",
    projectNo: "",
    salesOrderNo: "",
    prokJobNo: ""
  } 
  pulleyArrival = {
    assetUni: "",
    assetType: "",
    arrivalDate : "",
    serialNo: "",
    drawingRef: "",
    workshopArrival: "",
    barcode_tracking: {
      available: "",
      comment: "",
    },
    shellOD: "",
    faceWidth: "",
    lagging: "",
    bearingHousingCenters: "",
    lockingElementSizeType: "",
    bearingHousingType: "",
    coverPlate : {
      available: "",
      comment: "",
    },
    speedFlagsAndBrackets : {
      available: "",
      comment: "",
    },
    coupling : {
      available: "",
      comment: "",
    },
    transportCradle : {
      available: "",
      comment: "",
    },
    generalComments: "",
    arrivalPhotos : {
      "1": "",
      "2": "",
      "3": "",
    }
  }
  scopeOfWork = {
    pulleyMajorComponents : {
      lagging : {
        comment: "",
        action: "",
      },
      shaftMajorDiameterAndLength : {
        comment: "",
        action: "",
      },
      shellBoreDiameterAndDepth : {
        comment: "",
        action: "",
      },
      lockingElementSizeAndType : {
        comment: "",
        action: "",
      },
      coverPlate : {
        comment: "",
        action: "",
      },
      coverPlateScrews: {
        comment: "",
        action: "",
      },
      speedFlagsAndBrackets: {
        comment: "",
        action: "",
      },
      housingAssemblies: {
        comment: "",
        action: "",
      },
      sealsType: {
        comment: "",
        action: "",
      },
      greaseType: {
        comment: "",
        action: "",
      },
      bearingSeries: {
        comment: "",
        action: "",
      },
      bearingAssembly: {
        comment: "",
        action: "",
      },
      couplingAndKeys: {
        comment: "",
        action: "",
      },
      NDTAndMPI: {
        comment: "",
        action: "",
      },
    },
    pulleyMinorComponents : {
      pulleyNameplate : {
        comment: "",
        action: "",
      },
      pulleyCradleNameBoard : {
        comment: "",
        action: "",
      },
      pulleyCradle: {
        comment: "",
        action: "",
      },
      nameplateAndFixedEndTags : {
        comment: "",
        action: "",
      },
      cradleStickers : {
        comment: "",
        action: "",
      },
      shrinkWrap : {
        comment: "",
        action: "",
      },
      clearViewingWindows: {
        comment: "",
        action: "",
      },
      moistureAbsorbent: {
        comment: "",
        action: "",
      },
      cradleChannel: {
        comment: "",
        action: "",
      },
      cradleDrawing: {
        comment: "",
        action: "",
      },
      pulleyCradleNameplate: {
        comment: "",
        action: "",
      },
      pulleyTimber: {
        comment: "",
        action: "",
      }
    }
  }
  refurbCondition = {
    attention: "",
    copyTo: "",
    preparedBy: "",
    dateOfReport: "",
    prokReportNo: "",
    technicians: "",
    inspectionDate: "",
    customerPart: "",
    drawingRef: "",
    specialFeature: "",
    mass: "",
    cradleType: "",
    imgNamePlate: "",
    imgTag1: "",
    imgTag2: "",
    pulleyCondition: {
      shell: {
        condition: "",
        description: "",
        comment: "",
      },
      speedFlags: {
        condition: "",
        description: "",
        comment: "",
      },
      protectiveCoatings: {
        condition: "",
        description: "",
        comment: "",
      },
      lagging: {
        condition: "",
        description: "",
        comment: "",
      },
      shaft: {
        condition: "",
        description: "",
        comment: "",
      },
      couplings: {
        condition: "",
        description: "",
        comment: "",
      },
      fixedEndBearing: {
        condition: "",
        description: "",
        comment: "",
      },
      fixedEndHousing: {
        condition: "",
        description: "",
        comment: "",
      },
      floatEndBearing: {
        condition: "",
        description: "",
        comment: "",
      },
      floatEndHousing: {
        condition: "",
        description: "",
        comment: "",
      },
      fixedEndLockingAssembly: {
        condition: "",
        description: "",
        comment: "",
      },
      floatEndLockingAssembly: {
        condition: "",
        description: "",
        comment: "",
      },
      lockingAssemblyCoverPlate: {
        condition: "",
        description: "",
        comment: "",
      },
      transportCradle: {
        condition: "",
        description: "",
        comment: "",
      },
      conclusion: "",
    },
    pulleyCradle: {
      pulleyCradleType: "",
      ratchetQuantityOverPulley: "",
      stencinlingComplaint: {
        available: "",
        pass: "",
      },
      frameCondition: "",
      surfaceCoating: {
        available: "",
        action: "",
      },
      cradleConditionDetails: {
        condition: "",
        comment: "",
      },
      imgPulleyCradleNameplate: "",
      imgPulleyCradleFromFront: "",
      imgPulleyCradleFromSideL: "",
      imgPulleyCradleFromSideR: "",
    },
    pulleySpeedFlags: {
      speedFlags: {
        available: "",
        pass: "",
      },
      fixEndFlag: {
        quantity: "",
        action: "",
      },
      floatEndFlag: {
        quantity: "",
        action: "",
      },
      imgSpeedFlagFloatEnd: "",
      imgSpeedFlagFixEnd: "",
    },
    protectiveCoatings: {
      endDisc: {
        coated: "",
        coatingColor: "",
      },
      coatingCondition: {
        condition: "",
        comment: "",
      },
      imgFixAEnd: "",
      imgFloatBEnd: "",
    },
    pulleyMeasurements: {
      imgMeasurementDrawing: "",
      dimensions: {
        A: {
          actualMeasurements: "",
          drawingMeasurements: "",
        },
        B: {
          actualMeasurements: "",
          drawingMeasurements: "",
        },
        C: {
          actualMeasurements: "",
          drawingMeasurements: "",
        },
        D: {
          actualMeasurements: "",
          drawingMeasurements: "",
        },
        E: {
          actualMeasurements: "",
          drawingMeasurements: "",
        },
        F: {
          actualMeasurements: "",
          drawingMeasurements: "",
        }
      }
    },
    couplings: {
      couplingsFittedToPulley: "",
      couplingSingleOrDualDrive: "",
      couplingType: "",
      oilInjectionGroovesPresent: "",
      stressReliefGroovesPresent: "",
      signsOfSurfaceDamage: "",
      runoutCheckedAsRecievedCondition: "",
      measurementsOfRunout: "",
      couplingCondition: "",
      imgCouplingDetailsSingleDriveFixEnd: "",
      singleDriveImages: {
        imgBeforeRemoval: "",
        imgAfterRemoval: "",
        imgFace: "",
        imgSide: "",
        imgInternalBores: "",
        imgTopView: "",
      },
      couplingDimensions: {
        boreDimensions: {
          A: {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            toleranceRequired: "",
            journalDiameterWithinToleranceSpec: "",
          },
          B: {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            toleranceRequired: "",
            journalDiameterWithinToleranceSpec: "",
          },
          C: {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            toleranceRequired: "",
            journalDiameterWithinToleranceSpec: "",
          }
        },
        couplingMeasurements: {
          D: "",
          E: "",
          F: "",
          G: "",
          H: "",
        },
        oilInjectionGroovesCount: "",
        journalLength: "",
        journalLengthInSpec: "",
        couplingConditionDetails: {
          condition: "",
          comment: "",
        }
      },
      imgCouplingDetailsDualDrive: "",
      couplingDimensionsFixEnd: {
        boreDimensions: {
          A: {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            toleranceRequired: "",
            journalDiameterWithinToleranceSpec: "",
          },
          B: {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            toleranceRequired: "",
            journalDiameterWithinToleranceSpec: "",
          },
          C: {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            toleranceRequired: "",
            journalDiameterWithinToleranceSpec: "",
          }
        },
        couplingMeasurements: {
          D: "",
          E: "",
          F: "",
          G: "",
          H: "",
        },
        oilInjectionGroovesCount: "",
        journalLength: "",
        journalLengthInSpec: "",
        couplingConditionDetails: {
          condition: "",
          comment: "",
        }
      },
      dualDriveFixEndImages: {
        imgFace: "",
        imgSide: "",
        imgInternalBores: "",
        imgLength: "",
      },
      couplingDimensionsFloatEnd: {
        boreDimensions: {
          A: {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            toleranceRequired: "",
            journalDiameterWithinToleranceSpec: "",
          },
          B: {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            toleranceRequired: "",
            journalDiameterWithinToleranceSpec: "",
          },
          C: {
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            toleranceRequired: "",
            journalDiameterWithinToleranceSpec: "",
          }
        },
        couplingMeasurements: {
          D: "",
          E: "",
          F: "",
          G: "",
          H: "",
        },
        oilInjectionGroovesCount: "",
        journalLength: "",
        journalLengthInSpec: "",
        couplingConditionDetails: {
          condition: "",
          comment: "",
        }
      },
      dualDriveFloatEndImages: {
        imgFace: "",
        imgSide: "",
        imgInternalBores: "",
        imgLength: "",
      }
    },
    bearingAndHousingAssembly: {
      fixEnd: {
        housingDesignation: "",
        housingType: "",
        housingAEndFixEnd: "",
        housingManufacturer: "",
        housingSeriesNo: "",
        housingAEndFixEndDamage: {
          damaged: "",
          comment: "",
        },
        greaseNippleStatus: "",
        greaseStatus: {
          condition: "",
          comment: "",
        },
        sealCondition: {
          condition: "",
          comment: "",
        },
        overallBearingHousingCondition: "",
        sealType: "",
        bearingTypeAEnd: "",
        bearingManufacturer: "",
        bearingNo: "",
        sleeveManufacturer: "",
        sleeveNo: "",
        radialClearance: "",
        sleeveCondition: "",
        bearingAssemblyConditionFixEnd: "",
        observedAndSpecialModsFixEnd: "",
      },
      floatEnd: {
        housingDesignation: "",
        housingBEndFloatEnd: "",
        housingManufacturer: "",
        mountingHoles: "",
        housingSeriesNo: "",
        housingBEndFloatEndDamage: {
          damaged: "",
          comment: "",
        },
        greaseNippleStatus: "",
        greaseStatus: {
          condition: "",
          comment: "",
        },
        sealCondition: {
          condition: "",
          comment: "",
        },
        overallBearingHousingCondition: "",
        sealType: "",
        bearingTypeBEnd: "",
        bearingManufacturer: "",
        bearingNo: "",
        sleeveManufacturer: "",
        sleeveNo: "",
        radialClearance: "",
        sleeveCondition: "",
        bearingAssemblyConditionFloatEnd: "",
        observedAndSpecialModsFloatEnd: "",
      },
      bearingAndHousingAssemblyImages: {
        imgAEnd: "",
        imgBEnd: "",
        imgCoverplateRemovedAEnd: "",
        imgCoverplateRemovedBEnd: "",
        imgAEndTopHousingRemoved: "",
        imgBEndTopHousingRemoved: "",
        imgAEndBearingFitted: "",
        imgBEndBearingFitted: "",
        imgAEndSplitHousingGreased: "",
        imgBEndSplitHousingGreased: "",
        imgAEndHousingCleaned: "",
        imgBEndHousingCleaned: "",
        imgAEndBearingRollersGreased: "",
        imgBEndBearingRollersGreased: "",
        imgAEndBearingOuterRaceway1: "",
        imgAEndBearingOuterRaceway2: "",
        imgBEndBearingOuterRaceway1: "",
        imgBEndBearingOuterRaceway2: "",
        imgAEndSleeve1: "",
        imgAEndSleeve2: "",
        imgBEndSleeve1: "",
        imgBEndSleeve2: "",
        imgAEndBearingRollers: "",
        imgBEndBearingRollers: "",
        imgAEndBearingDamageInner: "",
        imgBEndBearingDamageInner: "",
        imgAEndBearingDamageOuter: "",
        imgBEndBearingDamageOuter: "",
        imgAEndSeal1: "",
        imgAEndSeal2: "",
        imgBEndSeal1: "",
        imgBEndSeal2: "",
      }
    },
    lockingAssembly: {
      lockingAssemblyCoverplate: "",
      thickness: "",
      outsideDiameter: "",
      insideDiameter: "",
      pcdOnBoltHoles: "",
      chordLengthOfBoltHoles: "",
      diameterOfBoreHoles: "",
      coverplateCondition: {
        condition: "",
        comment: "",
      },
      lockingAssemblyTpye: "",
      lockingAssemblyModelSeries: "",
      lockingAssemblyOutsideDiameter: "",
      lockingAssemblyInsideDiameter: "",
      signsOfDamage: {
        fixAEnd: {
          damaged: "",
          action: "",
        },
        floatBEnd: {
          damaged: "",
          action: "",
        }
      },
      lockingElementConditionFixEnd: {
        condition: "",
        comment: "",
      },
      lockingElementConditionFloatEnd: {
        condition: "",
        comment: "",
      },
      lockingAssemblyBoresFixEnd: {
        condition: "",
        comment: "",
      },
      lockingAssemblyBoresFloatEnd: {
        condition: "",
        comment: "",
      },
      lockingAssemblyImages: {
        imgAEndLockingAssemblyBeforeRemoval: "",
        imgBEndLockingAssemblyBeforeRemoval1: "",
        imgBEndLockingAssemblyBeforeRemoval2: "",
        imgAEndLockingAssemblyRemoved1: "",
        imgAEndLockingAssemblyRemoved2: "",
        imgBEndLockingAssemblyRemoved: "",
        imgAEndLockingElement: "",
        imgBEndLockingElement1: "",
        imgBEndLockingElement2: "",
      }
    },
    pulleyShaft: {
      dimensions: {
        shaftLength: {
          actual: "",
          drawing: "",
          commentsInSpec: "",
        },
        shaftDiameterInCenter: {
          actual: "",
          drawing: "",
          commentsInSpec: "",
        },
        internalThreads: {
          actual: "",
          drawing: "",
          commentsInSpec: "",
        }
      },
      shaftKeyway: {
        hasKeyway: "",
        commentsInSpec: "",
      },
      keywayDims: {
        actual: "",
        drawing: "",
        commentsInSpec: "",
      },
      sealAreaConditionFixEnd: {
        comment: "",
        commentsInSpec: "",
      },
      sealAreaConditionFloatEnd: {
        comment: "",
        commentsInSpec: "",
      },
      nonDestructiveTestingCompleted: "",
      ultraSonicTest: "",
      magneticParticleTest: "",
      imgLockingAssemblyDrawing: "",
      lockingAssemblyShaftDimensions: {
        fixEnd: {
          A: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          B: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          pass: "",
          lockingJournalLength: "",
          lockingJournalLengthPass: "",
        },
        floatEnd: {
          A: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          B: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          pass: "",
          lockingJournalLength: "",
          lockingJournalLengthPass: "",
        },
        toleranceRequired: "",
      },
      bearingShaftDimensions: {
        fixEnd: {
          A: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          B: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          pass: "",
          bearingJournalLength: "",
          bearingJournalLengthPass: "",
        },
        floatEnd: {
          A: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          B: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          pass: "",
          bearingJournalLength: "",
          bearingJournalLengthPass: "",
        },
        toleranceRequired: "",
      },
      sealDimensions: {
        fixEnd: {
          A: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          B: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          pass: "",
          sealAreaWidth: "",
          sealAreaWidthPass: "",
        },
        floatEnd: {
          A: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          B: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          pass: "",
          sealAreaWidth: "",
          sealAreaWidthPass: "",
        },
        toleranceRequired: "",
      },
      couplingShaftDimensions: {
        fixEnd: {
          A: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          B: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          pass: "",
          couplingJournalLength: "",
          couplingJournalLengthPass: "",
        },
        floatEnd: {
          A: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          B: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
          },
          pass: "",
          couplingJournalLength: "",
          couplingJournalLengthPass: "",
        },
        toleranceRequired: "",
      },
      pulleyShaftCondtion: "",
      overallShaftDescription: "",
      pulleyShaftImages: {
        imgOverallShaft: "",
        imgLockingJournalFixEnd: "",
        imgLockingJournalFloatEnd: "",
        imgBearingJournalFixEnd: "",
        imgBearingJournalFloatEnd: "",
        imgFixEndLockingJournalWear: "",
        imgFloatEndLockingJournalWear: "",
        imgFixEndBearingJournalWear: "",
        imgFloatEndBearingJournalWear: "",
        imgFixEndCouplingJournal: "",
        imgFloatEndCouplingJournal: "",
        imgFixEndCouplingJournalWear: "",
        imgFloatEndCouplingJournalWear: "",
      }
    },
    pulleyLagging: {
      currentLaggingType: "",
      pattern: "",
      thickness: "",
      signsOfDamage: "",
      laggingConditionDetails: "",
      pulleyLaggingCondition: "",
      pulleyLaggingImages: {
        imgOverallConditionOfLagging: "",
        imgFixEndView: "",
        imgFloatEndView: "",
        imgLaggingWear: "",
        imgLaggingDepthMeasurement: "",
      }
    },
    pulleyShell: {
      faceWidth: "",
      minShellThickness: "",
      minShellThicknessPass: "",
      outsideDiameterOverShell: "",
      outsideDiameterOverShellPass: "",
      shellInSpec: "",
      shellType: "",
      balanceWeightWeldInspection: "",
      balanceWeightWeldInspectionPass: "",
      shellWeldPassCondition: "",
      shellWeldPassConditionPass: "",
      magneticParticleTest: {
        tested: "",
        pass: "",
      },
      ultrasonicWeldTest: {
        tested: "",
        pass: "",
      },
      ultrasonicThicknessTest: {
        tested: "",
        pass: "",
      },
      visualShellCondition: "",
      speedFlags: {
        available: "",
        quantityFixEnd: "",
        quantityFloatEnd: "",
      },
      dimensions: {
        fixEndBore: {
          A: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
            tolerance: "",
            withinSpec: "",
          },
          B: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
            tolerance: "",
            withinSpec: "",
          },
          backingRing: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
            tolerance: "",
            withinSpec: "",
          },
          boreWidth: "",
          boreInSpec: "",
        },
        floatEndBore: {
          A: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
            tolerance: "",
            withinSpec: "",
          },
          B: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
            tolerance: "",
            withinSpec: "",
          },
          backingRing: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
            tolerance: "",
            withinSpec: "",
          },
          boreWidth: "",
          boreInSpec: "",
        },
        shellThickness: {
          A: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
            "5":  "",
            minimum: "",
            withinSpec: "",
          },
          B: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
            "5":  "",
            minimum: "",
            withinSpec: "",
          },
          C: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
            "5":  "",
            minimum: "",
            withinSpec: "",
          },
          D: {
            "1":  "",
            "2":  "",
            "3":  "",
            "4":  "",
            "5":  "",
            minimum: "",
            withinSpec: "",
          }
        }
      },
      shellCondition: "",
      shellImages: {
        imgShellFace: "",
        imgOverallEndDiscFixEnd: "",
        imgOverallEndDiscFloatEnd: "",
        imgBoreDimensionsFixEnd1: "",
        imgBoreDimensionsFixEnd2: "",
        imgBoreDimensionsFloatEnd1: "",
        imgBoreDimensionsFloatEnd2: "",
        imgShellSeam: "",
        imgFixEndDiscCircWeld: "",
        imgFloatEndDiscCircWeld: "",
        imgFixEndBalanceWeights: "",
        imgFloatEndBalanceWeights: "",
      }
    },
    pulleyVADetails: {
      pulleyDetails: {
        proposedTestTime: "",
        materialNo: "",
        bearingHousingCenters: "",
        overallDiameter: "",
        bearingFixEnd: {
          type: "",
          number: "",
          brand: "",
        },
        bearingFloatEnd: {
          type: "",
          number: "",
          brand: "",
        },
        greaseType: "",
        permissibleLoad: "",
        plummerBlockSealsType: "",
      },
      endUserDetails: {
        triggerOrRANo: "",
        testSpeed: "",
        pulleyMass: "",
      }
    },
    pulleyJobPack: {
      jobNumber: "",
      pulleyArrivalDate: "",
      strippingDueDate: "",
      quoteDueDate: "",
      assemblyDueDate: "",
      drawingNo: "",
    }
  }
  criticalAsset= {
    oemJobNo: "",
    sealType: "",
    drawingRefCustomer: "",
    lockingAssemblies: "",
    drawingOEM: "",
    lockingAssembliesNm: "",
    housingManufacturer: "",
    lagging: "",
    housingsType: "",
    shellThickness: "",
    bearingDesignation: "",
    pulleyDIA: "",
    bearingOpenSealed: "",
    pulleyFaceWidth: "",
    bearingManufacturer: "",
    shaftOL: "",
    bearingLoadAppliedAtVA: "",
    bearingShaftDIA: "",
    vaRunningTestSpeed: "",
    housingCenters: "",
    greaseType: "",
    mass: "",
  }

}