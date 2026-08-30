export interface SelectOption {
  value: string;
  label: string;
}

export interface TelescopeExitPupilPlannerUI {
  apertureLabel: string;
  scopeFocalLengthLabel: string;
  eyepieceFocalLengthLabel: string;
  barlowLabel: string;
  apparentFieldLabel: string;
  millimetreUnit: string;
  presetHint: string;
  barlowOptions: SelectOption[];
  apparentFieldOptions: SelectOption[];
  magnificationLabel: string;
  exitPupilLabel: string;
  trueFieldLabel: string;
  focalRatioLabel: string;
  effectiveEyepieceLabel: string;
  magnificationUnit: string;
  exitPupilUnit: string;
  fieldUnit: string;
  focalRatioUnit: string;
  opticalPathLabel: string;
  opticalPathDescription: string;
  pupilTooSmall: string;
  pupilDetail: string;
  pupilWorking: string;
  pupilWide: string;
  pupilTooSmallDetail: string;
  pupilDetailDetail: string;
  pupilWorkingDetail: string;
  pupilWideDetail: string;
  assumptionLabel: string;
  assumptionText: string;
  magnificationHint: string;
  trueFieldHint: string;
  resetLabel: string;
}
