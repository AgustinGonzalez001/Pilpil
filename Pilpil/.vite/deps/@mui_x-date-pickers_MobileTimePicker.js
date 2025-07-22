import {
  require_react_dom
} from "./chunk-MWUQT4FA.js";
import {
  warnOnce
} from "./chunk-AVBJDU3V.js";
import {
  DefaultPropsProvider_default,
  GlobalStyles_default,
  LocalizationProvider,
  MuiPickersAdapterContext,
  _objectWithoutPropertiesLoose,
  alpha,
  capitalize,
  clsx_default,
  composeClasses,
  css,
  deepmerge,
  defaultTheme_default,
  exactProp,
  extendSxProp,
  generateUtilityClass,
  generateUtilityClasses,
  getOverlayAlpha,
  identifier_default,
  isMuiElement,
  keyframes,
  require_prop_types,
  require_react_is,
  resolveProps,
  rootShouldForwardProp_default,
  shouldForwardProp,
  slotShouldForwardProp_default,
  styled_default,
  unstable_createUseMediaQuery,
  unstable_memoTheme,
  useDefaultProps,
  useEnhancedEffect_default,
  useRtl,
  useTheme,
  useThemeProps
} from "./chunk-7L7F6NIM.js";
import {
  _extends
} from "./chunk-HQ6ZTAWL.js";
import {
  require_jsx_runtime
} from "./chunk-J2CBX5S7.js";
import {
  require_react
} from "./chunk-4X6FFAZQ.js";
import {
  __publicField,
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/@mui/x-date-pickers/esm/MobileTimePicker/MobileTimePicker.js
var React135 = __toESM(require_react(), 1);
var import_prop_types71 = __toESM(require_prop_types(), 1);

// node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
var resolveComponentProps_default = resolveComponentProps;

// node_modules/@mui/utils/esm/refType/refType.js
var import_prop_types = __toESM(require_prop_types(), 1);
var refType = import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]);
var refType_default = refType;

// node_modules/@mui/x-date-pickers/esm/internals/utils/views.js
var areViewsEqual = (views, expectedViews) => {
  if (views.length !== expectedViews.length) {
    return false;
  }
  return expectedViews.every((expectedView) => views.includes(expectedView));
};
var applyDefaultViewProps = ({
  openTo,
  defaultOpenTo,
  views,
  defaultViews
}) => {
  const viewsWithDefault = views ?? defaultViews;
  let openToWithDefault;
  if (openTo != null) {
    openToWithDefault = openTo;
  } else if (viewsWithDefault.includes(defaultOpenTo)) {
    openToWithDefault = defaultOpenTo;
  } else if (viewsWithDefault.length > 0) {
    openToWithDefault = viewsWithDefault[0];
  } else {
    throw new Error("MUI X: The `views` prop must contain at least one view.");
  }
  return {
    views: viewsWithDefault,
    openTo: openToWithDefault
  };
};

// node_modules/@mui/x-date-pickers/esm/internals/utils/date-utils.js
var mergeDateAndTime = (utils, dateParam, timeParam) => {
  let mergedDate = dateParam;
  mergedDate = utils.setHours(mergedDate, utils.getHours(timeParam));
  mergedDate = utils.setMinutes(mergedDate, utils.getMinutes(timeParam));
  mergedDate = utils.setSeconds(mergedDate, utils.getSeconds(timeParam));
  mergedDate = utils.setMilliseconds(mergedDate, utils.getMilliseconds(timeParam));
  return mergedDate;
};
var replaceInvalidDateByNull = (utils, value) => !utils.isValid(value) ? null : value;
var areDatesEqual = (utils, a, b) => {
  if (!utils.isValid(a) && a != null && !utils.isValid(b) && b != null) {
    return true;
  }
  return utils.isEqual(a, b);
};
var getMonthsInYear = (utils, year) => {
  const firstMonth = utils.startOfYear(year);
  const months = [firstMonth];
  while (months.length < 12) {
    const prevMonth = months[months.length - 1];
    months.push(utils.addMonths(prevMonth, 1));
  }
  return months;
};
var getTodayDate = (utils, timezone, valueType) => valueType === "date" ? utils.startOfDay(utils.date(void 0, timezone)) : utils.date(void 0, timezone);
var formatMeridiem = (utils, meridiem) => {
  const date = utils.setHours(utils.date(), meridiem === "am" ? 2 : 14);
  return utils.format(date, "meridiem");
};

// node_modules/@mui/x-date-pickers/esm/internals/utils/time-utils.js
var EXPORTED_TIME_VIEWS = ["hours", "minutes", "seconds"];
var TIME_VIEWS = ["hours", "minutes", "seconds", "meridiem"];
var isTimeView = (view) => EXPORTED_TIME_VIEWS.includes(view);
var isInternalTimeView = (view) => TIME_VIEWS.includes(view);
var getMeridiem = (date, utils) => {
  if (!date) {
    return null;
  }
  return utils.getHours(date) >= 12 ? "pm" : "am";
};
var convertValueToMeridiem = (value, meridiem, ampm) => {
  if (ampm) {
    const currentMeridiem = value >= 12 ? "pm" : "am";
    if (currentMeridiem !== meridiem) {
      return meridiem === "am" ? value - 12 : value + 12;
    }
  }
  return value;
};
var convertToMeridiem = (time, meridiem, ampm, utils) => {
  const newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
  return utils.setHours(time, newHoursAmount);
};
var getSecondsInDay = (date, utils) => {
  return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
};
var createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, utils) => (dateLeft, dateRight) => {
  if (disableIgnoringDatePartForTimeValidation) {
    return utils.isAfter(dateLeft, dateRight);
  }
  return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
};
var resolveTimeFormat = (utils, {
  format,
  views,
  ampm
}) => {
  if (format != null) {
    return format;
  }
  const formats = utils.formats;
  if (areViewsEqual(views, ["hours"])) {
    return ampm ? `${formats.hours12h} ${formats.meridiem}` : formats.hours24h;
  }
  if (areViewsEqual(views, ["minutes"])) {
    return formats.minutes;
  }
  if (areViewsEqual(views, ["seconds"])) {
    return formats.seconds;
  }
  if (areViewsEqual(views, ["minutes", "seconds"])) {
    return `${formats.minutes}:${formats.seconds}`;
  }
  if (areViewsEqual(views, ["hours", "minutes", "seconds"])) {
    return ampm ? `${formats.hours12h}:${formats.minutes}:${formats.seconds} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}:${formats.seconds}`;
  }
  return ampm ? `${formats.hours12h}:${formats.minutes} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}`;
};

// node_modules/@mui/x-date-pickers/esm/internals/utils/getDefaultReferenceDate.js
var SECTION_TYPE_GRANULARITY = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
};
var getSectionTypeGranularity = (sections) => Math.max(...sections.map((section) => SECTION_TYPE_GRANULARITY[section.type] ?? 1));
var roundDate = (utils, granularity, date) => {
  if (granularity === SECTION_TYPE_GRANULARITY.year) {
    return utils.startOfYear(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.month) {
    return utils.startOfMonth(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.day) {
    return utils.startOfDay(date);
  }
  let roundedDate = date;
  if (granularity < SECTION_TYPE_GRANULARITY.minutes) {
    roundedDate = utils.setMinutes(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.seconds) {
    roundedDate = utils.setSeconds(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.milliseconds) {
    roundedDate = utils.setMilliseconds(roundedDate, 0);
  }
  return roundedDate;
};
var getDefaultReferenceDate = ({
  props,
  utils,
  granularity,
  timezone,
  getTodayDate: inGetTodayDate
}) => {
  let referenceDate = inGetTodayDate ? inGetTodayDate() : roundDate(utils, granularity, getTodayDate(utils, timezone));
  if (props.minDate != null && utils.isAfterDay(props.minDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.minDate);
  }
  if (props.maxDate != null && utils.isBeforeDay(props.maxDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.maxDate);
  }
  const isAfter = createIsAfterIgnoreDatePart(props.disableIgnoringDatePartForTimeValidation ?? false, utils);
  if (props.minTime != null && isAfter(props.minTime, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.minTime : mergeDateAndTime(utils, referenceDate, props.minTime));
  }
  if (props.maxTime != null && isAfter(referenceDate, props.maxTime)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.maxTime : mergeDateAndTime(utils, referenceDate, props.maxTime));
  }
  return referenceDate;
};

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useField.utils.js
var getDateSectionConfigFromFormatToken = (utils, formatToken) => {
  const config = utils.formatTokenMap[formatToken];
  if (config == null) {
    throw new Error([`MUI X: The token "${formatToken}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join("\n"));
  }
  if (typeof config === "string") {
    return {
      type: config,
      contentType: config === "meridiem" ? "letter" : "digit",
      maxLength: void 0
    };
  }
  return {
    type: config.sectionType,
    contentType: config.contentType,
    maxLength: config.maxLength
  };
};
var getDaysInWeekStr = (utils, format) => {
  const elements = [];
  const now = utils.date(void 0, "default");
  const startDate = utils.startOfWeek(now);
  const endDate = utils.endOfWeek(now);
  let current = startDate;
  while (utils.isBefore(current, endDate)) {
    elements.push(current);
    current = utils.addDays(current, 1);
  }
  return elements.map((weekDay) => utils.formatByString(weekDay, format));
};
var getLetterEditingOptions = (utils, timezone, sectionType, format) => {
  switch (sectionType) {
    case "month": {
      return getMonthsInYear(utils, utils.date(void 0, timezone)).map((month) => utils.formatByString(month, format));
    }
    case "weekDay": {
      return getDaysInWeekStr(utils, format);
    }
    case "meridiem": {
      const now = utils.date(void 0, timezone);
      return [utils.startOfDay(now), utils.endOfDay(now)].map((date) => utils.formatByString(date, format));
    }
    default: {
      return [];
    }
  }
};
var FORMAT_SECONDS_NO_LEADING_ZEROS = "s";
var NON_LOCALIZED_DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var getLocalizedDigits = (utils) => {
  const today = utils.date(void 0);
  const formattedZero = utils.formatByString(utils.setSeconds(today, 0), FORMAT_SECONDS_NO_LEADING_ZEROS);
  if (formattedZero === "0") {
    return NON_LOCALIZED_DIGITS;
  }
  return Array.from({
    length: 10
  }).map((_, index) => utils.formatByString(utils.setSeconds(today, index), FORMAT_SECONDS_NO_LEADING_ZEROS));
};
var removeLocalizedDigits = (valueStr, localizedDigits) => {
  if (localizedDigits[0] === "0") {
    return valueStr;
  }
  const digits = [];
  let currentFormattedDigit = "";
  for (let i = 0; i < valueStr.length; i += 1) {
    currentFormattedDigit += valueStr[i];
    const matchingDigitIndex = localizedDigits.indexOf(currentFormattedDigit);
    if (matchingDigitIndex > -1) {
      digits.push(matchingDigitIndex.toString());
      currentFormattedDigit = "";
    }
  }
  return digits.join("");
};
var applyLocalizedDigits = (valueStr, localizedDigits) => {
  if (localizedDigits[0] === "0") {
    return valueStr;
  }
  return valueStr.split("").map((char) => localizedDigits[Number(char)]).join("");
};
var isStringNumber = (valueStr, localizedDigits) => {
  const nonLocalizedValueStr = removeLocalizedDigits(valueStr, localizedDigits);
  return nonLocalizedValueStr !== " " && !Number.isNaN(Number(nonLocalizedValueStr));
};
var cleanLeadingZeros = (valueStr, size) => {
  return Number(valueStr).toString().padStart(size, "0");
};
var cleanDigitSectionValue = (utils, value, sectionBoundaries, localizedDigits, section) => {
  if (true) {
    if (section.type !== "day" && section.contentType === "digit-with-letter") {
      throw new Error([`MUI X: The token "${section.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join("\n"));
    }
  }
  if (section.type === "day" && section.contentType === "digit-with-letter") {
    const date = utils.setDate(sectionBoundaries.longestMonth, value);
    return utils.formatByString(date, section.format);
  }
  let valueStr = value.toString();
  if (section.hasLeadingZerosInInput) {
    valueStr = cleanLeadingZeros(valueStr, section.maxLength);
  }
  return applyLocalizedDigits(valueStr, localizedDigits);
};
var getSectionVisibleValue = (section, target, localizedDigits) => {
  let value = section.value || section.placeholder;
  const hasLeadingZeros = target === "non-input" ? section.hasLeadingZerosInFormat : section.hasLeadingZerosInInput;
  if (target === "non-input" && section.hasLeadingZerosInInput && !section.hasLeadingZerosInFormat) {
    value = Number(removeLocalizedDigits(value, localizedDigits)).toString();
  }
  const shouldAddInvisibleSpace = ["input-rtl", "input-ltr"].includes(target) && section.contentType === "digit" && !hasLeadingZeros && value.length === 1;
  if (shouldAddInvisibleSpace) {
    value = `${value}‎`;
  }
  if (target === "input-rtl") {
    value = `⁨${value}⁩`;
  }
  return value;
};
var changeSectionValueFormat = (utils, valueStr, currentFormat, newFormat) => {
  if (true) {
    if (getDateSectionConfigFromFormatToken(utils, currentFormat).type === "weekDay") {
      throw new Error("changeSectionValueFormat doesn't support week day formats");
    }
  }
  return utils.formatByString(utils.parse(valueStr, currentFormat), newFormat);
};
var isFourDigitYearFormat = (utils, format) => utils.formatByString(utils.date(void 0, "system"), format).length === 4;
var doesSectionFormatHaveLeadingZeros = (utils, contentType, sectionType, format) => {
  if (contentType !== "digit") {
    return false;
  }
  const now = utils.date(void 0, "default");
  switch (sectionType) {
    // We can't use `changeSectionValueFormat`, because  `utils.parse('1', 'YYYY')` returns `1971` instead of `1`.
    case "year": {
      if (utils.lib === "dayjs" && format === "YY") {
        return true;
      }
      return utils.formatByString(utils.setYear(now, 1), format).startsWith("0");
    }
    case "month": {
      return utils.formatByString(utils.startOfYear(now), format).length > 1;
    }
    case "day": {
      return utils.formatByString(utils.startOfMonth(now), format).length > 1;
    }
    case "weekDay": {
      return utils.formatByString(utils.startOfWeek(now), format).length > 1;
    }
    case "hours": {
      return utils.formatByString(utils.setHours(now, 1), format).length > 1;
    }
    case "minutes": {
      return utils.formatByString(utils.setMinutes(now, 1), format).length > 1;
    }
    case "seconds": {
      return utils.formatByString(utils.setSeconds(now, 1), format).length > 1;
    }
    default: {
      throw new Error("Invalid section type");
    }
  }
};
var getDateFromDateSections = (utils, sections, localizedDigits) => {
  const shouldSkipWeekDays = sections.some((section) => section.type === "day");
  const sectionFormats = [];
  const sectionValues = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const shouldSkip = shouldSkipWeekDays && section.type === "weekDay";
    if (!shouldSkip) {
      sectionFormats.push(section.format);
      sectionValues.push(getSectionVisibleValue(section, "non-input", localizedDigits));
    }
  }
  const formatWithoutSeparator = sectionFormats.join(" ");
  const dateWithoutSeparatorStr = sectionValues.join(" ");
  return utils.parse(dateWithoutSeparatorStr, formatWithoutSeparator);
};
var createDateStrForV7HiddenInputFromSections = (sections) => sections.map((section) => {
  return `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`;
}).join("");
var createDateStrForV6InputFromSections = (sections, localizedDigits, isRtl) => {
  const formattedSections = sections.map((section) => {
    const dateValue = getSectionVisibleValue(section, isRtl ? "input-rtl" : "input-ltr", localizedDigits);
    return `${section.startSeparator}${dateValue}${section.endSeparator}`;
  });
  const dateStr = formattedSections.join("");
  if (!isRtl) {
    return dateStr;
  }
  return `⁦${dateStr}⁩`;
};
var getSectionsBoundaries = (utils, localizedDigits, timezone) => {
  const today = utils.date(void 0, timezone);
  const endOfYear = utils.endOfYear(today);
  const endOfDay = utils.endOfDay(today);
  const {
    maxDaysInMonth,
    longestMonth
  } = getMonthsInYear(utils, today).reduce((acc, month) => {
    const daysInMonth = utils.getDaysInMonth(month);
    if (daysInMonth > acc.maxDaysInMonth) {
      return {
        maxDaysInMonth: daysInMonth,
        longestMonth: month
      };
    }
    return acc;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format
    }) => ({
      minimum: 0,
      maximum: isFourDigitYearFormat(utils, format) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: utils.getMonth(endOfYear) + 1
    }),
    day: ({
      currentDate
    }) => ({
      minimum: 1,
      maximum: utils.isValid(currentDate) ? utils.getDaysInMonth(currentDate) : maxDaysInMonth,
      longestMonth
    }),
    weekDay: ({
      format,
      contentType
    }) => {
      if (contentType === "digit") {
        const daysInWeek = getDaysInWeekStr(utils, format).map(Number);
        return {
          minimum: Math.min(...daysInWeek),
          maximum: Math.max(...daysInWeek)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format
    }) => {
      const lastHourInDay = utils.getHours(endOfDay);
      const hasMeridiem = removeLocalizedDigits(utils.formatByString(utils.endOfDay(today), format), localizedDigits) !== lastHourInDay.toString();
      if (hasMeridiem) {
        return {
          minimum: 1,
          maximum: Number(removeLocalizedDigits(utils.formatByString(utils.startOfDay(today), format), localizedDigits))
        };
      }
      return {
        minimum: 0,
        maximum: lastHourInDay
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: utils.getMinutes(endOfDay)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: utils.getSeconds(endOfDay)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 1
    }),
    empty: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
var warnedOnceInvalidSection = false;
var validateSections = (sections, valueType) => {
  if (true) {
    if (!warnedOnceInvalidSection) {
      const supportedSections = ["empty"];
      if (["date", "date-time"].includes(valueType)) {
        supportedSections.push("weekDay", "day", "month", "year");
      }
      if (["time", "date-time"].includes(valueType)) {
        supportedSections.push("hours", "minutes", "seconds", "meridiem");
      }
      const invalidSection = sections.find((section) => !supportedSections.includes(section.type));
      if (invalidSection) {
        console.warn(`MUI X: The field component you are using is not compatible with the "${invalidSection.type}" date section.`, `The supported date sections are ["${supportedSections.join('", "')}"]\`.`);
        warnedOnceInvalidSection = true;
      }
    }
  }
};
var transferDateSectionValue = (utils, section, dateToTransferFrom, dateToTransferTo) => {
  switch (section.type) {
    case "year": {
      return utils.setYear(dateToTransferTo, utils.getYear(dateToTransferFrom));
    }
    case "month": {
      return utils.setMonth(dateToTransferTo, utils.getMonth(dateToTransferFrom));
    }
    case "weekDay": {
      let dayInWeekStrOfActiveDate = utils.formatByString(dateToTransferFrom, section.format);
      if (section.hasLeadingZerosInInput) {
        dayInWeekStrOfActiveDate = cleanLeadingZeros(dayInWeekStrOfActiveDate, section.maxLength);
      }
      const formattedDaysInWeek = getDaysInWeekStr(utils, section.format);
      const dayInWeekOfActiveDate = formattedDaysInWeek.indexOf(dayInWeekStrOfActiveDate);
      const dayInWeekOfNewSectionValue = formattedDaysInWeek.indexOf(section.value);
      const diff = dayInWeekOfNewSectionValue - dayInWeekOfActiveDate;
      return utils.addDays(dateToTransferFrom, diff);
    }
    case "day": {
      return utils.setDate(dateToTransferTo, utils.getDate(dateToTransferFrom));
    }
    case "meridiem": {
      const isAM = utils.getHours(dateToTransferFrom) < 12;
      const mergedDateHours = utils.getHours(dateToTransferTo);
      if (isAM && mergedDateHours >= 12) {
        return utils.addHours(dateToTransferTo, -12);
      }
      if (!isAM && mergedDateHours < 12) {
        return utils.addHours(dateToTransferTo, 12);
      }
      return dateToTransferTo;
    }
    case "hours": {
      return utils.setHours(dateToTransferTo, utils.getHours(dateToTransferFrom));
    }
    case "minutes": {
      return utils.setMinutes(dateToTransferTo, utils.getMinutes(dateToTransferFrom));
    }
    case "seconds": {
      return utils.setSeconds(dateToTransferTo, utils.getSeconds(dateToTransferFrom));
    }
    default: {
      return dateToTransferTo;
    }
  }
};
var reliableSectionModificationOrder = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8,
  empty: 9
};
var mergeDateIntoReferenceDate = (utils, dateToTransferFrom, sections, referenceDate, shouldLimitToEditedSections) => (
  // cloning sections before sort to avoid mutating it
  [...sections].sort((a, b) => reliableSectionModificationOrder[a.type] - reliableSectionModificationOrder[b.type]).reduce((mergedDate, section) => {
    if (!shouldLimitToEditedSections || section.modified) {
      return transferDateSectionValue(utils, section, dateToTransferFrom, mergedDate);
    }
    return mergedDate;
  }, referenceDate)
);
var isAndroid = () => navigator.userAgent.toLowerCase().includes("android");
var getSectionOrder = (sections, shouldApplyRTL) => {
  const neighbors = {};
  if (!shouldApplyRTL) {
    sections.forEach((_, index) => {
      const leftIndex = index === 0 ? null : index - 1;
      const rightIndex = index === sections.length - 1 ? null : index + 1;
      neighbors[index] = {
        leftIndex,
        rightIndex
      };
    });
    return {
      neighbors,
      startIndex: 0,
      endIndex: sections.length - 1
    };
  }
  const rtl2ltr = {};
  const ltr2rtl = {};
  let groupedSectionsStart = 0;
  let groupedSectionsEnd = 0;
  let RTLIndex = sections.length - 1;
  while (RTLIndex >= 0) {
    groupedSectionsEnd = sections.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      (section, index) => {
        var _a;
        return index >= groupedSectionsStart && ((_a = section.endSeparator) == null ? void 0 : _a.includes(" ")) && // Special case where the spaces were not there in the initial input
        section.endSeparator !== " / ";
      }
    );
    if (groupedSectionsEnd === -1) {
      groupedSectionsEnd = sections.length - 1;
    }
    for (let i = groupedSectionsEnd; i >= groupedSectionsStart; i -= 1) {
      ltr2rtl[i] = RTLIndex;
      rtl2ltr[RTLIndex] = i;
      RTLIndex -= 1;
    }
    groupedSectionsStart = groupedSectionsEnd + 1;
  }
  sections.forEach((_, index) => {
    const rtlIndex = ltr2rtl[index];
    const leftIndex = rtlIndex === 0 ? null : rtl2ltr[rtlIndex - 1];
    const rightIndex = rtlIndex === sections.length - 1 ? null : rtl2ltr[rtlIndex + 1];
    neighbors[index] = {
      leftIndex,
      rightIndex
    };
  });
  return {
    neighbors,
    startIndex: rtl2ltr[0],
    endIndex: rtl2ltr[sections.length - 1]
  };
};
var parseSelectedSections = (selectedSections, sections) => {
  if (selectedSections == null) {
    return null;
  }
  if (selectedSections === "all") {
    return "all";
  }
  if (typeof selectedSections === "string") {
    const index = sections.findIndex((section) => section.type === selectedSections);
    return index === -1 ? null : index;
  }
  return selectedSections;
};

// node_modules/@mui/x-date-pickers/esm/internals/utils/valueManagers.js
var _excluded = ["value", "referenceDate"];
var singleItemValueManager = {
  emptyValue: null,
  getTodayValue: getTodayDate,
  getInitialReferenceValue: (_ref) => {
    let {
      value,
      referenceDate
    } = _ref, params = _objectWithoutPropertiesLoose(_ref, _excluded);
    if (params.utils.isValid(value)) {
      return value;
    }
    if (referenceDate != null) {
      return referenceDate;
    }
    return getDefaultReferenceDate(params);
  },
  cleanValue: replaceInvalidDateByNull,
  areValuesEqual: areDatesEqual,
  isSameError: (a, b) => a === b,
  hasError: (error) => error != null,
  defaultErrorState: null,
  getTimezone: (utils, value) => utils.isValid(value) ? utils.getTimezone(value) : null,
  setTimezone: (utils, timezone, value) => value == null ? null : utils.setTimezone(value, timezone)
};
var singleItemFieldValueManager = {
  updateReferenceValue: (utils, value, prevReferenceValue) => utils.isValid(value) ? value : prevReferenceValue,
  getSectionsFromValue: (date, getSectionsFromDate) => getSectionsFromDate(date),
  getV7HiddenInputValueFromSections: createDateStrForV7HiddenInputFromSections,
  getV6InputValueFromSections: createDateStrForV6InputFromSections,
  parseValueStr: (valueStr, referenceValue, parseDate) => parseDate(valueStr.trim(), referenceValue),
  getDateFromSection: (value) => value,
  getDateSectionsFromValue: (sections) => sections,
  updateDateInValue: (value, activeSection, activeDate) => activeDate,
  clearDateSections: (sections) => sections.map((section) => _extends({}, section, {
    value: ""
  }))
};

// node_modules/@mui/x-date-pickers/esm/TimeField/TimeField.js
var React90 = __toESM(require_react(), 1);
var import_prop_types51 = __toESM(require_prop_types(), 1);

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldV7TextField.js
var React23 = __toESM(require_react(), 1);

// node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var React = __toESM(require_react(), 1);
function useForkRef(...refs) {
  const cleanupRef = React.useRef(void 0);
  const refEffect = React.useCallback((instance) => {
    const cleanups = refs.map((ref) => {
      if (ref == null) {
        return null;
      }
      if (typeof ref === "function") {
        const refCallback = ref;
        const refCleanup = refCallback(instance);
        return typeof refCleanup === "function" ? refCleanup : () => {
          refCallback(null);
        };
      }
      ref.current = instance;
      return () => {
        ref.current = null;
      };
    });
    return () => {
      cleanups.forEach((refCleanup) => refCleanup == null ? void 0 : refCleanup());
    };
  }, refs);
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = void 0;
      }
      if (value != null) {
        cleanupRef.current = refEffect(value);
      }
    };
  }, refs);
}

// node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var React2 = __toESM(require_react(), 1);
function useEventCallback(fn) {
  const ref = React2.useRef(fn);
  useEnhancedEffect_default(() => {
    ref.current = fn;
  });
  return React2.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
var useEventCallback_default = useEventCallback;

// node_modules/@mui/x-date-pickers/esm/internals/utils/utils.js
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every((item) => array.indexOf(item) !== -1);
  }
  return array.indexOf(itemOrItems) !== -1;
}
var getActiveElement = (root = document) => {
  const activeEl = root.activeElement;
  if (!activeEl) {
    return null;
  }
  if (activeEl.shadowRoot) {
    return getActiveElement(activeEl.shadowRoot);
  }
  return activeEl;
};
var getFocusedListItemIndex = (listElement) => {
  const children2 = Array.from(listElement.children);
  return children2.indexOf(getActiveElement(document));
};

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useUtils.js
var React3 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/locales/utils/getPickersLocalization.js
var getPickersLocalization = (pickersTranslations) => {
  return {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: _extends({}, pickersTranslations)
        }
      }
    }
  };
};

// node_modules/@mui/x-date-pickers/esm/locales/enUS.js
var enUSPickers = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "Open previous view",
  openNextView: "Open next view",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange labels
  start: "Start",
  end: "End",
  startDate: "Start date",
  startTime: "Start time",
  endDate: "End date",
  endTime: "End time",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  nextStepButtonLabel: "Next",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  timeRangePickerToolbarTitle: "Select time range",
  // Clock labels
  clockLabelText: (view, formattedTime) => `Select ${view}. ${!formattedTime ? "No time selected" : `Selected time is ${formattedTime}`}`,
  hoursClockNumberText: (hours) => `${hours} hours`,
  minutesClockNumberText: (minutes) => `${minutes} minutes`,
  secondsClockNumberText: (seconds) => `${seconds} seconds`,
  // Digital clock labels
  selectViewText: (view) => `Select ${view}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Week ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open Picker labels
  openDatePickerDialogue: (formattedDate) => formattedDate ? `Choose date, selected date is ${formattedDate}` : "Choose date",
  openTimePickerDialogue: (formattedTime) => formattedTime ? `Choose time, selected time is ${formattedTime}` : "Choose time",
  openRangePickerDialogue: (formattedRange) => formattedRange ? `Choose range, selected range is ${formattedRange}` : "Choose range",
  fieldClearLabel: "Clear",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Year",
  month: "Month",
  day: "Day",
  weekDay: "Week day",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  meridiem: "Meridiem",
  // Common
  empty: "Empty"
};
var DEFAULT_LOCALE = enUSPickers;
var enUS = getPickersLocalization(enUSPickers);

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useUtils.js
var useLocalizationContext = () => {
  const localization = React3.useContext(MuiPickersAdapterContext);
  if (localization === null) {
    throw new Error(["MUI X: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join("\n"));
  }
  if (localization.utils === null) {
    throw new Error(["MUI X: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join("\n"));
  }
  const localeText = React3.useMemo(() => _extends({}, DEFAULT_LOCALE, localization.localeText), [localization.localeText]);
  return React3.useMemo(() => _extends({}, localization, {
    localeText
  }), [localization, localeText]);
};
var useUtils = () => useLocalizationContext().utils;
var useNow = (timezone) => {
  const utils = useUtils();
  const now = React3.useRef(void 0);
  if (now.current === void 0) {
    now.current = utils.date(void 0, timezone);
  }
  return now.current;
};

// node_modules/@mui/x-date-pickers/esm/hooks/usePickerTranslations.js
var usePickerTranslations = () => useLocalizationContext().localeText;

// node_modules/@mui/x-date-pickers/esm/hooks/useSplitFieldProps.js
var React4 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/validation/extractValidationProps.js
var DATE_VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"];
var TIME_VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"];
var DATE_TIME_VALIDATION_PROP_NAMES = ["minDateTime", "maxDateTime"];
var VALIDATION_PROP_NAMES = [...DATE_VALIDATION_PROP_NAMES, ...TIME_VALIDATION_PROP_NAMES, ...DATE_TIME_VALIDATION_PROP_NAMES];
var extractValidationProps = (props) => VALIDATION_PROP_NAMES.reduce((extractedProps, propName) => {
  if (props.hasOwnProperty(propName)) {
    extractedProps[propName] = props[propName];
  }
  return extractedProps;
}, {});

// node_modules/@mui/x-date-pickers/esm/hooks/useSplitFieldProps.js
var SHARED_FIELD_INTERNAL_PROP_NAMES = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef", "unstableStartFieldRef", "unstableEndFieldRef", "enableAccessibleFieldDOMStructure", "disabled", "readOnly", "dateSeparator", "autoFocus", "focused"];
var useSplitFieldProps = (props, valueType) => {
  return React4.useMemo(() => {
    const forwardedProps = _extends({}, props);
    const internalProps = {};
    const extractProp = (propName) => {
      if (forwardedProps.hasOwnProperty(propName)) {
        internalProps[propName] = forwardedProps[propName];
        delete forwardedProps[propName];
      }
    };
    SHARED_FIELD_INTERNAL_PROP_NAMES.forEach(extractProp);
    if (valueType === "date") {
      DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
    } else if (valueType === "time") {
      TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    } else if (valueType === "date-time") {
      DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
      TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
      DATE_TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    }
    return {
      forwardedProps,
      internalProps
    };
  }, [props, valueType]);
};

// node_modules/@mui/x-date-pickers/esm/hooks/useParsedFormat.js
var React7 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/buildSectionsFromFormat.js
var expandFormat = ({
  utils,
  format
}) => {
  let formatExpansionOverflow = 10;
  let prevFormat = format;
  let nextFormat = utils.expandFormat(format);
  while (nextFormat !== prevFormat) {
    prevFormat = nextFormat;
    nextFormat = utils.expandFormat(prevFormat);
    formatExpansionOverflow -= 1;
    if (formatExpansionOverflow < 0) {
      throw new Error("MUI X: The format expansion seems to be in an infinite loop. Please open an issue with the format passed to the component.");
    }
  }
  return nextFormat;
};
var getEscapedPartsFromFormat = ({
  utils,
  expandedFormat
}) => {
  const escapedParts = [];
  const {
    start: startChar,
    end: endChar
  } = utils.escapedCharacters;
  const regExp = new RegExp(`(\\${startChar}[^\\${endChar}]*\\${endChar})+`, "g");
  let match = null;
  while (match = regExp.exec(expandedFormat)) {
    escapedParts.push({
      start: match.index,
      end: regExp.lastIndex - 1
    });
  }
  return escapedParts;
};
var getSectionPlaceholder = (utils, localeText, sectionConfig, sectionFormat) => {
  switch (sectionConfig.type) {
    case "year": {
      return localeText.fieldYearPlaceholder({
        digitAmount: utils.formatByString(utils.date(void 0, "default"), sectionFormat).length,
        format: sectionFormat
      });
    }
    case "month": {
      return localeText.fieldMonthPlaceholder({
        contentType: sectionConfig.contentType,
        format: sectionFormat
      });
    }
    case "day": {
      return localeText.fieldDayPlaceholder({
        format: sectionFormat
      });
    }
    case "weekDay": {
      return localeText.fieldWeekDayPlaceholder({
        contentType: sectionConfig.contentType,
        format: sectionFormat
      });
    }
    case "hours": {
      return localeText.fieldHoursPlaceholder({
        format: sectionFormat
      });
    }
    case "minutes": {
      return localeText.fieldMinutesPlaceholder({
        format: sectionFormat
      });
    }
    case "seconds": {
      return localeText.fieldSecondsPlaceholder({
        format: sectionFormat
      });
    }
    case "meridiem": {
      return localeText.fieldMeridiemPlaceholder({
        format: sectionFormat
      });
    }
    default: {
      return sectionFormat;
    }
  }
};
var createSection = ({
  utils,
  date,
  shouldRespectLeadingZeros,
  localeText,
  localizedDigits,
  now,
  token,
  startSeparator
}) => {
  if (token === "") {
    throw new Error("MUI X: Should not call `commitToken` with an empty token");
  }
  const sectionConfig = getDateSectionConfigFromFormatToken(utils, token);
  const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(utils, sectionConfig.contentType, sectionConfig.type, token);
  const hasLeadingZerosInInput = shouldRespectLeadingZeros ? hasLeadingZerosInFormat : sectionConfig.contentType === "digit";
  const isValidDate = utils.isValid(date);
  let sectionValue = isValidDate ? utils.formatByString(date, token) : "";
  let maxLength = null;
  if (hasLeadingZerosInInput) {
    if (hasLeadingZerosInFormat) {
      maxLength = sectionValue === "" ? utils.formatByString(now, token).length : sectionValue.length;
    } else {
      if (sectionConfig.maxLength == null) {
        throw new Error(`MUI X: The token ${token} should have a 'maxLength' property on it's adapter`);
      }
      maxLength = sectionConfig.maxLength;
      if (isValidDate) {
        sectionValue = applyLocalizedDigits(cleanLeadingZeros(removeLocalizedDigits(sectionValue, localizedDigits), maxLength), localizedDigits);
      }
    }
  }
  return _extends({}, sectionConfig, {
    format: token,
    maxLength,
    value: sectionValue,
    placeholder: getSectionPlaceholder(utils, localeText, sectionConfig, token),
    hasLeadingZerosInFormat,
    hasLeadingZerosInInput,
    startSeparator,
    endSeparator: "",
    modified: false
  });
};
var buildSections = (parameters) => {
  var _a;
  const {
    utils,
    expandedFormat,
    escapedParts
  } = parameters;
  const now = utils.date(void 0);
  const sections = [];
  let startSeparator = "";
  const validTokens = Object.keys(utils.formatTokenMap).sort((a, b) => b.length - a.length);
  const regExpFirstWordInFormat = /^([a-zA-Z]+)/;
  const regExpWordOnlyComposedOfTokens = new RegExp(`^(${validTokens.join("|")})*$`);
  const regExpFirstTokenInWord = new RegExp(`^(${validTokens.join("|")})`);
  const getEscapedPartOfCurrentChar = (i2) => escapedParts.find((escapeIndex) => escapeIndex.start <= i2 && escapeIndex.end >= i2);
  let i = 0;
  while (i < expandedFormat.length) {
    const escapedPartOfCurrentChar = getEscapedPartOfCurrentChar(i);
    const isEscapedChar = escapedPartOfCurrentChar != null;
    const firstWordInFormat = (_a = regExpFirstWordInFormat.exec(expandedFormat.slice(i))) == null ? void 0 : _a[1];
    if (!isEscapedChar && firstWordInFormat != null && regExpWordOnlyComposedOfTokens.test(firstWordInFormat)) {
      let word = firstWordInFormat;
      while (word.length > 0) {
        const firstWord = regExpFirstTokenInWord.exec(word)[1];
        word = word.slice(firstWord.length);
        sections.push(createSection(_extends({}, parameters, {
          now,
          token: firstWord,
          startSeparator
        })));
        startSeparator = "";
      }
      i += firstWordInFormat.length;
    } else {
      const char = expandedFormat[i];
      const isEscapeBoundary = isEscapedChar && (escapedPartOfCurrentChar == null ? void 0 : escapedPartOfCurrentChar.start) === i || (escapedPartOfCurrentChar == null ? void 0 : escapedPartOfCurrentChar.end) === i;
      if (!isEscapeBoundary) {
        if (sections.length === 0) {
          startSeparator += char;
        } else {
          sections[sections.length - 1].endSeparator += char;
          sections[sections.length - 1].isEndFormatSeparator = true;
        }
      }
      i += 1;
    }
  }
  if (sections.length === 0 && startSeparator.length > 0) {
    sections.push({
      type: "empty",
      contentType: "letter",
      maxLength: null,
      format: "",
      value: "",
      placeholder: "",
      hasLeadingZerosInFormat: false,
      hasLeadingZerosInInput: false,
      startSeparator,
      endSeparator: "",
      modified: false
    });
  }
  return sections;
};
var postProcessSections = ({
  isRtl,
  formatDensity,
  sections
}) => {
  return sections.map((section) => {
    const cleanSeparator = (separator) => {
      let cleanedSeparator = separator;
      if (isRtl && cleanedSeparator !== null && cleanedSeparator.includes(" ")) {
        cleanedSeparator = `⁩${cleanedSeparator}⁦`;
      }
      if (formatDensity === "spacious" && ["/", ".", "-"].includes(cleanedSeparator)) {
        cleanedSeparator = ` ${cleanedSeparator} `;
      }
      return cleanedSeparator;
    };
    section.startSeparator = cleanSeparator(section.startSeparator);
    section.endSeparator = cleanSeparator(section.endSeparator);
    return section;
  });
};
var buildSectionsFromFormat = (parameters) => {
  let expandedFormat = expandFormat(parameters);
  if (parameters.isRtl && parameters.enableAccessibleFieldDOMStructure) {
    expandedFormat = expandedFormat.split(" ").reverse().join(" ");
  }
  const escapedParts = getEscapedPartsFromFormat(_extends({}, parameters, {
    expandedFormat
  }));
  const sections = buildSections(_extends({}, parameters, {
    expandedFormat,
    escapedParts
  }));
  return postProcessSections(_extends({}, parameters, {
    sections
  }));
};

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useNullablePickerContext.js
var React6 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/hooks/usePickerContext.js
var React5 = __toESM(require_react(), 1);
var PickerContext = React5.createContext(null);
if (true) PickerContext.displayName = "PickerContext";
var usePickerContext = () => {
  const value = React5.useContext(PickerContext);
  if (value == null) {
    throw new Error("MUI X: The `usePickerContext` hook can only be called inside the context of a Picker component");
  }
  return value;
};

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useNullablePickerContext.js
var useNullablePickerContext = () => React6.useContext(PickerContext);

// node_modules/@mui/x-date-pickers/esm/hooks/usePickerActionsContext.js
var React11 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/internals/components/PickerProvider.js
var React10 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/hooks/useIsValidValue.js
var React8 = __toESM(require_react(), 1);
var IsValidValueContext = React8.createContext(() => true);
if (true) IsValidValueContext.displayName = "IsValidValueContext";
function useIsValidValue() {
  return React8.useContext(IsValidValueContext);
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useNullableFieldPrivateContext.js
var React9 = __toESM(require_react(), 1);
var PickerFieldPrivateContext = React9.createContext(null);
if (true) PickerFieldPrivateContext.displayName = "PickerFieldPrivateContext";
function useNullableFieldPrivateContext() {
  return React9.useContext(PickerFieldPrivateContext);
}

// node_modules/@mui/x-date-pickers/esm/internals/components/PickerProvider.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var PickerActionsContext = React10.createContext(null);
if (true) PickerActionsContext.displayName = "PickerActionsContext";
var PickerPrivateContext = React10.createContext({
  ownerState: {
    isPickerDisabled: false,
    isPickerReadOnly: false,
    isPickerValueEmpty: false,
    isPickerOpen: false,
    pickerVariant: "desktop",
    pickerOrientation: "portrait"
  },
  rootRefObject: {
    current: null
  },
  labelId: void 0,
  dismissViews: () => {
  },
  hasUIView: true,
  getCurrentViewMode: () => "UI",
  triggerElement: null,
  viewContainerRole: null,
  defaultActionBarActions: [],
  onPopperExited: void 0
});
if (true) PickerPrivateContext.displayName = "PickerPrivateContext";
function PickerProvider(props) {
  const {
    contextValue,
    actionsContextValue,
    privateContextValue,
    fieldPrivateContextValue,
    isValidContextValue,
    localeText,
    children: children2
  } = props;
  return (0, import_jsx_runtime.jsx)(PickerContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime.jsx)(PickerActionsContext.Provider, {
      value: actionsContextValue,
      children: (0, import_jsx_runtime.jsx)(PickerPrivateContext.Provider, {
        value: privateContextValue,
        children: (0, import_jsx_runtime.jsx)(PickerFieldPrivateContext.Provider, {
          value: fieldPrivateContextValue,
          children: (0, import_jsx_runtime.jsx)(IsValidValueContext.Provider, {
            value: isValidContextValue,
            children: (0, import_jsx_runtime.jsx)(LocalizationProvider, {
              localeText,
              children: children2
            })
          })
        })
      })
    })
  });
}

// node_modules/@mui/x-date-pickers/esm/hooks/usePickerActionsContext.js
var usePickerActionsContext = () => {
  const value = React11.useContext(PickerActionsContext);
  if (value == null) {
    throw new Error(["MUI X: The `usePickerActionsContext` can only be called in fields that are used as a slot of a Picker component"].join("\n"));
  }
  return value;
};

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldCharacterEditing.js
var isQueryResponseWithoutValue = (response) => response.saveQuery != null;
var useFieldCharacterEditing = ({
  stateResponse: {
    // States and derived states
    localizedDigits,
    sectionsValueBoundaries,
    state,
    timezone,
    // Methods to update the states
    setCharacterQuery,
    setTempAndroidValueStr,
    updateSectionValue
  }
}) => {
  const utils = useUtils();
  const applyQuery = ({
    keyPressed,
    sectionIndex
  }, getFirstSectionValueMatchingWithQuery, isValidQueryValue) => {
    const cleanKeyPressed = keyPressed.toLowerCase();
    const activeSection = state.sections[sectionIndex];
    if (state.characterQuery != null && (!isValidQueryValue || isValidQueryValue(state.characterQuery.value)) && state.characterQuery.sectionIndex === sectionIndex) {
      const concatenatedQueryValue = `${state.characterQuery.value}${cleanKeyPressed}`;
      const queryResponse2 = getFirstSectionValueMatchingWithQuery(concatenatedQueryValue, activeSection);
      if (!isQueryResponseWithoutValue(queryResponse2)) {
        setCharacterQuery({
          sectionIndex,
          value: concatenatedQueryValue,
          sectionType: activeSection.type
        });
        return queryResponse2;
      }
    }
    const queryResponse = getFirstSectionValueMatchingWithQuery(cleanKeyPressed, activeSection);
    if (isQueryResponseWithoutValue(queryResponse) && !queryResponse.saveQuery) {
      setCharacterQuery(null);
      return null;
    }
    setCharacterQuery({
      sectionIndex,
      value: cleanKeyPressed,
      sectionType: activeSection.type
    });
    if (isQueryResponseWithoutValue(queryResponse)) {
      return null;
    }
    return queryResponse;
  };
  const applyLetterEditing = (params) => {
    const findMatchingOptions = (format, options, queryValue) => {
      const matchingValues = options.filter((option) => option.toLowerCase().startsWith(queryValue));
      if (matchingValues.length === 0) {
        return {
          saveQuery: false
        };
      }
      return {
        sectionValue: matchingValues[0],
        shouldGoToNextSection: matchingValues.length === 1
      };
    };
    const testQueryOnFormatAndFallbackFormat = (queryValue, activeSection, fallbackFormat, formatFallbackValue) => {
      const getOptions = (format) => getLetterEditingOptions(utils, timezone, activeSection.type, format);
      if (activeSection.contentType === "letter") {
        return findMatchingOptions(activeSection.format, getOptions(activeSection.format), queryValue);
      }
      if (fallbackFormat && formatFallbackValue != null && getDateSectionConfigFromFormatToken(utils, fallbackFormat).contentType === "letter") {
        const fallbackOptions = getOptions(fallbackFormat);
        const response = findMatchingOptions(fallbackFormat, fallbackOptions, queryValue);
        if (isQueryResponseWithoutValue(response)) {
          return {
            saveQuery: false
          };
        }
        return _extends({}, response, {
          sectionValue: formatFallbackValue(response.sectionValue, fallbackOptions)
        });
      }
      return {
        saveQuery: false
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      switch (activeSection.type) {
        case "month": {
          const formatFallbackValue = (fallbackValue) => changeSectionValueFormat(utils, fallbackValue, utils.formats.month, activeSection.format);
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.month, formatFallbackValue);
        }
        case "weekDay": {
          const formatFallbackValue = (fallbackValue, fallbackOptions) => fallbackOptions.indexOf(fallbackValue).toString();
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.weekday, formatFallbackValue);
        }
        case "meridiem": {
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection);
        }
        default: {
          return {
            saveQuery: false
          };
        }
      }
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery);
  };
  const applyNumericEditing = (params) => {
    const getNewSectionValue = ({
      queryValue,
      skipIfBelowMinimum,
      section
    }) => {
      const cleanQueryValue = removeLocalizedDigits(queryValue, localizedDigits);
      const queryValueNumber = Number(cleanQueryValue);
      const sectionBoundaries = sectionsValueBoundaries[section.type]({
        currentDate: null,
        format: section.format,
        contentType: section.contentType
      });
      if (queryValueNumber > sectionBoundaries.maximum) {
        return {
          saveQuery: false
        };
      }
      if (skipIfBelowMinimum && queryValueNumber < sectionBoundaries.minimum) {
        return {
          saveQuery: true
        };
      }
      const shouldGoToNextSection = queryValueNumber * 10 > sectionBoundaries.maximum || cleanQueryValue.length === sectionBoundaries.maximum.toString().length;
      const newSectionValue = cleanDigitSectionValue(utils, queryValueNumber, sectionBoundaries, localizedDigits, section);
      return {
        sectionValue: newSectionValue,
        shouldGoToNextSection
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      if (activeSection.contentType === "digit" || activeSection.contentType === "digit-with-letter") {
        return getNewSectionValue({
          queryValue,
          skipIfBelowMinimum: false,
          section: activeSection
        });
      }
      if (activeSection.type === "month") {
        const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(utils, "digit", "month", "MM");
        const response = getNewSectionValue({
          queryValue,
          skipIfBelowMinimum: true,
          section: {
            type: activeSection.type,
            format: "MM",
            hasLeadingZerosInFormat,
            hasLeadingZerosInInput: true,
            contentType: "digit",
            maxLength: 2
          }
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = changeSectionValueFormat(utils, response.sectionValue, "MM", activeSection.format);
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      if (activeSection.type === "weekDay") {
        const response = getNewSectionValue({
          queryValue,
          skipIfBelowMinimum: true,
          section: activeSection
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = getDaysInWeekStr(utils, activeSection.format)[Number(response.sectionValue) - 1];
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      return {
        saveQuery: false
      };
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery, (queryValue) => isStringNumber(queryValue, localizedDigits));
  };
  return useEventCallback_default((params) => {
    const section = state.sections[params.sectionIndex];
    const isNumericEditing = isStringNumber(params.keyPressed, localizedDigits);
    const response = isNumericEditing ? applyNumericEditing(_extends({}, params, {
      keyPressed: applyLocalizedDigits(params.keyPressed, localizedDigits)
    })) : applyLetterEditing(params);
    if (response == null) {
      setTempAndroidValueStr(null);
      return;
    }
    updateSectionValue({
      section,
      newSectionValue: response.sectionValue,
      shouldGoToNextSection: response.shouldGoToNextSection
    });
  });
};

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldState.js
var React17 = __toESM(require_react(), 1);

// node_modules/@mui/utils/esm/useControlled/useControlled.js
var React12 = __toESM(require_react(), 1);
function useControlled(props) {
  const {
    controlled,
    default: defaultProp,
    name,
    state = "value"
  } = props;
  const {
    current: isControlled
  } = React12.useRef(controlled !== void 0);
  const [valueState, setValue] = React12.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (true) {
    React12.useEffect(() => {
      if (isControlled !== (controlled !== void 0)) {
        console.error([`MUI: A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React12.useRef(defaultProp);
    React12.useEffect(() => {
      if (!isControlled && !Object.is(defaultValue, defaultProp)) {
        console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  const setValueIfUncontrolled = React12.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

// node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js
var React13 = __toESM(require_react(), 1);
var UNINITIALIZED = {};
function useLazyRef(init, initArg) {
  const ref = React13.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

// node_modules/@mui/utils/esm/useOnMount/useOnMount.js
var React14 = __toESM(require_react(), 1);
var EMPTY = [];
function useOnMount(fn) {
  React14.useEffect(fn, EMPTY);
}

// node_modules/@mui/utils/esm/useTimeout/useTimeout.js
var Timeout = class _Timeout {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      if (this.currentId !== null) {
        clearTimeout(this.currentId);
        this.currentId = null;
      }
    });
    __publicField(this, "disposeEffect", () => {
      return this.clear;
    });
  }
  static create() {
    return new _Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
};
function useTimeout() {
  const timeout2 = useLazyRef(Timeout.create).current;
  useOnMount(timeout2.disposeEffect);
  return timeout2;
}

// node_modules/@mui/x-date-pickers/esm/validation/validateDate.js
var validateDate = ({
  props,
  value,
  timezone,
  adapter
}) => {
  if (value === null) {
    return null;
  }
  const {
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    disablePast,
    disableFuture,
    minDate,
    maxDate
  } = props;
  const now = adapter.utils.date(void 0, timezone);
  switch (true) {
    case !adapter.utils.isValid(value):
      return "invalidDate";
    case Boolean(shouldDisableDate && shouldDisableDate(value)):
      return "shouldDisableDate";
    case Boolean(shouldDisableMonth && shouldDisableMonth(value)):
      return "shouldDisableMonth";
    case Boolean(shouldDisableYear && shouldDisableYear(value)):
      return "shouldDisableYear";
    case Boolean(disableFuture && adapter.utils.isAfterDay(value, now)):
      return "disableFuture";
    case Boolean(disablePast && adapter.utils.isBeforeDay(value, now)):
      return "disablePast";
    case Boolean(minDate && adapter.utils.isBeforeDay(value, minDate)):
      return "minDate";
    case Boolean(maxDate && adapter.utils.isAfterDay(value, maxDate)):
      return "maxDate";
    default:
      return null;
  }
};
validateDate.valueManager = singleItemValueManager;

// node_modules/@mui/x-date-pickers/esm/validation/validateTime.js
var validateTime = ({
  adapter,
  value,
  timezone,
  props
}) => {
  if (value === null) {
    return null;
  }
  const {
    minTime,
    maxTime,
    minutesStep,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation = false,
    disablePast,
    disableFuture
  } = props;
  const now = adapter.utils.date(void 0, timezone);
  const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter.utils);
  switch (true) {
    case !adapter.utils.isValid(value):
      return "invalidDate";
    case Boolean(minTime && isAfter(minTime, value)):
      return "minTime";
    case Boolean(maxTime && isAfter(value, maxTime)):
      return "maxTime";
    case Boolean(disableFuture && adapter.utils.isAfter(value, now)):
      return "disableFuture";
    case Boolean(disablePast && adapter.utils.isBefore(value, now)):
      return "disablePast";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "hours")):
      return "shouldDisableTime-hours";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "minutes")):
      return "shouldDisableTime-minutes";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "seconds")):
      return "shouldDisableTime-seconds";
    case Boolean(minutesStep && adapter.utils.getMinutes(value) % minutesStep !== 0):
      return "minutesStep";
    default:
      return null;
  }
};
validateTime.valueManager = singleItemValueManager;

// node_modules/@mui/x-date-pickers/esm/validation/validateDateTime.js
var validateDateTime = ({
  adapter,
  value,
  timezone,
  props
}) => {
  const dateValidationResult = validateDate({
    adapter,
    value,
    timezone,
    props
  });
  if (dateValidationResult !== null) {
    return dateValidationResult;
  }
  return validateTime({
    adapter,
    value,
    timezone,
    props
  });
};
validateDateTime.valueManager = singleItemValueManager;

// node_modules/@mui/x-date-pickers/esm/validation/useValidation.js
var React15 = __toESM(require_react(), 1);
function useValidation(options) {
  const {
    props,
    validator: validator2,
    value,
    timezone,
    onError
  } = options;
  const adapter = useLocalizationContext();
  const previousValidationErrorRef = React15.useRef(validator2.valueManager.defaultErrorState);
  const validationError = validator2({
    adapter,
    value,
    timezone,
    props
  });
  const hasValidationError = validator2.valueManager.hasError(validationError);
  React15.useEffect(() => {
    if (onError && !validator2.valueManager.isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }
    previousValidationErrorRef.current = validationError;
  }, [validator2, onError, validationError, value]);
  const getValidationErrorForNewValue = useEventCallback_default((newValue) => {
    return validator2({
      adapter,
      value: newValue,
      timezone,
      props
    });
  });
  return {
    validationError,
    hasValidationError,
    getValidationErrorForNewValue
  };
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useControlledValue.js
var React16 = __toESM(require_react(), 1);
var useControlledValue = ({
  name,
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  referenceDate,
  onChange: onChangeProp,
  valueManager
}) => {
  const utils = useUtils();
  const [valueWithInputTimezone, setValue] = useControlled({
    name,
    state: "value",
    controlled: valueProp,
    default: defaultValue ?? valueManager.emptyValue
  });
  const inputTimezone = React16.useMemo(() => valueManager.getTimezone(utils, valueWithInputTimezone), [utils, valueManager, valueWithInputTimezone]);
  const setInputTimezone = useEventCallback_default((newValue) => {
    if (inputTimezone == null) {
      return newValue;
    }
    return valueManager.setTimezone(utils, inputTimezone, newValue);
  });
  const timezoneToRender = React16.useMemo(() => {
    if (timezoneProp) {
      return timezoneProp;
    }
    if (inputTimezone) {
      return inputTimezone;
    }
    if (referenceDate) {
      return utils.getTimezone(referenceDate);
    }
    return "default";
  }, [timezoneProp, inputTimezone, referenceDate, utils]);
  const valueWithTimezoneToRender = React16.useMemo(() => valueManager.setTimezone(utils, timezoneToRender, valueWithInputTimezone), [valueManager, utils, timezoneToRender, valueWithInputTimezone]);
  const handleValueChange = useEventCallback_default((newValue, ...otherParams) => {
    const newValueWithInputTimezone = setInputTimezone(newValue);
    setValue(newValueWithInputTimezone);
    onChangeProp == null ? void 0 : onChangeProp(newValueWithInputTimezone, ...otherParams);
  });
  return {
    value: valueWithTimezoneToRender,
    handleValueChange,
    timezone: timezoneToRender
  };
};

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldState.js
var QUERY_LIFE_DURATION_MS = 5e3;
var useFieldState = (parameters) => {
  var _a;
  const utils = useUtils();
  const translations = usePickerTranslations();
  const adapter = useLocalizationContext();
  const isRtl = useRtl();
  const {
    manager: {
      validator: validator2,
      valueType,
      internal_valueManager: valueManager,
      internal_fieldValueManager: fieldValueManager
    },
    internalPropsWithDefaults,
    internalPropsWithDefaults: {
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      onChange,
      format,
      formatDensity = "dense",
      selectedSections: selectedSectionsProp,
      onSelectedSectionsChange,
      shouldRespectLeadingZeros = false,
      timezone: timezoneProp,
      enableAccessibleFieldDOMStructure = true
    },
    forwardedProps: {
      error: errorProp
    }
  } = parameters;
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: "a field component",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager
  });
  const valueRef = React17.useRef(value);
  React17.useEffect(() => {
    valueRef.current = value;
  }, [value]);
  const {
    hasValidationError
  } = useValidation({
    props: internalPropsWithDefaults,
    validator: validator2,
    timezone,
    value,
    onError: internalPropsWithDefaults.onError
  });
  const error = React17.useMemo(() => {
    if (errorProp !== void 0) {
      return errorProp;
    }
    return hasValidationError;
  }, [hasValidationError, errorProp]);
  const localizedDigits = React17.useMemo(() => getLocalizedDigits(utils), [utils]);
  const sectionsValueBoundaries = React17.useMemo(() => getSectionsBoundaries(utils, localizedDigits, timezone), [utils, localizedDigits, timezone]);
  const getSectionsFromValue = React17.useCallback((valueToAnalyze) => fieldValueManager.getSectionsFromValue(valueToAnalyze, (date) => buildSectionsFromFormat({
    utils,
    localeText: translations,
    localizedDigits,
    format,
    date,
    formatDensity,
    shouldRespectLeadingZeros,
    enableAccessibleFieldDOMStructure,
    isRtl
  })), [fieldValueManager, format, translations, localizedDigits, isRtl, shouldRespectLeadingZeros, utils, formatDensity, enableAccessibleFieldDOMStructure]);
  const [state, setState] = React17.useState(() => {
    const sections = getSectionsFromValue(value);
    validateSections(sections, valueType);
    const stateWithoutReferenceDate = {
      sections,
      lastExternalValue: value,
      lastSectionsDependencies: {
        format,
        isRtl,
        locale: utils.locale
      },
      tempValueStrAndroid: null,
      characterQuery: null
    };
    const granularity = getSectionTypeGranularity(sections);
    const referenceValue = valueManager.getInitialReferenceValue({
      referenceDate: referenceDateProp,
      value,
      utils,
      props: internalPropsWithDefaults,
      granularity,
      timezone
    });
    return _extends({}, stateWithoutReferenceDate, {
      referenceValue
    });
  });
  const [selectedSections, innerSetSelectedSections] = useControlled({
    controlled: selectedSectionsProp,
    default: null,
    name: "useField",
    state: "selectedSections"
  });
  const setSelectedSections = (newSelectedSections) => {
    innerSetSelectedSections(newSelectedSections);
    onSelectedSectionsChange == null ? void 0 : onSelectedSectionsChange(newSelectedSections);
  };
  const parsedSelectedSections = React17.useMemo(() => parseSelectedSections(selectedSections, state.sections), [selectedSections, state.sections]);
  const activeSectionIndex = parsedSelectedSections === "all" ? 0 : parsedSelectedSections;
  const sectionOrder = React17.useMemo(() => getSectionOrder(state.sections, isRtl && !enableAccessibleFieldDOMStructure), [state.sections, isRtl, enableAccessibleFieldDOMStructure]);
  const areAllSectionsEmpty = React17.useMemo(() => state.sections.every((section) => section.value === ""), [state.sections]);
  const publishValue = (newValue) => {
    const context = {
      validationError: validator2({
        adapter,
        value: newValue,
        timezone,
        props: internalPropsWithDefaults
      })
    };
    handleValueChange(newValue, context);
  };
  const setSectionValue = (sectionIndex, newSectionValue) => {
    const newSections = [...state.sections];
    newSections[sectionIndex] = _extends({}, newSections[sectionIndex], {
      value: newSectionValue,
      modified: true
    });
    return newSections;
  };
  const sectionToUpdateOnNextInvalidDateRef = React17.useRef(null);
  const updateSectionValueOnNextInvalidDateTimeout = useTimeout();
  const setSectionUpdateToApplyOnNextInvalidDate = (newSectionValue) => {
    if (activeSectionIndex == null) {
      return;
    }
    sectionToUpdateOnNextInvalidDateRef.current = {
      sectionIndex: activeSectionIndex,
      value: newSectionValue
    };
    updateSectionValueOnNextInvalidDateTimeout.start(0, () => {
      sectionToUpdateOnNextInvalidDateRef.current = null;
    });
  };
  const clearValue = () => {
    if (valueManager.areValuesEqual(utils, value, valueManager.emptyValue)) {
      setState((prevState) => _extends({}, prevState, {
        sections: prevState.sections.map((section) => _extends({}, section, {
          value: ""
        })),
        tempValueStrAndroid: null,
        characterQuery: null
      }));
    } else {
      setState((prevState) => _extends({}, prevState, {
        characterQuery: null
      }));
      publishValue(valueManager.emptyValue);
    }
  };
  const clearActiveSection = () => {
    if (activeSectionIndex == null) {
      return;
    }
    const activeSection = state.sections[activeSectionIndex];
    if (activeSection.value === "") {
      return;
    }
    setSectionUpdateToApplyOnNextInvalidDate("");
    if (fieldValueManager.getDateFromSection(value, activeSection) === null) {
      setState((prevState) => _extends({}, prevState, {
        sections: setSectionValue(activeSectionIndex, ""),
        tempValueStrAndroid: null,
        characterQuery: null
      }));
    } else {
      setState((prevState) => _extends({}, prevState, {
        characterQuery: null
      }));
      publishValue(fieldValueManager.updateDateInValue(value, activeSection, null));
    }
  };
  const updateValueFromValueStr = (valueStr) => {
    const parseDateStr = (dateStr, referenceDate) => {
      const date = utils.parse(dateStr, format);
      if (!utils.isValid(date)) {
        return null;
      }
      const sections = buildSectionsFromFormat({
        utils,
        localeText: translations,
        localizedDigits,
        format,
        date,
        formatDensity,
        shouldRespectLeadingZeros,
        enableAccessibleFieldDOMStructure,
        isRtl
      });
      return mergeDateIntoReferenceDate(utils, date, sections, referenceDate, false);
    };
    const newValue = fieldValueManager.parseValueStr(valueStr, state.referenceValue, parseDateStr);
    publishValue(newValue);
  };
  const cleanActiveDateSectionsIfValueNullTimeout = useTimeout();
  const updateSectionValue = ({
    section,
    newSectionValue,
    shouldGoToNextSection
  }) => {
    updateSectionValueOnNextInvalidDateTimeout.clear();
    cleanActiveDateSectionsIfValueNullTimeout.clear();
    const activeDate = fieldValueManager.getDateFromSection(value, section);
    if (shouldGoToNextSection && activeSectionIndex < state.sections.length - 1) {
      setSelectedSections(activeSectionIndex + 1);
    }
    const newSections = setSectionValue(activeSectionIndex, newSectionValue);
    const newActiveDateSections = fieldValueManager.getDateSectionsFromValue(newSections, section);
    const newActiveDate = getDateFromDateSections(utils, newActiveDateSections, localizedDigits);
    if (utils.isValid(newActiveDate)) {
      const mergedDate = mergeDateIntoReferenceDate(utils, newActiveDate, newActiveDateSections, fieldValueManager.getDateFromSection(state.referenceValue, section), true);
      if (activeDate == null) {
        cleanActiveDateSectionsIfValueNullTimeout.start(0, () => {
          if (valueRef.current === value) {
            setState((prevState) => _extends({}, prevState, {
              sections: fieldValueManager.clearDateSections(state.sections, section),
              tempValueStrAndroid: null
            }));
          }
        });
      }
      return publishValue(fieldValueManager.updateDateInValue(value, section, mergedDate));
    }
    if (newActiveDateSections.every((sectionBis) => sectionBis.value !== "") && (activeDate == null || utils.isValid(activeDate))) {
      setSectionUpdateToApplyOnNextInvalidDate(newSectionValue);
      return publishValue(fieldValueManager.updateDateInValue(value, section, newActiveDate));
    }
    if (activeDate != null) {
      setSectionUpdateToApplyOnNextInvalidDate(newSectionValue);
      return publishValue(fieldValueManager.updateDateInValue(value, section, null));
    }
    return setState((prevState) => _extends({}, prevState, {
      sections: newSections,
      tempValueStrAndroid: null
    }));
  };
  const setTempAndroidValueStr = (tempValueStrAndroid) => setState((prevState) => _extends({}, prevState, {
    tempValueStrAndroid
  }));
  const setCharacterQuery = useEventCallback_default((newCharacterQuery) => {
    setState((prevState) => _extends({}, prevState, {
      characterQuery: newCharacterQuery
    }));
  });
  if (value !== state.lastExternalValue) {
    let sections;
    if (sectionToUpdateOnNextInvalidDateRef.current != null && !utils.isValid(fieldValueManager.getDateFromSection(value, state.sections[sectionToUpdateOnNextInvalidDateRef.current.sectionIndex]))) {
      sections = setSectionValue(sectionToUpdateOnNextInvalidDateRef.current.sectionIndex, sectionToUpdateOnNextInvalidDateRef.current.value);
    } else {
      sections = getSectionsFromValue(value);
    }
    setState((prevState) => _extends({}, prevState, {
      lastExternalValue: value,
      sections,
      sectionsDependencies: {
        format,
        isRtl,
        locale: utils.locale
      },
      referenceValue: fieldValueManager.updateReferenceValue(utils, value, prevState.referenceValue),
      tempValueStrAndroid: null
    }));
  }
  if (isRtl !== state.lastSectionsDependencies.isRtl || format !== state.lastSectionsDependencies.format || utils.locale !== state.lastSectionsDependencies.locale) {
    const sections = getSectionsFromValue(value);
    validateSections(sections, valueType);
    setState((prevState) => _extends({}, prevState, {
      lastSectionsDependencies: {
        format,
        isRtl,
        locale: utils.locale
      },
      sections,
      tempValueStrAndroid: null,
      characterQuery: null
    }));
  }
  if (state.characterQuery != null && !error && activeSectionIndex == null) {
    setCharacterQuery(null);
  }
  if (state.characterQuery != null && ((_a = state.sections[state.characterQuery.sectionIndex]) == null ? void 0 : _a.type) !== state.characterQuery.sectionType) {
    setCharacterQuery(null);
  }
  React17.useEffect(() => {
    if (sectionToUpdateOnNextInvalidDateRef.current != null) {
      sectionToUpdateOnNextInvalidDateRef.current = null;
    }
  });
  const cleanCharacterQueryTimeout = useTimeout();
  React17.useEffect(() => {
    if (state.characterQuery != null) {
      cleanCharacterQueryTimeout.start(QUERY_LIFE_DURATION_MS, () => setCharacterQuery(null));
    }
    return () => {
    };
  }, [state.characterQuery, setCharacterQuery, cleanCharacterQueryTimeout]);
  React17.useEffect(() => {
    if (state.tempValueStrAndroid != null && activeSectionIndex != null) {
      clearActiveSection();
    }
  }, [state.sections]);
  return {
    // States and derived states
    activeSectionIndex,
    areAllSectionsEmpty,
    error,
    localizedDigits,
    parsedSelectedSections,
    sectionOrder,
    sectionsValueBoundaries,
    state,
    timezone,
    value,
    // Methods to update the states
    clearValue,
    clearActiveSection,
    setCharacterQuery,
    setSelectedSections,
    setTempAndroidValueStr,
    updateSectionValue,
    updateValueFromValueStr,
    // Utilities methods
    getSectionsFromValue
  };
};

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldInternalPropsWithDefaults.js
var React18 = __toESM(require_react(), 1);
function useFieldInternalPropsWithDefaults(parameters) {
  const {
    manager: {
      internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToFieldInternalProps
    },
    internalProps,
    skipContextFieldRefAssignment
  } = parameters;
  const pickerContext = useNullablePickerContext();
  const fieldPrivateContext = useNullableFieldPrivateContext();
  const handleFieldRef = useForkRef(internalProps.unstableFieldRef, skipContextFieldRefAssignment ? null : fieldPrivateContext == null ? void 0 : fieldPrivateContext.fieldRef);
  const setValue = pickerContext == null ? void 0 : pickerContext.setValue;
  const handleChangeFromPicker = React18.useCallback((newValue, ctx) => {
    return setValue == null ? void 0 : setValue(newValue, {
      validationError: ctx.validationError,
      shouldClose: false
    });
  }, [setValue]);
  const internalPropsWithDefaultsFromContext = React18.useMemo(() => {
    if (fieldPrivateContext != null && pickerContext != null) {
      return _extends({
        value: pickerContext.value,
        onChange: handleChangeFromPicker,
        timezone: pickerContext.timezone,
        disabled: pickerContext.disabled,
        readOnly: pickerContext.readOnly,
        autoFocus: pickerContext.autoFocus && !pickerContext.open,
        focused: pickerContext.open ? true : void 0,
        format: pickerContext.fieldFormat,
        formatDensity: fieldPrivateContext.formatDensity,
        enableAccessibleFieldDOMStructure: fieldPrivateContext.enableAccessibleFieldDOMStructure,
        selectedSections: fieldPrivateContext.selectedSections,
        onSelectedSectionsChange: fieldPrivateContext.onSelectedSectionsChange,
        unstableFieldRef: handleFieldRef
      }, internalProps);
    }
    return internalProps;
  }, [pickerContext, fieldPrivateContext, internalProps, handleChangeFromPicker, handleFieldRef]);
  return useApplyDefaultValuesToFieldInternalProps(internalPropsWithDefaultsFromContext);
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/syncSelectionToDOM.js
function syncSelectionToDOM(parameters) {
  const {
    focused,
    domGetters,
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      state
    }
  } = parameters;
  if (!domGetters.isReady()) {
    return;
  }
  const selection = document.getSelection();
  if (!selection) {
    return;
  }
  if (parsedSelectedSections == null) {
    if (selection.rangeCount > 0 && domGetters.getRoot().contains(selection.getRangeAt(0).startContainer)) {
      selection.removeAllRanges();
    }
    if (focused) {
      domGetters.getRoot().blur();
    }
    return;
  }
  if (!domGetters.getRoot().contains(getActiveElement(document))) {
    return;
  }
  const range = new window.Range();
  let target;
  if (parsedSelectedSections === "all") {
    target = domGetters.getRoot();
  } else {
    const section = state.sections[parsedSelectedSections];
    if (section.type === "empty") {
      target = domGetters.getSectionContainer(parsedSelectedSections);
    } else {
      target = domGetters.getSectionContent(parsedSelectedSections);
    }
  }
  range.selectNodeContents(target);
  target.focus();
  selection.removeAllRanges();
  selection.addRange(range);
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldRootHandleKeyDown.js
function useFieldRootHandleKeyDown(parameters) {
  const utils = useUtils();
  const {
    manager: {
      internal_fieldValueManager: fieldValueManager
    },
    internalPropsWithDefaults: {
      minutesStep,
      disabled,
      readOnly
    },
    stateResponse: {
      // States and derived states
      state,
      value,
      activeSectionIndex,
      parsedSelectedSections,
      sectionsValueBoundaries,
      localizedDigits,
      timezone,
      sectionOrder,
      // Methods to update the states
      clearValue,
      clearActiveSection,
      setSelectedSections,
      updateSectionValue
    }
  } = parameters;
  return useEventCallback_default((event) => {
    if (disabled) {
      return;
    }
    switch (true) {
      // Select all
      case ((event.ctrlKey || event.metaKey) && String.fromCharCode(event.keyCode) === "A" && !event.shiftKey && !event.altKey): {
        event.preventDefault();
        setSelectedSections("all");
        break;
      }
      // Move selection to next section
      case event.key === "ArrowRight": {
        event.preventDefault();
        if (parsedSelectedSections == null) {
          setSelectedSections(sectionOrder.startIndex);
        } else if (parsedSelectedSections === "all") {
          setSelectedSections(sectionOrder.endIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].rightIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      // Move selection to previous section
      case event.key === "ArrowLeft": {
        event.preventDefault();
        if (parsedSelectedSections == null) {
          setSelectedSections(sectionOrder.endIndex);
        } else if (parsedSelectedSections === "all") {
          setSelectedSections(sectionOrder.startIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].leftIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      // Reset the value of the selected section
      case event.key === "Delete": {
        event.preventDefault();
        if (readOnly) {
          break;
        }
        if (parsedSelectedSections == null || parsedSelectedSections === "all") {
          clearValue();
        } else {
          clearActiveSection();
        }
        break;
      }
      // Increment / decrement the selected section value
      case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(event.key): {
        event.preventDefault();
        if (readOnly || activeSectionIndex == null) {
          break;
        }
        if (parsedSelectedSections === "all") {
          setSelectedSections(activeSectionIndex);
        }
        const activeSection = state.sections[activeSectionIndex];
        const newSectionValue = adjustSectionValue(utils, timezone, activeSection, event.key, sectionsValueBoundaries, localizedDigits, fieldValueManager.getDateFromSection(value, activeSection), {
          minutesStep
        });
        updateSectionValue({
          section: activeSection,
          newSectionValue,
          shouldGoToNextSection: false
        });
        break;
      }
    }
  });
}
function getDeltaFromKeyCode(keyCode) {
  switch (keyCode) {
    case "ArrowUp":
      return 1;
    case "ArrowDown":
      return -1;
    case "PageUp":
      return 5;
    case "PageDown":
      return -5;
    default:
      return 0;
  }
}
function adjustSectionValue(utils, timezone, section, keyCode, sectionsValueBoundaries, localizedDigits, activeDate, stepsAttributes) {
  const delta = getDeltaFromKeyCode(keyCode);
  const isStart = keyCode === "Home";
  const isEnd = keyCode === "End";
  const shouldSetAbsolute = section.value === "" || isStart || isEnd;
  const adjustDigitSection = () => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: activeDate,
      format: section.format,
      contentType: section.contentType
    });
    const getCleanValue = (value) => cleanDigitSectionValue(utils, value, sectionBoundaries, localizedDigits, section);
    const step = section.type === "minutes" && (stepsAttributes == null ? void 0 : stepsAttributes.minutesStep) ? stepsAttributes.minutesStep : 1;
    let newSectionValueNumber;
    if (shouldSetAbsolute) {
      if (section.type === "year" && !isEnd && !isStart) {
        return utils.formatByString(utils.date(void 0, timezone), section.format);
      }
      if (delta > 0 || isStart) {
        newSectionValueNumber = sectionBoundaries.minimum;
      } else {
        newSectionValueNumber = sectionBoundaries.maximum;
      }
    } else {
      const currentSectionValue = parseInt(removeLocalizedDigits(section.value, localizedDigits), 10);
      newSectionValueNumber = currentSectionValue + delta * step;
    }
    if (newSectionValueNumber % step !== 0) {
      if (delta < 0 || isStart) {
        newSectionValueNumber += step - (step + newSectionValueNumber) % step;
      }
      if (delta > 0 || isEnd) {
        newSectionValueNumber -= newSectionValueNumber % step;
      }
    }
    if (newSectionValueNumber > sectionBoundaries.maximum) {
      return getCleanValue(sectionBoundaries.minimum + (newSectionValueNumber - sectionBoundaries.maximum - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    if (newSectionValueNumber < sectionBoundaries.minimum) {
      return getCleanValue(sectionBoundaries.maximum - (sectionBoundaries.minimum - newSectionValueNumber - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    return getCleanValue(newSectionValueNumber);
  };
  const adjustLetterSection = () => {
    const options = getLetterEditingOptions(utils, timezone, section.type, section.format);
    if (options.length === 0) {
      return section.value;
    }
    if (shouldSetAbsolute) {
      if (delta > 0 || isStart) {
        return options[0];
      }
      return options[options.length - 1];
    }
    const currentOptionIndex = options.indexOf(section.value);
    const newOptionIndex = (currentOptionIndex + delta) % options.length;
    const clampedIndex = (newOptionIndex + options.length) % options.length;
    return options[clampedIndex];
  };
  if (section.contentType === "digit" || section.contentType === "digit-with-letter") {
    return adjustDigitSection();
  }
  return adjustLetterSection();
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldRootProps.js
function useFieldRootProps(parameters) {
  const {
    manager: manager2,
    focused,
    setFocused,
    domGetters,
    stateResponse,
    applyCharacterEditing,
    internalPropsWithDefaults,
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      sectionOrder,
      state,
      // Methods to update the states
      clearValue,
      setCharacterQuery,
      setSelectedSections,
      updateValueFromValueStr
    },
    internalPropsWithDefaults: {
      disabled = false,
      readOnly = false
    }
  } = parameters;
  const handleKeyDown = useFieldRootHandleKeyDown({
    manager: manager2,
    internalPropsWithDefaults,
    stateResponse
  });
  const containerClickTimeout = useTimeout();
  const handleClick = useEventCallback_default((event) => {
    if (disabled || !domGetters.isReady()) {
      return;
    }
    setFocused(true);
    if (parsedSelectedSections === "all") {
      containerClickTimeout.start(0, () => {
        const cursorPosition = document.getSelection().getRangeAt(0).startOffset;
        if (cursorPosition === 0) {
          setSelectedSections(sectionOrder.startIndex);
          return;
        }
        let sectionIndex = 0;
        let cursorOnStartOfSection = 0;
        while (cursorOnStartOfSection < cursorPosition && sectionIndex < state.sections.length) {
          const section = state.sections[sectionIndex];
          sectionIndex += 1;
          cursorOnStartOfSection += `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`.length;
        }
        setSelectedSections(sectionIndex - 1);
      });
    } else if (!focused) {
      setFocused(true);
      setSelectedSections(sectionOrder.startIndex);
    } else {
      const hasClickedOnASection = domGetters.getRoot().contains(event.target);
      if (!hasClickedOnASection) {
        setSelectedSections(sectionOrder.startIndex);
      }
    }
  });
  const handleInput = useEventCallback_default((event) => {
    if (!domGetters.isReady() || parsedSelectedSections !== "all") {
      return;
    }
    const target = event.target;
    const keyPressed = target.textContent ?? "";
    domGetters.getRoot().innerHTML = state.sections.map((section) => `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`).join("");
    syncSelectionToDOM({
      focused,
      domGetters,
      stateResponse
    });
    if (keyPressed.length === 0 || keyPressed.charCodeAt(0) === 10) {
      clearValue();
      setSelectedSections("all");
    } else if (keyPressed.length > 1) {
      updateValueFromValueStr(keyPressed);
    } else {
      if (parsedSelectedSections === "all") {
        setSelectedSections(0);
      }
      applyCharacterEditing({
        keyPressed,
        sectionIndex: 0
      });
    }
  });
  const handlePaste = useEventCallback_default((event) => {
    if (readOnly || parsedSelectedSections !== "all") {
      event.preventDefault();
      return;
    }
    const pastedValue = event.clipboardData.getData("text");
    event.preventDefault();
    setCharacterQuery(null);
    updateValueFromValueStr(pastedValue);
  });
  const handleFocus = useEventCallback_default(() => {
    if (focused || disabled || !domGetters.isReady()) {
      return;
    }
    const activeElement = getActiveElement(document);
    setFocused(true);
    const isFocusInsideASection = domGetters.getSectionIndexFromDOMElement(activeElement) != null;
    if (!isFocusInsideASection) {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const handleBlur = useEventCallback_default(() => {
    setTimeout(() => {
      if (!domGetters.isReady()) {
        return;
      }
      const activeElement = getActiveElement(document);
      const shouldBlur = !domGetters.getRoot().contains(activeElement);
      if (shouldBlur) {
        setFocused(false);
        setSelectedSections(null);
      }
    });
  });
  return {
    // Event handlers
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onClick: handleClick,
    onPaste: handlePaste,
    onInput: handleInput,
    // Other
    contentEditable: parsedSelectedSections === "all",
    tabIndex: parsedSelectedSections === 0 ? -1 : 0
    // TODO: Try to set to undefined when there is a section selected.
  };
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldHiddenInputProps.js
var React19 = __toESM(require_react(), 1);
function useFieldHiddenInputProps(parameters) {
  const {
    manager: {
      internal_fieldValueManager: fieldValueManager
    },
    stateResponse: {
      // States and derived states
      areAllSectionsEmpty,
      state,
      // Methods to update the states
      updateValueFromValueStr
    }
  } = parameters;
  const handleChange = useEventCallback_default((event) => {
    updateValueFromValueStr(event.target.value);
  });
  const valueStr = React19.useMemo(() => areAllSectionsEmpty ? "" : fieldValueManager.getV7HiddenInputValueFromSections(state.sections), [areAllSectionsEmpty, state.sections, fieldValueManager]);
  return {
    value: valueStr,
    onChange: handleChange
  };
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldSectionContainerProps.js
var React20 = __toESM(require_react(), 1);
function useFieldSectionContainerProps(parameters) {
  const {
    stateResponse: {
      // Methods to update the states
      setSelectedSections
    },
    internalPropsWithDefaults: {
      disabled = false
    }
  } = parameters;
  const createHandleClick = React20.useCallback((sectionIndex) => (event) => {
    if (disabled || event.isDefaultPrevented()) {
      return;
    }
    setSelectedSections(sectionIndex);
  }, [disabled, setSelectedSections]);
  return React20.useCallback((sectionIndex) => ({
    "data-sectionindex": sectionIndex,
    onClick: createHandleClick(sectionIndex)
  }), [createHandleClick]);
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldSectionContentProps.js
var React22 = __toESM(require_react(), 1);

// node_modules/@mui/utils/esm/useId/useId.js
var React21 = __toESM(require_react(), 1);
var globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React21.useState(idOverride);
  const id = idOverride || defaultId;
  React21.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}
var safeReact = {
  ...React21
};
var maybeReactUseId = safeReact.useId;
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }
  return useGlobalId(idOverride);
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldSectionContentProps.js
function useFieldSectionContentProps(parameters) {
  const utils = useUtils();
  const translations = usePickerTranslations();
  const id = useId();
  const {
    focused,
    domGetters,
    stateResponse,
    applyCharacterEditing,
    manager: {
      internal_fieldValueManager: fieldValueManager
    },
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      sectionsValueBoundaries,
      state,
      value,
      // Methods to update the states
      clearActiveSection,
      setCharacterQuery,
      setSelectedSections,
      updateSectionValue,
      updateValueFromValueStr
    },
    internalPropsWithDefaults: {
      disabled = false,
      readOnly = false
    }
  } = parameters;
  const isContainerEditable = parsedSelectedSections === "all";
  const isEditable = !isContainerEditable && !disabled && !readOnly;
  const revertDOMSectionChange = useEventCallback_default((sectionIndex) => {
    if (!domGetters.isReady()) {
      return;
    }
    const section = state.sections[sectionIndex];
    domGetters.getSectionContent(sectionIndex).innerHTML = section.value || section.placeholder;
    syncSelectionToDOM({
      focused,
      domGetters,
      stateResponse
    });
  });
  const handleInput = useEventCallback_default((event) => {
    if (!domGetters.isReady()) {
      return;
    }
    const target = event.target;
    const keyPressed = target.textContent ?? "";
    const sectionIndex = domGetters.getSectionIndexFromDOMElement(target);
    const section = state.sections[sectionIndex];
    if (readOnly) {
      revertDOMSectionChange(sectionIndex);
      return;
    }
    if (keyPressed.length === 0) {
      if (section.value === "") {
        revertDOMSectionChange(sectionIndex);
        return;
      }
      const inputType = event.nativeEvent.inputType;
      if (inputType === "insertParagraph" || inputType === "insertLineBreak") {
        revertDOMSectionChange(sectionIndex);
        return;
      }
      revertDOMSectionChange(sectionIndex);
      clearActiveSection();
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex
    });
    revertDOMSectionChange(sectionIndex);
  });
  const handleMouseUp = useEventCallback_default((event) => {
    event.preventDefault();
  });
  const handlePaste = useEventCallback_default((event) => {
    event.preventDefault();
    if (readOnly || disabled || typeof parsedSelectedSections !== "number") {
      return;
    }
    const activeSection = state.sections[parsedSelectedSections];
    const pastedValue = event.clipboardData.getData("text");
    const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
    const digitsOnly = /^[0-9]+$/.test(pastedValue);
    const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
    const isValidPastedValue = activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly || activeSection.contentType === "digit-with-letter" && digitsAndLetterOnly;
    if (isValidPastedValue) {
      setCharacterQuery(null);
      updateSectionValue({
        section: activeSection,
        newSectionValue: pastedValue,
        shouldGoToNextSection: true
      });
    } else if (!lettersOnly && !digitsOnly) {
      setCharacterQuery(null);
      updateValueFromValueStr(pastedValue);
    }
  });
  const handleDragOver = useEventCallback_default((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
  });
  const createFocusHandler = React22.useCallback((sectionIndex) => () => {
    if (disabled) {
      return;
    }
    setSelectedSections(sectionIndex);
  }, [disabled, setSelectedSections]);
  return React22.useCallback((section, sectionIndex) => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: fieldValueManager.getDateFromSection(value, section),
      contentType: section.contentType,
      format: section.format
    });
    return {
      // Event handlers
      onInput: handleInput,
      onPaste: handlePaste,
      onMouseUp: handleMouseUp,
      onDragOver: handleDragOver,
      onFocus: createFocusHandler(sectionIndex),
      // Aria attributes
      "aria-labelledby": `${id}-${section.type}`,
      "aria-readonly": readOnly,
      "aria-valuenow": getSectionValueNow(section, utils),
      "aria-valuemin": sectionBoundaries.minimum,
      "aria-valuemax": sectionBoundaries.maximum,
      "aria-valuetext": section.value ? getSectionValueText(section, utils) : translations.empty,
      "aria-label": translations[section.type],
      "aria-disabled": disabled,
      // Other
      tabIndex: isContainerEditable || sectionIndex > 0 ? -1 : 0,
      contentEditable: !isContainerEditable && !disabled && !readOnly,
      role: "spinbutton",
      id: `${id}-${section.type}`,
      "data-range-position": section.dateName || void 0,
      spellCheck: isEditable ? false : void 0,
      autoCapitalize: isEditable ? "off" : void 0,
      autoCorrect: isEditable ? "off" : void 0,
      children: section.value || section.placeholder,
      inputMode: section.contentType === "letter" ? "text" : "numeric"
    };
  }, [sectionsValueBoundaries, id, isContainerEditable, disabled, readOnly, isEditable, translations, utils, handleInput, handlePaste, handleMouseUp, handleDragOver, createFocusHandler, fieldValueManager, value]);
}
function getSectionValueText(section, utils) {
  if (!section.value) {
    return void 0;
  }
  switch (section.type) {
    case "month": {
      if (section.contentType === "digit") {
        return utils.format(utils.setMonth(utils.date(), Number(section.value) - 1), "month");
      }
      const parsedDate = utils.parse(section.value, section.format);
      return parsedDate ? utils.format(parsedDate, "month") : void 0;
    }
    case "day":
      return section.contentType === "digit" ? utils.format(utils.setDate(utils.startOfYear(utils.date()), Number(section.value)), "dayOfMonthFull") : section.value;
    case "weekDay":
      return void 0;
    default:
      return void 0;
  }
}
function getSectionValueNow(section, utils) {
  if (!section.value) {
    return void 0;
  }
  switch (section.type) {
    case "weekDay": {
      if (section.contentType === "letter") {
        return void 0;
      }
      return Number(section.value);
    }
    case "meridiem": {
      const parsedDate = utils.parse(`01:00 ${section.value}`, `${utils.formats.hours12h}:${utils.formats.minutes} ${section.format}`);
      if (parsedDate) {
        return utils.getHours(parsedDate) >= 12 ? 1 : 0;
      }
      return void 0;
    }
    case "day":
      return section.contentType === "digit-with-letter" ? parseInt(section.value, 10) : Number(section.value);
    case "month": {
      if (section.contentType === "digit") {
        return Number(section.value);
      }
      const parsedDate = utils.parse(section.value, section.format);
      return parsedDate ? utils.getMonth(parsedDate) + 1 : void 0;
    }
    default:
      return section.contentType !== "letter" ? Number(section.value) : void 0;
  }
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldV7TextField.js
var useFieldV7TextField = (parameters) => {
  const {
    props,
    manager: manager2,
    skipContextFieldRefAssignment,
    manager: {
      valueType,
      internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel
    }
  } = parameters;
  const {
    internalProps,
    forwardedProps
  } = useSplitFieldProps(props, valueType);
  const internalPropsWithDefaults = useFieldInternalPropsWithDefaults({
    manager: manager2,
    internalProps,
    skipContextFieldRefAssignment
  });
  const {
    sectionListRef: sectionListRefProp,
    onBlur,
    onClick,
    onFocus,
    onInput,
    onPaste,
    onKeyDown,
    onClear,
    clearable
  } = forwardedProps;
  const {
    disabled = false,
    readOnly = false,
    autoFocus = false,
    focused: focusedProp,
    unstableFieldRef
  } = internalPropsWithDefaults;
  const sectionListRef = React23.useRef(null);
  const handleSectionListRef = useForkRef(sectionListRefProp, sectionListRef);
  const domGetters = React23.useMemo(() => ({
    isReady: () => sectionListRef.current != null,
    getRoot: () => sectionListRef.current.getRoot(),
    getSectionContainer: (sectionIndex) => sectionListRef.current.getSectionContainer(sectionIndex),
    getSectionContent: (sectionIndex) => sectionListRef.current.getSectionContent(sectionIndex),
    getSectionIndexFromDOMElement: (element) => sectionListRef.current.getSectionIndexFromDOMElement(element)
  }), [sectionListRef]);
  const stateResponse = useFieldState({
    manager: manager2,
    internalPropsWithDefaults,
    forwardedProps
  });
  const {
    // States and derived states
    areAllSectionsEmpty,
    error,
    parsedSelectedSections,
    sectionOrder,
    state,
    value,
    // Methods to update the states
    clearValue,
    setSelectedSections
  } = stateResponse;
  const applyCharacterEditing = useFieldCharacterEditing({
    stateResponse
  });
  const openPickerAriaLabel = useOpenPickerButtonAriaLabel(value);
  const [focused, setFocused] = React23.useState(false);
  function focusField(newSelectedSections = 0) {
    if (disabled || !sectionListRef.current || // if the field is already focused, we don't need to focus it again
    getActiveSectionIndex(sectionListRef) != null) {
      return;
    }
    const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
    setFocused(true);
    sectionListRef.current.getSectionContent(newParsedSelectedSections).focus();
  }
  const rootProps = useFieldRootProps({
    manager: manager2,
    internalPropsWithDefaults,
    stateResponse,
    applyCharacterEditing,
    focused,
    setFocused,
    domGetters
  });
  const hiddenInputProps = useFieldHiddenInputProps({
    manager: manager2,
    stateResponse
  });
  const createSectionContainerProps = useFieldSectionContainerProps({
    stateResponse,
    internalPropsWithDefaults
  });
  const createSectionContentProps = useFieldSectionContentProps({
    manager: manager2,
    stateResponse,
    applyCharacterEditing,
    internalPropsWithDefaults,
    domGetters,
    focused
  });
  const handleRootKeyDown = useEventCallback_default((event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    rootProps.onKeyDown(event);
  });
  const handleRootBlur = useEventCallback_default((event) => {
    onBlur == null ? void 0 : onBlur(event);
    rootProps.onBlur(event);
  });
  const handleRootFocus = useEventCallback_default((event) => {
    onFocus == null ? void 0 : onFocus(event);
    rootProps.onFocus(event);
  });
  const handleRootClick = useEventCallback_default((event) => {
    if (event.isDefaultPrevented()) {
      return;
    }
    onClick == null ? void 0 : onClick(event);
    rootProps.onClick(event);
  });
  const handleRootPaste = useEventCallback_default((event) => {
    onPaste == null ? void 0 : onPaste(event);
    rootProps.onPaste(event);
  });
  const handleRootInput = useEventCallback_default((event) => {
    onInput == null ? void 0 : onInput(event);
    rootProps.onInput(event);
  });
  const handleClear = useEventCallback_default((event, ...args) => {
    event.preventDefault();
    onClear == null ? void 0 : onClear(event, ...args);
    clearValue();
    if (!isFieldFocused(sectionListRef)) {
      focusField(0);
    } else {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const elements = React23.useMemo(() => {
    return state.sections.map((section, sectionIndex) => {
      const content = createSectionContentProps(section, sectionIndex);
      return {
        container: createSectionContainerProps(sectionIndex),
        content: createSectionContentProps(section, sectionIndex),
        before: {
          children: section.startSeparator
        },
        after: {
          children: section.endSeparator,
          "data-range-position": section.isEndFormatSeparator ? content["data-range-position"] : void 0
        }
      };
    });
  }, [state.sections, createSectionContainerProps, createSectionContentProps]);
  React23.useEffect(() => {
    if (sectionListRef.current == null) {
      throw new Error(["MUI X: The `sectionListRef` prop has not been initialized by `PickersSectionList`", "You probably tried to pass a component to the `textField` slot that contains an `<input />` element instead of a `PickersSectionList`.", "", "If you want to keep using an `<input />` HTML element for the editing, please add the `enableAccessibleFieldDOMStructure={false}` prop to your Picker or Field component:", "", "<DatePicker enableAccessibleFieldDOMStructure={false} slots={{ textField: MyCustomTextField }} />", "", "Learn more about the field accessible DOM structure on the MUI documentation: https://mui.com/x/react-date-pickers/fields/#fields-to-edit-a-single-element"].join("\n"));
    }
    if (autoFocus && !disabled && sectionListRef.current) {
      sectionListRef.current.getSectionContent(sectionOrder.startIndex).focus();
    }
  }, []);
  useEnhancedEffect_default(() => {
    if (!focused || !sectionListRef.current) {
      return;
    }
    if (parsedSelectedSections === "all") {
      sectionListRef.current.getRoot().focus();
    } else if (typeof parsedSelectedSections === "number") {
      const domElement = sectionListRef.current.getSectionContent(parsedSelectedSections);
      if (domElement) {
        domElement.focus();
      }
    }
  }, [parsedSelectedSections, focused]);
  useEnhancedEffect_default(() => {
    syncSelectionToDOM({
      focused,
      domGetters,
      stateResponse
    });
  });
  React23.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: () => getActiveSectionIndex(sectionListRef),
    setSelectedSections: (newSelectedSections) => {
      if (disabled || !sectionListRef.current) {
        return;
      }
      const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
      const newActiveSectionIndex = newParsedSelectedSections === "all" ? 0 : newParsedSelectedSections;
      setFocused(newActiveSectionIndex !== null);
      setSelectedSections(newSelectedSections);
    },
    focusField,
    isFieldFocused: () => isFieldFocused(sectionListRef)
  }));
  return _extends({}, forwardedProps, rootProps, {
    onBlur: handleRootBlur,
    onClick: handleRootClick,
    onFocus: handleRootFocus,
    onInput: handleRootInput,
    onPaste: handleRootPaste,
    onKeyDown: handleRootKeyDown,
    onClear: handleClear
  }, hiddenInputProps, {
    error,
    clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled),
    focused: focusedProp ?? focused,
    sectionListRef: handleSectionListRef,
    // Additional
    enableAccessibleFieldDOMStructure: true,
    elements,
    areAllSectionsEmpty,
    disabled,
    readOnly,
    autoFocus,
    openPickerAriaLabel
  });
};
function getActiveSectionIndex(sectionListRef) {
  const activeElement = getActiveElement(document);
  if (!activeElement || !sectionListRef.current || !sectionListRef.current.getRoot().contains(activeElement)) {
    return null;
  }
  return sectionListRef.current.getSectionIndexFromDOMElement(activeElement);
}
function isFieldFocused(sectionListRef) {
  const activeElement = getActiveElement(document);
  return !!sectionListRef.current && sectionListRef.current.getRoot().contains(activeElement);
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useFieldV6TextField.js
var React24 = __toESM(require_react(), 1);
var cleanString = (dirtyString) => dirtyString.replace(/[\u2066\u2067\u2068\u2069]/g, "");
var addPositionPropertiesToSections = (sections, localizedDigits, isRtl) => {
  let position = 0;
  let positionInInput = isRtl ? 1 : 0;
  const newSections = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const renderedValue = getSectionVisibleValue(section, isRtl ? "input-rtl" : "input-ltr", localizedDigits);
    const sectionStr = `${section.startSeparator}${renderedValue}${section.endSeparator}`;
    const sectionLength = cleanString(sectionStr).length;
    const sectionLengthInInput = sectionStr.length;
    const cleanedValue = cleanString(renderedValue);
    const startInInput = positionInInput + (cleanedValue === "" ? 0 : renderedValue.indexOf(cleanedValue[0])) + section.startSeparator.length;
    const endInInput = startInInput + cleanedValue.length;
    newSections.push(_extends({}, section, {
      start: position,
      end: position + sectionLength,
      startInInput,
      endInInput
    }));
    position += sectionLength;
    positionInInput += sectionLengthInInput;
  }
  return newSections;
};
var useFieldV6TextField = (parameters) => {
  const isRtl = useRtl();
  const focusTimeout = useTimeout();
  const selectionSyncTimeout = useTimeout();
  const {
    props,
    manager: manager2,
    skipContextFieldRefAssignment,
    manager: {
      valueType,
      internal_valueManager: valueManager,
      internal_fieldValueManager: fieldValueManager,
      internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel
    }
  } = parameters;
  const {
    internalProps,
    forwardedProps
  } = useSplitFieldProps(props, valueType);
  const internalPropsWithDefaults = useFieldInternalPropsWithDefaults({
    manager: manager2,
    internalProps,
    skipContextFieldRefAssignment
  });
  const {
    onFocus,
    onClick,
    onPaste,
    onBlur,
    onKeyDown,
    onClear,
    clearable,
    inputRef: inputRefProp,
    placeholder: inPlaceholder
  } = forwardedProps;
  const {
    readOnly = false,
    disabled = false,
    autoFocus = false,
    focused,
    unstableFieldRef
  } = internalPropsWithDefaults;
  const inputRef = React24.useRef(null);
  const handleRef = useForkRef(inputRefProp, inputRef);
  const stateResponse = useFieldState({
    manager: manager2,
    internalPropsWithDefaults,
    forwardedProps
  });
  const {
    // States and derived states
    activeSectionIndex,
    areAllSectionsEmpty,
    error,
    localizedDigits,
    parsedSelectedSections,
    sectionOrder,
    state,
    value,
    // Methods to update the states
    clearValue,
    clearActiveSection,
    setCharacterQuery,
    setSelectedSections,
    setTempAndroidValueStr,
    updateSectionValue,
    updateValueFromValueStr,
    // Utilities methods
    getSectionsFromValue
  } = stateResponse;
  const applyCharacterEditing = useFieldCharacterEditing({
    stateResponse
  });
  const openPickerAriaLabel = useOpenPickerButtonAriaLabel(value);
  const sections = React24.useMemo(() => addPositionPropertiesToSections(state.sections, localizedDigits, isRtl), [state.sections, localizedDigits, isRtl]);
  function syncSelectionFromDOM() {
    const browserStartIndex = inputRef.current.selectionStart ?? 0;
    let nextSectionIndex;
    if (browserStartIndex <= sections[0].startInInput) {
      nextSectionIndex = 1;
    } else if (browserStartIndex >= sections[sections.length - 1].endInInput) {
      nextSectionIndex = 1;
    } else {
      nextSectionIndex = sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
    }
    const sectionIndex = nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
    setSelectedSections(sectionIndex);
  }
  function focusField(newSelectedSection = 0) {
    var _a;
    if (getActiveElement(document) === inputRef.current) {
      return;
    }
    (_a = inputRef.current) == null ? void 0 : _a.focus();
    setSelectedSections(newSelectedSection);
  }
  const handleInputFocus = useEventCallback_default((event) => {
    onFocus == null ? void 0 : onFocus(event);
    const input = inputRef.current;
    focusTimeout.start(0, () => {
      if (!input || input !== inputRef.current) {
        return;
      }
      if (activeSectionIndex != null) {
        return;
      }
      if (
        // avoid selecting all sections when focusing empty field without value
        input.value.length && Number(input.selectionEnd) - Number(input.selectionStart) === input.value.length
      ) {
        setSelectedSections("all");
      } else {
        syncSelectionFromDOM();
      }
    });
  });
  const handleInputClick = useEventCallback_default((event, ...args) => {
    if (event.isDefaultPrevented()) {
      return;
    }
    onClick == null ? void 0 : onClick(event, ...args);
    syncSelectionFromDOM();
  });
  const handleInputPaste = useEventCallback_default((event) => {
    onPaste == null ? void 0 : onPaste(event);
    event.preventDefault();
    if (readOnly || disabled) {
      return;
    }
    const pastedValue = event.clipboardData.getData("text");
    if (typeof parsedSelectedSections === "number") {
      const activeSection = state.sections[parsedSelectedSections];
      const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
      const digitsOnly = /^[0-9]+$/.test(pastedValue);
      const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
      const isValidPastedValue = activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly || activeSection.contentType === "digit-with-letter" && digitsAndLetterOnly;
      if (isValidPastedValue) {
        setCharacterQuery(null);
        updateSectionValue({
          section: activeSection,
          newSectionValue: pastedValue,
          shouldGoToNextSection: true
        });
        return;
      }
      if (lettersOnly || digitsOnly) {
        return;
      }
    }
    setCharacterQuery(null);
    updateValueFromValueStr(pastedValue);
  });
  const handleContainerBlur = useEventCallback_default((event) => {
    onBlur == null ? void 0 : onBlur(event);
    setSelectedSections(null);
  });
  const handleInputChange = useEventCallback_default((event) => {
    if (readOnly) {
      return;
    }
    const targetValue = event.target.value;
    if (targetValue === "") {
      clearValue();
      return;
    }
    const eventData = event.nativeEvent.data;
    const shouldUseEventData = eventData && eventData.length > 1;
    const valueStr2 = shouldUseEventData ? eventData : targetValue;
    const cleanValueStr = cleanString(valueStr2);
    if (parsedSelectedSections === "all") {
      setSelectedSections(activeSectionIndex);
    }
    if (activeSectionIndex == null || shouldUseEventData) {
      updateValueFromValueStr(shouldUseEventData ? eventData : cleanValueStr);
      return;
    }
    let keyPressed;
    if (parsedSelectedSections === "all" && cleanValueStr.length === 1) {
      keyPressed = cleanValueStr;
    } else {
      const prevValueStr = cleanString(fieldValueManager.getV6InputValueFromSections(sections, localizedDigits, isRtl));
      let startOfDiffIndex = -1;
      let endOfDiffIndex = -1;
      for (let i = 0; i < prevValueStr.length; i += 1) {
        if (startOfDiffIndex === -1 && prevValueStr[i] !== cleanValueStr[i]) {
          startOfDiffIndex = i;
        }
        if (endOfDiffIndex === -1 && prevValueStr[prevValueStr.length - i - 1] !== cleanValueStr[cleanValueStr.length - i - 1]) {
          endOfDiffIndex = i;
        }
      }
      const activeSection = sections[activeSectionIndex];
      const hasDiffOutsideOfActiveSection = startOfDiffIndex < activeSection.start || prevValueStr.length - endOfDiffIndex - 1 > activeSection.end;
      if (hasDiffOutsideOfActiveSection) {
        return;
      }
      const activeSectionEndRelativeToNewValue = cleanValueStr.length - prevValueStr.length + activeSection.end - cleanString(activeSection.endSeparator || "").length;
      keyPressed = cleanValueStr.slice(activeSection.start + cleanString(activeSection.startSeparator || "").length, activeSectionEndRelativeToNewValue);
    }
    if (keyPressed.length === 0) {
      if (isAndroid()) {
        setTempAndroidValueStr(valueStr2);
      }
      clearActiveSection();
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex: activeSectionIndex
    });
  });
  const handleClear = useEventCallback_default((event, ...args) => {
    event.preventDefault();
    onClear == null ? void 0 : onClear(event, ...args);
    clearValue();
    if (!isFieldFocused2(inputRef)) {
      focusField(0);
    } else {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const handleContainerKeyDown = useFieldRootHandleKeyDown({
    manager: manager2,
    internalPropsWithDefaults,
    stateResponse
  });
  const wrappedHandleContainerKeyDown = useEventCallback_default((event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    handleContainerKeyDown(event);
  });
  const placeholder = React24.useMemo(() => {
    if (inPlaceholder !== void 0) {
      return inPlaceholder;
    }
    return fieldValueManager.getV6InputValueFromSections(getSectionsFromValue(valueManager.emptyValue), localizedDigits, isRtl);
  }, [inPlaceholder, fieldValueManager, getSectionsFromValue, valueManager.emptyValue, localizedDigits, isRtl]);
  const valueStr = React24.useMemo(() => state.tempValueStrAndroid ?? fieldValueManager.getV6InputValueFromSections(state.sections, localizedDigits, isRtl), [state.sections, fieldValueManager, state.tempValueStrAndroid, localizedDigits, isRtl]);
  React24.useEffect(() => {
    if (inputRef.current && inputRef.current === getActiveElement(document)) {
      setSelectedSections("all");
    }
  }, []);
  useEnhancedEffect_default(() => {
    function syncSelectionToDOM2() {
      if (!inputRef.current) {
        return;
      }
      if (parsedSelectedSections == null) {
        if (inputRef.current.scrollLeft) {
          inputRef.current.scrollLeft = 0;
        }
        return;
      }
      if (inputRef.current !== getActiveElement(document)) {
        return;
      }
      const currentScrollTop = inputRef.current.scrollTop;
      if (parsedSelectedSections === "all") {
        inputRef.current.select();
      } else {
        const selectedSection = sections[parsedSelectedSections];
        const selectionStart = selectedSection.type === "empty" ? selectedSection.startInInput - selectedSection.startSeparator.length : selectedSection.startInInput;
        const selectionEnd = selectedSection.type === "empty" ? selectedSection.endInInput + selectedSection.endSeparator.length : selectedSection.endInInput;
        if (selectionStart !== inputRef.current.selectionStart || selectionEnd !== inputRef.current.selectionEnd) {
          if (inputRef.current === getActiveElement(document)) {
            inputRef.current.setSelectionRange(selectionStart, selectionEnd);
          }
        }
        selectionSyncTimeout.start(0, () => {
          if (inputRef.current && inputRef.current === getActiveElement(document) && // The section might loose all selection, where `selectionStart === selectionEnd`
          // https://github.com/mui/mui-x/pull/13652
          inputRef.current.selectionStart === inputRef.current.selectionEnd && (inputRef.current.selectionStart !== selectionStart || inputRef.current.selectionEnd !== selectionEnd)) {
            syncSelectionToDOM2();
          }
        });
      }
      inputRef.current.scrollTop = currentScrollTop;
    }
    syncSelectionToDOM2();
  });
  const inputMode = React24.useMemo(() => {
    if (activeSectionIndex == null) {
      return "text";
    }
    if (state.sections[activeSectionIndex].contentType === "letter") {
      return "text";
    }
    return "numeric";
  }, [activeSectionIndex, state.sections]);
  const inputHasFocus = inputRef.current && inputRef.current === getActiveElement(document);
  const shouldShowPlaceholder = !inputHasFocus && areAllSectionsEmpty;
  React24.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: () => {
      const browserStartIndex = inputRef.current.selectionStart ?? 0;
      const browserEndIndex = inputRef.current.selectionEnd ?? 0;
      if (browserStartIndex === 0 && browserEndIndex === 0) {
        return null;
      }
      const nextSectionIndex = browserStartIndex <= sections[0].startInInput ? 1 : sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
      return nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
    },
    setSelectedSections: (newSelectedSections) => setSelectedSections(newSelectedSections),
    focusField,
    isFieldFocused: () => isFieldFocused2(inputRef)
  }));
  return _extends({}, forwardedProps, {
    error,
    clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled),
    onBlur: handleContainerBlur,
    onClick: handleInputClick,
    onFocus: handleInputFocus,
    onPaste: handleInputPaste,
    onKeyDown: wrappedHandleContainerKeyDown,
    onClear: handleClear,
    inputRef: handleRef,
    // Additional
    enableAccessibleFieldDOMStructure: false,
    placeholder,
    inputMode,
    autoComplete: "off",
    value: shouldShowPlaceholder ? "" : valueStr,
    onChange: handleInputChange,
    focused,
    disabled,
    readOnly,
    autoFocus,
    openPickerAriaLabel
  });
};
function isFieldFocused2(inputRef) {
  return inputRef.current === getActiveElement(document);
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useField/useField.js
var useField = (parameters) => {
  const fieldPrivateContext = useNullableFieldPrivateContext();
  const enableAccessibleFieldDOMStructure = parameters.props.enableAccessibleFieldDOMStructure ?? (fieldPrivateContext == null ? void 0 : fieldPrivateContext.enableAccessibleFieldDOMStructure) ?? true;
  const useFieldTextField = enableAccessibleFieldDOMStructure ? useFieldV7TextField : useFieldV6TextField;
  return useFieldTextField(parameters);
};

// node_modules/@mui/x-date-pickers/esm/managers/useDateManager.js
var React25 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/managers/useTimeManager.js
var React26 = __toESM(require_react(), 1);
function useTimeManager(parameters = {}) {
  const {
    enableAccessibleFieldDOMStructure = true,
    ampm
  } = parameters;
  return React26.useMemo(() => ({
    valueType: "time",
    validator: validateTime,
    internal_valueManager: singleItemValueManager,
    internal_fieldValueManager: singleItemFieldValueManager,
    internal_enableAccessibleFieldDOMStructure: enableAccessibleFieldDOMStructure,
    internal_useApplyDefaultValuesToFieldInternalProps: useApplyDefaultValuesToTimeFieldInternalProps,
    internal_useOpenPickerButtonAriaLabel: createUseOpenPickerButtonAriaLabel(ampm)
  }), [ampm, enableAccessibleFieldDOMStructure]);
}
function createUseOpenPickerButtonAriaLabel(ampm) {
  return function useOpenPickerButtonAriaLabel(value) {
    const utils = useUtils();
    const translations = usePickerTranslations();
    return React26.useMemo(() => {
      const formatKey = ampm ?? utils.is12HourCycleInCurrentLocale() ? "fullTime12h" : "fullTime24h";
      const formattedValue = utils.isValid(value) ? utils.format(value, formatKey) : null;
      return translations.openTimePickerDialogue(formattedValue);
    }, [value, translations, utils]);
  };
}
function useApplyDefaultValuesToTimeFieldInternalProps(internalProps) {
  const utils = useUtils();
  const validationProps = useApplyDefaultValuesToTimeValidationProps(internalProps);
  const ampm = React26.useMemo(() => internalProps.ampm ?? utils.is12HourCycleInCurrentLocale(), [internalProps.ampm, utils]);
  return React26.useMemo(() => _extends({}, internalProps, validationProps, {
    format: internalProps.format ?? (ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h)
  }), [internalProps, validationProps, ampm, utils]);
}
function useApplyDefaultValuesToTimeValidationProps(props) {
  return React26.useMemo(() => ({
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false
  }), [props.disablePast, props.disableFuture]);
}

// node_modules/@mui/x-date-pickers/esm/managers/useDateTimeManager.js
var React27 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/TimeField/useTimeField.js
var useTimeField = (props) => {
  const manager2 = useTimeManager(props);
  return useField({
    manager: manager2,
    props
  });
};

// node_modules/@mui/x-date-pickers/esm/internals/components/PickerFieldUI.js
var React89 = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/TextField/TextField.js
var React69 = __toESM(require_react(), 1);
var import_prop_types37 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/zero-styled/index.js
var React29 = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/GlobalStyles/GlobalStyles.js
var React28 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function GlobalStyles(props) {
  return (0, import_jsx_runtime2.jsx)(GlobalStyles_default, {
    ...props,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}
true ? GlobalStyles.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: import_prop_types2.default.oneOfType([import_prop_types2.default.array, import_prop_types2.default.func, import_prop_types2.default.number, import_prop_types2.default.object, import_prop_types2.default.string, import_prop_types2.default.bool])
} : void 0;
var GlobalStyles_default2 = GlobalStyles;

// node_modules/@mui/material/esm/zero-styled/index.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function globalCss(styles4) {
  return function GlobalStylesWrapper(props) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      (0, import_jsx_runtime3.jsx)(GlobalStyles_default2, {
        styles: typeof styles4 === "function" ? (theme) => styles4({
          theme,
          ...props
        }) : styles4
      })
    );
  };
}
function internal_createExtendSxProp() {
  return extendSxProp;
}

// node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js
var React30 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function DefaultPropsProvider(props) {
  return (0, import_jsx_runtime4.jsx)(DefaultPropsProvider_default, {
    ...props
  });
}
true ? DefaultPropsProvider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types3.default.node,
  /**
   * @ignore
   */
  value: import_prop_types3.default.object.isRequired
} : void 0;
function useDefaultProps2(params) {
  return useDefaultProps(params);
}

// node_modules/@mui/material/esm/Input/Input.js
var React35 = __toESM(require_react(), 1);
var import_prop_types7 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/InputBase/InputBase.js
var React34 = __toESM(require_react(), 1);
var import_prop_types6 = __toESM(require_prop_types(), 1);

// node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js
var import_prop_types4 = __toESM(require_prop_types(), 1);

// node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js
function chainPropTypes(propType1, propType2) {
  if (false) {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

// node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js
function isClassComponent(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  if (typeof propValue === "function" && !isClassComponent(propValue)) {
    warningHint = "Did you accidentally provide a plain function component instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var elementTypeAcceptingRef_default = chainPropTypes(import_prop_types4.default.elementType, elementTypeAcceptingRef);

// node_modules/@mui/material/esm/TextareaAutosize/TextareaAutosize.js
var React31 = __toESM(require_react(), 1);
var import_prop_types5 = __toESM(require_prop_types(), 1);

// node_modules/@mui/utils/esm/debounce/debounce.js
function debounce(func, wait = 166) {
  let timeout2;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout2);
    timeout2 = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout2);
  };
  return debounced;
}

// node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

// node_modules/@mui/material/esm/TextareaAutosize/TextareaAutosize.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
var styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function isObjectEmpty(object) {
  for (const _ in object) {
    return false;
  }
  return true;
}
function isEmpty(obj) {
  return isObjectEmpty(obj) || obj.outerHeightStyle === 0 && !obj.overflowing;
}
var TextareaAutosize = React31.forwardRef(function TextareaAutosize2(props, forwardedRef) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style,
    value,
    ...other
  } = props;
  const {
    current: isControlled
  } = React31.useRef(value != null);
  const textareaRef = React31.useRef(null);
  const handleRef = useForkRef(forwardedRef, textareaRef);
  const heightRef = React31.useRef(null);
  const hiddenTextareaRef = React31.useRef(null);
  const calculateTextareaStyles = React31.useCallback(() => {
    const textarea = textareaRef.current;
    const hiddenTextarea = hiddenTextareaRef.current;
    if (!textarea || !hiddenTextarea) {
      return void 0;
    }
    const containerWindow = ownerWindow(textarea);
    const computedStyle = containerWindow.getComputedStyle(textarea);
    if (computedStyle.width === "0px") {
      return {
        outerHeightStyle: 0,
        overflowing: false
      };
    }
    hiddenTextarea.style.width = computedStyle.width;
    hiddenTextarea.value = textarea.value || props.placeholder || "x";
    if (hiddenTextarea.value.slice(-1) === "\n") {
      hiddenTextarea.value += " ";
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
    const innerHeight = hiddenTextarea.scrollHeight;
    hiddenTextarea.value = "x";
    const singleRowHeight = hiddenTextarea.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflowing
    };
  }, [maxRows, minRows, props.placeholder]);
  const didHeightChange = useEventCallback_default(() => {
    const textarea = textareaRef.current;
    const textareaStyles = calculateTextareaStyles();
    if (!textarea || !textareaStyles || isEmpty(textareaStyles)) {
      return false;
    }
    const outerHeightStyle = textareaStyles.outerHeightStyle;
    return heightRef.current != null && heightRef.current !== outerHeightStyle;
  });
  const syncHeight = React31.useCallback(() => {
    const textarea = textareaRef.current;
    const textareaStyles = calculateTextareaStyles();
    if (!textarea || !textareaStyles || isEmpty(textareaStyles)) {
      return;
    }
    const outerHeightStyle = textareaStyles.outerHeightStyle;
    if (heightRef.current !== outerHeightStyle) {
      heightRef.current = outerHeightStyle;
      textarea.style.height = `${outerHeightStyle}px`;
    }
    textarea.style.overflow = textareaStyles.overflowing ? "hidden" : "";
  }, [calculateTextareaStyles]);
  const frameRef = React31.useRef(-1);
  useEnhancedEffect_default(() => {
    const debouncedHandleResize = debounce(syncHeight);
    const textarea = textareaRef == null ? void 0 : textareaRef.current;
    if (!textarea) {
      return void 0;
    }
    const containerWindow = ownerWindow(textarea);
    containerWindow.addEventListener("resize", debouncedHandleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        if (didHeightChange()) {
          resizeObserver.unobserve(textarea);
          cancelAnimationFrame(frameRef.current);
          syncHeight();
          frameRef.current = requestAnimationFrame(() => {
            resizeObserver.observe(textarea);
          });
        }
      });
      resizeObserver.observe(textarea);
    }
    return () => {
      debouncedHandleResize.clear();
      cancelAnimationFrame(frameRef.current);
      containerWindow.removeEventListener("resize", debouncedHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [calculateTextareaStyles, syncHeight, didHeightChange]);
  useEnhancedEffect_default(() => {
    syncHeight();
  });
  const handleChange = (event) => {
    if (!isControlled) {
      syncHeight();
    }
    const textarea = event.target;
    const countOfCharacters = textarea.value.length;
    const isLastCharacterNewLine = textarea.value.endsWith("\n");
    const isEndOfTheLine = textarea.selectionStart === countOfCharacters;
    if (isLastCharacterNewLine && isEndOfTheLine) {
      textarea.setSelectionRange(countOfCharacters, countOfCharacters);
    }
    if (onChange) {
      onChange(event);
    }
  };
  return (0, import_jsx_runtime5.jsxs)(React31.Fragment, {
    children: [(0, import_jsx_runtime5.jsx)("textarea", {
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style,
      ...other
    }), (0, import_jsx_runtime5.jsx)("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: hiddenTextareaRef,
      tabIndex: -1,
      style: {
        ...styles.shadow,
        ...style,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
true ? TextareaAutosize.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: import_prop_types5.default.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]),
  /**
   * @ignore
   */
  onChange: import_prop_types5.default.func,
  /**
   * @ignore
   */
  placeholder: import_prop_types5.default.string,
  /**
   * @ignore
   */
  style: import_prop_types5.default.object,
  /**
   * @ignore
   */
  value: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.string), import_prop_types5.default.number, import_prop_types5.default.string])
} : void 0;
var TextareaAutosize_default = TextareaAutosize;

// node_modules/@mui/material/esm/utils/isHostComponent.js
function isHostComponent(element) {
  return typeof element === "string";
}
var isHostComponent_default = isHostComponent;

// node_modules/@mui/material/esm/FormControl/formControlState.js
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}

// node_modules/@mui/material/esm/FormControl/FormControlContext.js
var React32 = __toESM(require_react(), 1);
var FormControlContext = React32.createContext(void 0);
if (true) {
  FormControlContext.displayName = "FormControlContext";
}
var FormControlContext_default = FormControlContext;

// node_modules/@mui/material/esm/FormControl/useFormControl.js
var React33 = __toESM(require_react(), 1);
function useFormControl() {
  return React33.useContext(FormControlContext_default);
}

// node_modules/@mui/material/esm/utils/memoTheme.js
var memoTheme = unstable_memoTheme;
var memoTheme_default = memoTheme;

// node_modules/@mui/material/esm/utils/capitalize.js
var capitalize_default = capitalize;

// node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef_default = useForkRef;

// node_modules/@mui/material/esm/utils/useEnhancedEffect.js
var useEnhancedEffect_default2 = useEnhancedEffect_default;

// node_modules/@mui/material/esm/InputBase/utils.js
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}

// node_modules/@mui/material/esm/InputBase/inputBaseClasses.js
function getInputBaseUtilityClass(slot) {
  return generateUtilityClass("MuiInputBase", slot);
}
var inputBaseClasses = generateUtilityClasses("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var inputBaseClasses_default = inputBaseClasses;

// node_modules/@mui/material/esm/InputBase/InputBase.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var _InputGlobalStyles;
var rootOverridesResolver = (props, styles4) => {
  const {
    ownerState
  } = props;
  return [styles4.root, ownerState.formControl && styles4.formControl, ownerState.startAdornment && styles4.adornedStart, ownerState.endAdornment && styles4.adornedEnd, ownerState.error && styles4.error, ownerState.size === "small" && styles4.sizeSmall, ownerState.multiline && styles4.multiline, ownerState.color && styles4[`color${capitalize_default(ownerState.color)}`], ownerState.fullWidth && styles4.fullWidth, ownerState.hiddenLabel && styles4.hiddenLabel];
};
var inputOverridesResolver = (props, styles4) => {
  const {
    ownerState
  } = props;
  return [styles4.input, ownerState.size === "small" && styles4.inputSizeSmall, ownerState.multiline && styles4.inputMultiline, ownerState.type === "search" && styles4.inputTypeSearch, ownerState.startAdornment && styles4.inputAdornedStart, ownerState.endAdornment && styles4.inputAdornedEnd, ownerState.hiddenLabel && styles4.inputHiddenLabel];
};
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    color,
    disabled,
    error,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    readOnly,
    size,
    startAdornment,
    type
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize_default(color)}`, disabled && "disabled", error && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size && size !== "medium" && `size${capitalize_default(size)}`, multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel", readOnly && "readOnly"],
    input: ["input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd", readOnly && "readOnly"]
  };
  return composeClasses(slots, getInputBaseUtilityClass, classes);
};
var InputBaseRoot = styled_default("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(memoTheme_default(({
  theme
}) => ({
  ...theme.typography.body1,
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${inputBaseClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState,
      size
    }) => ownerState.multiline && size === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.fullWidth,
    style: {
      width: "100%"
    }
  }]
})));
var InputBaseInput = styled_default("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(memoTheme_default(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  const placeholder = {
    color: "currentColor",
    ...theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: light ? 0.42 : 0.5
    },
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  };
  const placeholderHidden = {
    opacity: "0 !important"
  };
  const placeholderVisible = theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    // Firefox 19+
    "&::-ms-input-placeholder": placeholder,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${inputBaseClasses_default.formControl} &`]: {
      "&::-webkit-input-placeholder": placeholderHidden,
      "&::-moz-placeholder": placeholderHidden,
      // Firefox 19+
      "&::-ms-input-placeholder": placeholderHidden,
      // Edge
      "&:focus::-webkit-input-placeholder": placeholderVisible,
      "&:focus::-moz-placeholder": placeholderVisible,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": placeholderVisible
      // Edge
    },
    [`&.${inputBaseClasses_default.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (theme.vars || theme).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
}));
var InputGlobalStyles = globalCss({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
});
var InputBase = React34.forwardRef(function InputBase2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiInputBase"
  });
  const {
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    color,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    disableInjectingGlobalStyles,
    endAdornment,
    error,
    fullWidth = false,
    id,
    inputComponent = "input",
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    margin,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    size,
    slotProps = {},
    slots = {},
    startAdornment,
    type = "text",
    value: valueProp,
    ...other
  } = props;
  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = React34.useRef(value != null);
  const inputRef = React34.useRef();
  const handleInputRefWarning = React34.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const handleInputRef = useForkRef_default(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
  const [focused, setFocused] = React34.useState(false);
  const muiFormControl = useFormControl();
  if (true) {
    React34.useEffect(() => {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }
      return void 0;
    }, [muiFormControl]);
  }
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  React34.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = React34.useCallback((obj) => {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect_default2(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  const handleFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(true ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : formatMuiErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    }
    if (onChange) {
      onChange(event, ...args);
    }
  };
  React34.useEffect(() => {
    checkDirty(inputRef.current);
  }, []);
  const handleClick = (event) => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;
  if (multiline && InputComponent === "input") {
    if (rows) {
      if (true) {
        if (minRows || maxRows) {
          console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set.");
        }
      }
      inputProps = {
        type: void 0,
        minRows: rows,
        maxRows: rows,
        ...inputProps
      };
    } else {
      inputProps = {
        type: void 0,
        maxRows,
        minRows,
        ...inputProps
      };
    }
    InputComponent = TextareaAutosize_default;
  }
  const handleAutoFill = (event) => {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  React34.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  const ownerState = {
    ...props,
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  };
  const classes = useUtilityClasses(ownerState);
  const Root = slots.root || components.Root || InputBaseRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const Input3 = slots.input || components.Input || InputBaseInput;
  inputProps = {
    ...inputProps,
    ...slotProps.input ?? componentsProps.input
  };
  return (0, import_jsx_runtime6.jsxs)(React34.Fragment, {
    children: [!disableInjectingGlobalStyles && typeof InputGlobalStyles === "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (_InputGlobalStyles || (_InputGlobalStyles = (0, import_jsx_runtime6.jsx)(InputGlobalStyles, {}))), (0, import_jsx_runtime6.jsxs)(Root, {
      ...rootProps,
      ref,
      onClick: handleClick,
      ...other,
      ...!isHostComponent_default(Root) && {
        ownerState: {
          ...ownerState,
          ...rootProps.ownerState
        }
      },
      className: clsx_default(classes.root, rootProps.className, className, readOnly && "MuiInputBase-readOnly"),
      children: [startAdornment, (0, import_jsx_runtime6.jsx)(FormControlContext_default.Provider, {
        value: null,
        children: (0, import_jsx_runtime6.jsx)(Input3, {
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete,
          autoFocus,
          defaultValue,
          disabled: fcs.disabled,
          id,
          onAnimationStart: handleAutoFill,
          name,
          placeholder,
          readOnly,
          required: fcs.required,
          rows,
          value,
          onKeyDown,
          onKeyUp,
          type,
          ...inputProps,
          ...!isHostComponent_default(Input3) && {
            as: InputComponent,
            ownerState: {
              ...ownerState,
              ...inputProps.ownerState
            }
          },
          ref: handleInputRef,
          className: clsx_default(classes.input, inputProps.className, readOnly && "MuiInputBase-readOnly"),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        })
      }), endAdornment, renderSuffix ? renderSuffix({
        ...fcs,
        startAdornment
      }) : null]
    })]
  });
});
true ? InputBase.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": import_prop_types6.default.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types6.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types6.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types6.default.object,
  /**
   * @ignore
   */
  className: import_prop_types6.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), import_prop_types6.default.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: import_prop_types6.default.shape({
    Input: import_prop_types6.default.elementType,
    Root: import_prop_types6.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: import_prop_types6.default.shape({
    input: import_prop_types6.default.object,
    root: import_prop_types6.default.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types6.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types6.default.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: import_prop_types6.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types6.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types6.default.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types6.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types6.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: elementTypeAcceptingRef_default,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: import_prop_types6.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: import_prop_types6.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: import_prop_types6.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types6.default.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: import_prop_types6.default.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types6.default.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types6.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types6.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types6.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types6.default.bool,
  /**
   * @ignore
   */
  renderSuffix: import_prop_types6.default.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types6.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.string]),
  /**
   * The size of the component.
   */
  size: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["medium", "small"]), import_prop_types6.default.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types6.default.shape({
    input: import_prop_types6.default.object,
    root: import_prop_types6.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types6.default.shape({
    input: import_prop_types6.default.elementType,
    root: import_prop_types6.default.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types6.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: import_prop_types6.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types6.default.any
} : void 0;
var InputBase_default = InputBase;

// node_modules/@mui/material/esm/utils/createSimplePaletteValueFilter.js
function hasCorrectMainProperty(obj) {
  return typeof obj.main === "string";
}
function checkSimplePaletteColorValues(obj, additionalPropertiesToCheck = []) {
  if (!hasCorrectMainProperty(obj)) {
    return false;
  }
  for (const value of additionalPropertiesToCheck) {
    if (!obj.hasOwnProperty(value) || typeof obj[value] !== "string") {
      return false;
    }
  }
  return true;
}
function createSimplePaletteValueFilter(additionalPropertiesToCheck = []) {
  return ([, value]) => value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
}

// node_modules/@mui/material/esm/Input/inputClasses.js
function getInputUtilityClass(slot) {
  return generateUtilityClass("MuiInput", slot);
}
var inputClasses = {
  ...inputBaseClasses_default,
  ...generateUtilityClasses("MuiInput", ["root", "underline", "input"])
};
var inputClasses_default = inputClasses;

// node_modules/@mui/material/esm/Input/Input.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the InputBase
    ...composedClasses
  };
};
var InputRoot = styled_default(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles4), !ownerState.disableUnderline && styles4.underline];
  }
})(memoTheme_default(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  let bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return {
    position: "relative",
    variants: [{
      props: ({
        ownerState
      }) => ownerState.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState
      }) => !ownerState.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${inputClasses_default.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${inputClasses_default.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${inputClasses_default.disabled}, .${inputClasses_default.error}):before`]: {
          borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${bottomLineColor}`
          }
        },
        [`&.${inputClasses_default.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color,
        disableUnderline: false
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(theme.vars || theme).palette[color].main}`
        }
      }
    }))]
  };
}));
var InputInput = styled_default(InputBaseInput, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})({});
var Input = React35.forwardRef(function Input2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiInput"
  });
  const {
    disableUnderline = false,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text",
    ...other
  } = props;
  const classes = useUtilityClasses2(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = slotProps ?? componentsPropsProp ? deepmerge(slotProps ?? componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  const RootSlot = slots.root ?? components.Root ?? InputRoot;
  const InputSlot = slots.input ?? components.Input ?? InputInput;
  return (0, import_jsx_runtime7.jsx)(InputBase_default, {
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type,
    ...other,
    classes
  });
});
true ? Input.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types7.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types7.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types7.default.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: import_prop_types7.default.oneOfType([import_prop_types7.default.oneOf(["primary", "secondary"]), import_prop_types7.default.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: import_prop_types7.default.shape({
    Input: import_prop_types7.default.elementType,
    Root: import_prop_types7.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: import_prop_types7.default.shape({
    input: import_prop_types7.default.object,
    root: import_prop_types7.default.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types7.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types7.default.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: import_prop_types7.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types7.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types7.default.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types7.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types7.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: import_prop_types7.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: import_prop_types7.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: import_prop_types7.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: import_prop_types7.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types7.default.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types7.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types7.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types7.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types7.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types7.default.shape({
    input: import_prop_types7.default.object,
    root: import_prop_types7.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types7.default.shape({
    input: import_prop_types7.default.elementType,
    root: import_prop_types7.default.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types7.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object, import_prop_types7.default.bool])), import_prop_types7.default.func, import_prop_types7.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: import_prop_types7.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types7.default.any
} : void 0;
Input.muiName = "Input";
var Input_default = Input;

// node_modules/@mui/material/esm/FilledInput/FilledInput.js
var React38 = __toESM(require_react(), 1);
var import_prop_types9 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/FilledInput/filledInputClasses.js
function getFilledInputUtilityClass(slot) {
  return generateUtilityClass("MuiFilledInput", slot);
}
var filledInputClasses = {
  ...inputBaseClasses_default,
  ...generateUtilityClasses("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
var filledInputClasses_default = filledInputClasses;

// node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}

// node_modules/@mui/material/esm/utils/createSvgIcon.js
var React37 = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/SvgIcon/SvgIcon.js
var React36 = __toESM(require_react(), 1);
var import_prop_types8 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// node_modules/@mui/material/esm/SvgIcon/SvgIcon.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses3 = (ownerState) => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
var SvgIconRoot = styled_default("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.color !== "inherit" && styles4[`color${capitalize_default(ownerState.color)}`], styles4[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(memoTheme_default(({
  theme
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (_d = (_a = theme.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", {
      duration: (_c = (_b = (theme.vars ?? theme).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c.shorter
    }),
    variants: [
      {
        props: (props) => !props.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((_f = (_e = theme.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f.call(_e, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((_h = (_g = theme.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((_j = (_i = theme.typography) == null ? void 0 : _i.pxToRem) == null ? void 0 : _j.call(_i, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color]) => {
        var _a2, _b2;
        return {
          props: {
            color
          },
          style: {
            color: (_b2 = (_a2 = (theme.vars ?? theme).palette) == null ? void 0 : _a2[color]) == null ? void 0 : _b2.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (_l = (_k = (theme.vars ?? theme).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (_n = (_m = (theme.vars ?? theme).palette) == null ? void 0 : _m.action) == null ? void 0 : _n.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
}));
var SvgIcon = React36.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children: children2,
    className,
    color = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24",
    ...other
  } = props;
  const hasSvgAsChild = React36.isValidElement(children2) && children2.type === "svg";
  const ownerState = {
    ...props,
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  };
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses3(ownerState);
  return (0, import_jsx_runtime8.jsxs)(SvgIconRoot, {
    as: component,
    className: clsx_default(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref,
    ...more,
    ...other,
    ...hasSvgAsChild && children2.props,
    ownerState,
    children: [hasSvgAsChild ? children2.props.children : children2, titleAccess ? (0, import_jsx_runtime8.jsx)("title", {
      children: titleAccess
    }) : null]
  });
});
true ? SvgIcon.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types8.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types8.default.object,
  /**
   * @ignore
   */
  className: import_prop_types8.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types8.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types8.default.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types8.default.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types8.default.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: import_prop_types8.default.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: import_prop_types8.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types8.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: import_prop_types8.default.string
} : void 0;
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = SvgIcon;

// node_modules/@mui/material/esm/utils/createSvgIcon.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return (0, import_jsx_runtime9.jsx)(SvgIcon_default, {
      "data-testid": true ? `${displayName}Icon` : void 0,
      ref,
      ...props,
      children: path
    });
  }
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React37.memo(React37.forwardRef(Component));
}

// node_modules/@mui/material/esm/utils/debounce.js
var debounce_default = debounce;

// node_modules/@mui/material/esm/utils/isMuiElement.js
var isMuiElement_default = isMuiElement;

// node_modules/@mui/material/esm/utils/ownerDocument.js
var ownerDocument_default = ownerDocument;

// node_modules/@mui/material/esm/utils/ownerWindow.js
var ownerWindow_default = ownerWindow;

// node_modules/@mui/utils/esm/setRef/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

// node_modules/@mui/material/esm/utils/useId.js
var useId_default = useId;

// node_modules/@mui/utils/esm/unsupportedProp/unsupportedProp.js
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (false) {
    return null;
  }
  const propFullNameSafe = propFullName || propName;
  if (typeof props[propName] !== "undefined") {
    return new Error(`The prop \`${propFullNameSafe}\` is not supported. Please remove it.`);
  }
  return null;
}

// node_modules/@mui/material/esm/utils/unsupportedProp.js
var unsupportedProp_default = unsupportedProp;

// node_modules/@mui/material/esm/utils/useControlled.js
var useControlled_default = useControlled;

// node_modules/@mui/material/esm/utils/useEventCallback.js
var useEventCallback_default2 = useEventCallback_default;

// node_modules/@mui/material/esm/utils/mergeSlotProps.js
function isEventHandler(key, value) {
  const thirdCharCode = key.charCodeAt(2);
  return key[0] === "o" && key[1] === "n" && thirdCharCode >= 65 && thirdCharCode <= 90 && typeof value === "function";
}
function mergeSlotProps(externalSlotProps, defaultSlotProps) {
  if (!externalSlotProps) {
    return defaultSlotProps;
  }
  function extractHandlers(externalSlotPropsValue, defaultSlotPropsValue) {
    const handlers2 = {};
    Object.keys(defaultSlotPropsValue).forEach((key) => {
      if (isEventHandler(key, defaultSlotPropsValue[key]) && typeof externalSlotPropsValue[key] === "function") {
        handlers2[key] = (...args) => {
          externalSlotPropsValue[key](...args);
          defaultSlotPropsValue[key](...args);
        };
      }
    });
    return handlers2;
  }
  if (typeof externalSlotProps === "function" || typeof defaultSlotProps === "function") {
    return (ownerState) => {
      const defaultSlotPropsValue = typeof defaultSlotProps === "function" ? defaultSlotProps(ownerState) : defaultSlotProps;
      const externalSlotPropsValue = typeof externalSlotProps === "function" ? externalSlotProps({
        ...ownerState,
        ...defaultSlotPropsValue
      }) : externalSlotProps;
      const className2 = clsx_default(ownerState == null ? void 0 : ownerState.className, defaultSlotPropsValue == null ? void 0 : defaultSlotPropsValue.className, externalSlotPropsValue == null ? void 0 : externalSlotPropsValue.className);
      const handlers2 = extractHandlers(externalSlotPropsValue, defaultSlotPropsValue);
      return {
        ...defaultSlotPropsValue,
        ...externalSlotPropsValue,
        ...handlers2,
        ...!!className2 && {
          className: className2
        },
        ...(defaultSlotPropsValue == null ? void 0 : defaultSlotPropsValue.style) && (externalSlotPropsValue == null ? void 0 : externalSlotPropsValue.style) && {
          style: {
            ...defaultSlotPropsValue.style,
            ...externalSlotPropsValue.style
          }
        },
        ...(defaultSlotPropsValue == null ? void 0 : defaultSlotPropsValue.sx) && (externalSlotPropsValue == null ? void 0 : externalSlotPropsValue.sx) && {
          sx: [...Array.isArray(defaultSlotPropsValue.sx) ? defaultSlotPropsValue.sx : [defaultSlotPropsValue.sx], ...Array.isArray(externalSlotPropsValue.sx) ? externalSlotPropsValue.sx : [externalSlotPropsValue.sx]]
        }
      };
    };
  }
  const typedDefaultSlotProps = defaultSlotProps;
  const handlers = extractHandlers(externalSlotProps, typedDefaultSlotProps);
  const className = clsx_default(typedDefaultSlotProps == null ? void 0 : typedDefaultSlotProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  return {
    ...defaultSlotProps,
    ...externalSlotProps,
    ...handlers,
    ...!!className && {
      className
    },
    ...(typedDefaultSlotProps == null ? void 0 : typedDefaultSlotProps.style) && (externalSlotProps == null ? void 0 : externalSlotProps.style) && {
      style: {
        ...typedDefaultSlotProps.style,
        ...externalSlotProps.style
      }
    },
    ...(typedDefaultSlotProps == null ? void 0 : typedDefaultSlotProps.sx) && (externalSlotProps == null ? void 0 : externalSlotProps.sx) && {
      sx: [...Array.isArray(typedDefaultSlotProps.sx) ? typedDefaultSlotProps.sx : [typedDefaultSlotProps.sx], ...Array.isArray(externalSlotProps.sx) ? externalSlotProps.sx : [externalSlotProps.sx]]
    }
  };
}

// node_modules/@mui/material/esm/FilledInput/FilledInput.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses4 = (ownerState) => {
  const {
    classes,
    disableUnderline,
    startAdornment,
    endAdornment,
    size,
    hiddenLabel,
    multiline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline", startAdornment && "adornedStart", endAdornment && "adornedEnd", size === "small" && `size${capitalize_default(size)}`, hiddenLabel && "hiddenLabel", multiline && "multiline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the InputBase
    ...composedClasses
  };
};
var FilledInputRoot = styled_default(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles4), !ownerState.disableUnderline && styles4.underline];
  }
})(memoTheme_default(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  const bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor = light ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${filledInputClasses_default.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${filledInputClasses_default.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    },
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${filledInputClasses_default.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${filledInputClasses_default.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${filledInputClasses_default.disabled}, .${filledInputClasses_default.error}):before`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
        },
        [`&.${filledInputClasses_default.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => {
      var _a;
      return {
        props: {
          disableUnderline: false,
          color
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(_a = (theme.vars || theme).palette[color]) == null ? void 0 : _a.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState
      }) => ownerState.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState,
        size
      }) => ownerState.multiline && size === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline && ownerState.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline && ownerState.hiddenLabel && ownerState.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
}));
var FilledInputInput = styled_default(InputBaseInput, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(memoTheme_default(({
  theme
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!theme.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
      caretColor: theme.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...theme.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [theme.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hiddenLabel && ownerState.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
})));
var FilledInput = React38.forwardRef(function FilledInput2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiFilledInput"
  });
  const {
    disableUnderline = false,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    hiddenLabel,
    // declare here to prevent spreading to DOM
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text",
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableUnderline,
    fullWidth,
    inputComponent,
    multiline,
    type
  };
  const classes = useUtilityClasses4(props);
  const filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  };
  const componentsProps = slotProps ?? componentsPropsProp ? deepmerge(filledInputComponentsProps, slotProps ?? componentsPropsProp) : filledInputComponentsProps;
  const RootSlot = slots.root ?? components.Root ?? FilledInputRoot;
  const InputSlot = slots.input ?? components.Input ?? FilledInputInput;
  return (0, import_jsx_runtime10.jsx)(InputBase_default, {
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type,
    ...other,
    classes
  });
});
true ? FilledInput.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types9.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types9.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types9.default.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["primary", "secondary"]), import_prop_types9.default.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: import_prop_types9.default.shape({
    Input: import_prop_types9.default.elementType,
    Root: import_prop_types9.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: import_prop_types9.default.shape({
    input: import_prop_types9.default.object,
    root: import_prop_types9.default.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types9.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types9.default.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: import_prop_types9.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types9.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types9.default.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types9.default.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types9.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types9.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: import_prop_types9.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: import_prop_types9.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: import_prop_types9.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types9.default.oneOfType([import_prop_types9.default.number, import_prop_types9.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types9.default.oneOfType([import_prop_types9.default.number, import_prop_types9.default.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: import_prop_types9.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types9.default.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types9.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types9.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types9.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types9.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types9.default.oneOfType([import_prop_types9.default.number, import_prop_types9.default.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types9.default.shape({
    input: import_prop_types9.default.object,
    root: import_prop_types9.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types9.default.shape({
    input: import_prop_types9.default.elementType,
    root: import_prop_types9.default.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types9.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: import_prop_types9.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types9.default.any
} : void 0;
FilledInput.muiName = "Input";
var FilledInput_default = FilledInput;

// node_modules/@mui/material/esm/OutlinedInput/OutlinedInput.js
var React40 = __toESM(require_react(), 1);
var import_prop_types11 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/OutlinedInput/NotchedOutline.js
var React39 = __toESM(require_react(), 1);
var import_prop_types10 = __toESM(require_prop_types(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var _span;
var NotchedOutlineRoot = styled_default("fieldset", {
  shouldForwardProp: rootShouldForwardProp_default
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
});
var NotchedOutlineLegend = styled_default("legend", {
  shouldForwardProp: rootShouldForwardProp_default
})(memoTheme_default(({
  theme
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: theme.transitions.create("width", {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: theme.transitions.create("max-width", {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.withLabel && ownerState.notched,
    style: {
      maxWidth: "100%",
      transition: theme.transitions.create("max-width", {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function NotchedOutline(props) {
  const {
    children: children2,
    classes,
    className,
    label,
    notched,
    ...other
  } = props;
  const withLabel = label != null && label !== "";
  const ownerState = {
    ...props,
    notched,
    withLabel
  };
  return (0, import_jsx_runtime11.jsx)(NotchedOutlineRoot, {
    "aria-hidden": true,
    className,
    ownerState,
    ...other,
    children: (0, import_jsx_runtime11.jsx)(NotchedOutlineLegend, {
      ownerState,
      children: withLabel ? (0, import_jsx_runtime11.jsx)("span", {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span || (_span = (0, import_jsx_runtime11.jsx)("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "​"
        }))
      )
    })
  });
}
true ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: import_prop_types10.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types10.default.object,
  /**
   * @ignore
   */
  className: import_prop_types10.default.string,
  /**
   * The label.
   */
  label: import_prop_types10.default.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: import_prop_types10.default.bool.isRequired,
  /**
   * @ignore
   */
  style: import_prop_types10.default.object
} : void 0;

// node_modules/@mui/material/esm/OutlinedInput/outlinedInputClasses.js
function getOutlinedInputUtilityClass(slot) {
  return generateUtilityClass("MuiOutlinedInput", slot);
}
var outlinedInputClasses = {
  ...inputBaseClasses_default,
  ...generateUtilityClasses("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
var outlinedInputClasses_default = outlinedInputClasses;

// node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
function isHostComponent2(element) {
  return typeof element === "string";
}
var isHostComponent_default2 = isHostComponent2;

// node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent_default2(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}
var appendOwnerState_default = appendOwnerState;

// node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
var extractEventHandlers_default = extractEventHandlers;

// node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
var omitEventHandlers_default = omitEventHandlers;

// node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js
function mergeSlotProps2(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx_default(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle2 = {
      ...additionalProps == null ? void 0 : additionalProps.style,
      ...externalForwardedProps == null ? void 0 : externalForwardedProps.style,
      ...externalSlotProps == null ? void 0 : externalSlotProps.style
    };
    const props2 = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers_default({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers_default(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers_default(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx_default(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = {
    ...internalSlotProps == null ? void 0 : internalSlotProps.style,
    ...additionalProps == null ? void 0 : additionalProps.style,
    ...externalForwardedProps == null ? void 0 : externalForwardedProps.style,
    ...externalSlotProps == null ? void 0 : externalSlotProps.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
var mergeSlotProps_default = mergeSlotProps2;

// node_modules/@mui/material/esm/utils/useSlot.js
function useSlot(name, parameters) {
  const {
    className,
    elementType: initialElementType,
    ownerState,
    externalForwardedProps,
    internalForwardedProps,
    shouldForwardComponentProp = false,
    ...useSlotPropsParams
  } = parameters;
  const {
    component: rootComponent,
    slots = {
      [name]: void 0
    },
    slotProps = {
      [name]: void 0
    },
    ...other
  } = externalForwardedProps;
  const elementType = slots[name] || initialElementType;
  const resolvedComponentsProps = resolveComponentProps_default(slotProps[name], ownerState);
  const {
    props: {
      component: slotComponent,
      ...mergedProps
    },
    internalRef
  } = mergeSlotProps_default({
    className,
    ...useSlotPropsParams,
    externalForwardedProps: name === "root" ? other : void 0,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, parameters.ref);
  const LeafComponent = name === "root" ? slotComponent || rootComponent : slotComponent;
  const props = appendOwnerState_default(elementType, {
    ...name === "root" && !rootComponent && !slots[name] && internalForwardedProps,
    ...name !== "root" && !slots[name] && internalForwardedProps,
    ...mergedProps,
    ...LeafComponent && !shouldForwardComponentProp && {
      as: LeafComponent
    },
    ...LeafComponent && shouldForwardComponentProp && {
      component: LeafComponent
    },
    ref
  }, ownerState);
  return [elementType, props];
}

// node_modules/@mui/material/esm/OutlinedInput/OutlinedInput.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses5 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the InputBase
    ...composedClasses
  };
};
var OutlinedInputRoot = styled_default(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(memoTheme_default(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${outlinedInputClasses_default.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
      }
    },
    [`&.${outlinedInputClasses_default.focused} .${outlinedInputClasses_default.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color
      },
      style: {
        [`&.${outlinedInputClasses_default.focused} .${outlinedInputClasses_default.notchedOutline}`]: {
          borderColor: (theme.vars || theme).palette[color].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${outlinedInputClasses_default.error} .${outlinedInputClasses_default.notchedOutline}`]: {
          borderColor: (theme.vars || theme).palette.error.main
        },
        [`&.${outlinedInputClasses_default.disabled} .${outlinedInputClasses_default.notchedOutline}`]: {
          borderColor: (theme.vars || theme).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState,
        size
      }) => ownerState.multiline && size === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
}));
var NotchedOutlineRoot2 = styled_default(NotchedOutline, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(memoTheme_default(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
  };
}));
var OutlinedInputInput = styled_default(InputBaseInput, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(memoTheme_default(({
  theme
}) => ({
  padding: "16.5px 14px",
  ...!theme.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
      caretColor: theme.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...theme.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [theme.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
})));
var OutlinedInput = React40.forwardRef(function OutlinedInput2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiOutlinedInput"
  });
  const {
    components = {},
    fullWidth = false,
    inputComponent = "input",
    label,
    multiline = false,
    notched,
    slots = {},
    slotProps = {},
    type = "text",
    ...other
  } = props;
  const classes = useUtilityClasses5(props);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  });
  const ownerState = {
    ...props,
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    type
  };
  const RootSlot = slots.root ?? components.Root ?? OutlinedInputRoot;
  const InputSlot = slots.input ?? components.Input ?? OutlinedInputInput;
  const [NotchedSlot, notchedProps] = useSlot("notchedOutline", {
    elementType: NotchedOutlineRoot2,
    className: classes.notchedOutline,
    shouldForwardComponentProp: true,
    ownerState,
    externalForwardedProps: {
      slots,
      slotProps
    },
    additionalProps: {
      label: label != null && label !== "" && fcs.required ? (0, import_jsx_runtime12.jsxs)(React40.Fragment, {
        children: [label, " ", "*"]
      }) : label
    }
  });
  return (0, import_jsx_runtime12.jsx)(InputBase_default, {
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps,
    renderSuffix: (state) => (0, import_jsx_runtime12.jsx)(NotchedSlot, {
      ...notchedProps,
      notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type,
    ...other,
    classes: {
      ...classes,
      notchedOutline: null
    }
  });
});
true ? OutlinedInput.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types11.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types11.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types11.default.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["primary", "secondary"]), import_prop_types11.default.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: import_prop_types11.default.shape({
    Input: import_prop_types11.default.elementType,
    Root: import_prop_types11.default.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types11.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types11.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types11.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types11.default.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types11.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types11.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: import_prop_types11.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: import_prop_types11.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: import_prop_types11.default.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: import_prop_types11.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types11.default.oneOfType([import_prop_types11.default.number, import_prop_types11.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types11.default.oneOfType([import_prop_types11.default.number, import_prop_types11.default.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: import_prop_types11.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types11.default.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: import_prop_types11.default.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types11.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types11.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types11.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types11.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types11.default.oneOfType([import_prop_types11.default.number, import_prop_types11.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types11.default.shape({
    input: import_prop_types11.default.object,
    notchedOutline: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    root: import_prop_types11.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types11.default.shape({
    input: import_prop_types11.default.elementType,
    notchedOutline: import_prop_types11.default.elementType,
    root: import_prop_types11.default.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types11.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: import_prop_types11.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types11.default.any
} : void 0;
OutlinedInput.muiName = "Input";
var OutlinedInput_default = OutlinedInput;

// node_modules/@mui/material/esm/InputLabel/InputLabel.js
var React42 = __toESM(require_react(), 1);
var import_prop_types13 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/FormLabel/FormLabel.js
var React41 = __toESM(require_react(), 1);
var import_prop_types12 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/FormLabel/formLabelClasses.js
function getFormLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormLabel", slot);
}
var formLabelClasses = generateUtilityClasses("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
var formLabelClasses_default = formLabelClasses;

// node_modules/@mui/material/esm/FormLabel/FormLabel.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses6 = (ownerState) => {
  const {
    classes,
    color,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize_default(color)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormLabelUtilityClasses, classes);
};
var FormLabelRoot = styled_default("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.color === "secondary" && styles4.colorSecondary, ownerState.filled && styles4.filled];
  }
})(memoTheme_default(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${formLabelClasses_default.focused}`]: {
        color: (theme.vars || theme).palette[color].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${formLabelClasses_default.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      },
      [`&.${formLabelClasses_default.error}`]: {
        color: (theme.vars || theme).palette.error.main
      }
    }
  }]
})));
var AsteriskComponent = styled_default("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(memoTheme_default(({
  theme
}) => ({
  [`&.${formLabelClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
var FormLabel = React41.forwardRef(function FormLabel2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiFormLabel"
  });
  const {
    children: children2,
    className,
    color,
    component = "label",
    disabled,
    error,
    filled,
    focused,
    required,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  const ownerState = {
    ...props,
    color: fcs.color || "primary",
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  };
  const classes = useUtilityClasses6(ownerState);
  return (0, import_jsx_runtime13.jsxs)(FormLabelRoot, {
    as: component,
    ownerState,
    className: clsx_default(classes.root, className),
    ref,
    ...other,
    children: [children2, fcs.required && (0, import_jsx_runtime13.jsxs)(AsteriskComponent, {
      ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: [" ", "*"]
    })]
  });
});
true ? FormLabel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types12.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types12.default.object,
  /**
   * @ignore
   */
  className: import_prop_types12.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), import_prop_types12.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types12.default.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: import_prop_types12.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: import_prop_types12.default.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: import_prop_types12.default.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: import_prop_types12.default.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: import_prop_types12.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object])
} : void 0;
var FormLabel_default = FormLabel;

// node_modules/@mui/material/esm/InputLabel/inputLabelClasses.js
function getInputLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiInputLabel", slot);
}
var inputLabelClasses = generateUtilityClasses("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);

// node_modules/@mui/material/esm/InputLabel/InputLabel.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses7 = (ownerState) => {
  const {
    classes,
    formControl,
    size,
    shrink,
    disableAnimation,
    variant,
    required
  } = ownerState;
  const slots = {
    root: ["root", formControl && "formControl", !disableAnimation && "animated", shrink && "shrink", size && size !== "medium" && `size${capitalize_default(size)}`, variant],
    asterisk: [required && "asterisk"]
  };
  const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
  return {
    ...classes,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...composedClasses
  };
};
var InputLabelRoot = styled_default(FormLabel_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formLabelClasses_default.asterisk}`]: styles4.asterisk
    }, styles4.root, ownerState.formControl && styles4.formControl, ownerState.size === "small" && styles4.sizeSmall, ownerState.shrink && styles4.shrink, !ownerState.disableAnimation && styles4.animated, ownerState.focused && styles4.focused, styles4[ownerState.variant]];
  }
})(memoTheme_default(({
  theme
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disableAnimation,
    style: {
      transition: theme.transitions.create(["color", "transform", "max-width"], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant,
      ownerState
    }) => variant === "filled" && ownerState.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant,
      ownerState,
      size
    }) => variant === "filled" && ownerState.shrink && size === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant,
      ownerState
    }) => variant === "outlined" && ownerState.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
})));
var InputLabel = React42.forwardRef(function InputLabel2(inProps, ref) {
  const props = useDefaultProps2({
    name: "MuiInputLabel",
    props: inProps
  });
  const {
    disableAnimation = false,
    margin,
    shrink: shrinkProp,
    variant,
    className,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  let shrink = shrinkProp;
  if (typeof shrink === "undefined" && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["size", "variant", "required", "focused"]
  });
  const ownerState = {
    ...props,
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required,
    focused: fcs.focused
  };
  const classes = useUtilityClasses7(ownerState);
  return (0, import_jsx_runtime14.jsx)(InputLabelRoot, {
    "data-shrink": shrink,
    ref,
    className: clsx_default(classes.root, className),
    ...other,
    ownerState,
    classes
  });
});
true ? InputLabel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types13.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types13.default.object,
  /**
   * @ignore
   */
  className: import_prop_types13.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), import_prop_types13.default.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: import_prop_types13.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types13.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: import_prop_types13.default.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: import_prop_types13.default.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types13.default.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: import_prop_types13.default.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: import_prop_types13.default.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["medium", "small"]), import_prop_types13.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object, import_prop_types13.default.bool])), import_prop_types13.default.func, import_prop_types13.default.object]),
  /**
   * The variant to use.
   */
  variant: import_prop_types13.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var InputLabel_default = InputLabel;

// node_modules/@mui/material/esm/FormControl/FormControl.js
var React43 = __toESM(require_react(), 1);
var import_prop_types14 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/FormControl/formControlClasses.js
function getFormControlUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
var formControlClasses = generateUtilityClasses("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);

// node_modules/@mui/material/esm/FormControl/FormControl.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses8 = (ownerState) => {
  const {
    classes,
    margin,
    fullWidth
  } = ownerState;
  const slots = {
    root: ["root", margin !== "none" && `margin${capitalize_default(margin)}`, fullWidth && "fullWidth"]
  };
  return composeClasses(slots, getFormControlUtilityClasses, classes);
};
var FormControlRoot = styled_default("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, styles4[`margin${capitalize_default(ownerState.margin)}`], ownerState.fullWidth && styles4.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: true
    },
    style: {
      width: "100%"
    }
  }]
});
var FormControl = React43.forwardRef(function FormControl2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiFormControl"
  });
  const {
    children: children2,
    className,
    color = "primary",
    component = "div",
    disabled = false,
    error = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin = "none",
    required = false,
    size = "medium",
    variant = "outlined",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin,
    required,
    size,
    variant
  };
  const classes = useUtilityClasses8(ownerState);
  const [adornedStart, setAdornedStart] = React43.useState(() => {
    let initialAdornedStart = false;
    if (children2) {
      React43.Children.forEach(children2, (child) => {
        if (!isMuiElement_default(child, ["Input", "Select"])) {
          return;
        }
        const input = isMuiElement_default(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });
  const [filled, setFilled] = React43.useState(() => {
    let initialFilled = false;
    if (children2) {
      React43.Children.forEach(children2, (child) => {
        if (!isMuiElement_default(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  });
  const [focusedState, setFocused] = React43.useState(false);
  if (disabled && focusedState) {
    setFocused(false);
  }
  const focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState;
  let registerEffect;
  const registeredInput = React43.useRef(false);
  if (true) {
    registerEffect = () => {
      if (registeredInput.current) {
        console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join("\n"));
      }
      registeredInput.current = true;
      return () => {
        registeredInput.current = false;
      };
    };
  }
  const onFilled = React43.useCallback(() => {
    setFilled(true);
  }, []);
  const onEmpty = React43.useCallback(() => {
    setFilled(false);
  }, []);
  const childContext = React43.useMemo(() => {
    return {
      adornedStart,
      setAdornedStart,
      color,
      disabled,
      error,
      filled,
      focused,
      fullWidth,
      hiddenLabel,
      size,
      onBlur: () => {
        setFocused(false);
      },
      onFocus: () => {
        setFocused(true);
      },
      onEmpty,
      onFilled,
      registerEffect,
      required,
      variant
    };
  }, [adornedStart, color, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, onEmpty, onFilled, required, size, variant]);
  return (0, import_jsx_runtime15.jsx)(FormControlContext_default.Provider, {
    value: childContext,
    children: (0, import_jsx_runtime15.jsx)(FormControlRoot, {
      as: component,
      ownerState,
      className: clsx_default(classes.root, className),
      ref,
      ...other,
      children: children2
    })
  });
});
true ? FormControl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types14.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types14.default.object,
  /**
   * @ignore
   */
  className: import_prop_types14.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), import_prop_types14.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types14.default.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: import_prop_types14.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: import_prop_types14.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types14.default.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types14.default.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types14.default.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types14.default.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: import_prop_types14.default.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["medium", "small"]), import_prop_types14.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types14.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var FormControl_default = FormControl;

// node_modules/@mui/material/esm/FormHelperText/FormHelperText.js
var React44 = __toESM(require_react(), 1);
var import_prop_types15 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/FormHelperText/formHelperTextClasses.js
function getFormHelperTextUtilityClasses(slot) {
  return generateUtilityClass("MuiFormHelperText", slot);
}
var formHelperTextClasses = generateUtilityClasses("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var formHelperTextClasses_default = formHelperTextClasses;

// node_modules/@mui/material/esm/FormHelperText/FormHelperText.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var _span2;
var useUtilityClasses9 = (ownerState) => {
  const {
    classes,
    contained,
    size,
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", size && `size${capitalize_default(size)}`, contained && "contained", focused && "focused", filled && "filled", required && "required"]
  };
  return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
};
var FormHelperTextRoot = styled_default("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.size && styles4[`size${capitalize_default(ownerState.size)}`], ownerState.contained && styles4.contained, ownerState.filled && styles4.filled];
  }
})(memoTheme_default(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formHelperTextClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formHelperTextClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
})));
var FormHelperText = React44.forwardRef(function FormHelperText2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiFormHelperText"
  });
  const {
    children: children2,
    className,
    component = "p",
    disabled,
    error,
    filled,
    focused,
    margin,
    required,
    variant,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  });
  const ownerState = {
    ...props,
    component,
    contained: fcs.variant === "filled" || fcs.variant === "outlined",
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  };
  delete ownerState.ownerState;
  const classes = useUtilityClasses9(ownerState);
  return (0, import_jsx_runtime16.jsx)(FormHelperTextRoot, {
    as: component,
    className: clsx_default(classes.root, className),
    ref,
    ...other,
    ownerState,
    children: children2 === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      _span2 || (_span2 = (0, import_jsx_runtime16.jsx)("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "​"
      }))
    ) : children2
  });
});
true ? FormHelperText.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: import_prop_types15.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types15.default.object,
  /**
   * @ignore
   */
  className: import_prop_types15.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types15.default.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: import_prop_types15.default.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: import_prop_types15.default.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: import_prop_types15.default.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: import_prop_types15.default.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types15.default.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: import_prop_types15.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object]),
  /**
   * The variant to use.
   */
  variant: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["filled", "outlined", "standard"]), import_prop_types15.default.string])
} : void 0;
var FormHelperText_default = FormHelperText;

// node_modules/@mui/material/esm/Select/Select.js
var React68 = __toESM(require_react(), 1);
var import_prop_types36 = __toESM(require_prop_types(), 1);

// node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var React45 = __toESM(require_react(), 1);
function getReactElementRef(element) {
  var _a;
  if (parseInt(React45.version, 10) >= 19) {
    return ((_a = element == null ? void 0 : element.props) == null ? void 0 : _a.ref) || null;
  }
  return (element == null ? void 0 : element.ref) || null;
}

// node_modules/@mui/material/esm/Select/SelectInput.js
var React66 = __toESM(require_react(), 1);
var import_react_is3 = __toESM(require_react_is(), 1);
var import_prop_types35 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Menu/Menu.js
var React64 = __toESM(require_react(), 1);
var import_react_is2 = __toESM(require_react_is(), 1);
var import_prop_types33 = __toESM(require_prop_types(), 1);

// node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {
    return null;
  }
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an HTMLElement.`);
  }
  return null;
}

// node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
function useSlotProps(parameters) {
  var _a;
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false,
    ...other
  } = parameters;
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps_default(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps_default({
    ...other,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_a = parameters.additionalProps) == null ? void 0 : _a.ref);
  const props = appendOwnerState_default(elementType, {
    ...mergedProps,
    ref
  }, ownerState);
  return props;
}
var useSlotProps_default = useSlotProps;

// node_modules/@mui/material/esm/MenuList/MenuList.js
var React48 = __toESM(require_react(), 1);
var import_react_is = __toESM(require_react_is(), 1);
var import_prop_types17 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/List/List.js
var React47 = __toESM(require_react(), 1);
var import_prop_types16 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/List/ListContext.js
var React46 = __toESM(require_react(), 1);
var ListContext = React46.createContext({});
if (true) {
  ListContext.displayName = "ListContext";
}
var ListContext_default = ListContext;

// node_modules/@mui/material/esm/List/listClasses.js
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
var listClasses = generateUtilityClasses("MuiList", ["root", "padding", "dense", "subheader"]);

// node_modules/@mui/material/esm/List/List.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses10 = (ownerState) => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
  };
  return composeClasses(slots, getListUtilityClass, classes);
};
var ListRoot = styled_default("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, !ownerState.disablePadding && styles4.padding, ownerState.dense && styles4.dense, ownerState.subheader && styles4.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.subheader,
    style: {
      paddingTop: 0
    }
  }]
});
var List = React47.forwardRef(function List2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiList"
  });
  const {
    children: children2,
    className,
    component = "ul",
    dense = false,
    disablePadding = false,
    subheader,
    ...other
  } = props;
  const context = React47.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = {
    ...props,
    component,
    dense,
    disablePadding
  };
  const classes = useUtilityClasses10(ownerState);
  return (0, import_jsx_runtime17.jsx)(ListContext_default.Provider, {
    value: context,
    children: (0, import_jsx_runtime17.jsxs)(ListRoot, {
      as: component,
      className: clsx_default(classes.root, className),
      ref,
      ownerState,
      ...other,
      children: [subheader, children2]
    })
  });
});
true ? List.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types16.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types16.default.object,
  /**
   * @ignore
   */
  className: import_prop_types16.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types16.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: import_prop_types16.default.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: import_prop_types16.default.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: import_prop_types16.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object])
} : void 0;
var List_default = List;

// node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js
function getScrollbarSize(win = window) {
  const documentWidth = win.document.documentElement.clientWidth;
  return win.innerWidth - documentWidth;
}

// node_modules/@mui/material/esm/utils/getScrollbarSize.js
var getScrollbarSize_default = getScrollbarSize;

// node_modules/@mui/material/esm/MenuList/MenuList.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.startsWith(textCriteria.keys.join(""));
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}
var MenuList = React48.forwardRef(function MenuList2(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children: children2,
    className,
    disabledItemsFocusable = false,
    disableListWrap = false,
    onKeyDown,
    variant = "selectedMenu",
    ...other
  } = props;
  const listRef = React48.useRef(null);
  const textCriteriaRef = React48.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect_default2(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  React48.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, {
      direction
    }) => {
      const noExplicitWidth = !listRef.current.style.width;
      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = `${getScrollbarSize_default(ownerWindow_default(containerElement))}px`;
        listRef.current.style[direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
        listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }
      return listRef.current;
    }
  }), []);
  const handleKeyDown = (event) => {
    const list = listRef.current;
    const key = event.key;
    const isModifierKeyPressed = event.ctrlKey || event.metaKey || event.altKey;
    if (isModifierKeyPressed) {
      if (onKeyDown) {
        onKeyDown(event);
      }
      return;
    }
    const currentFocus = ownerDocument_default(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleRef = useForkRef_default(listRef, ref);
  let activeItemIndex = -1;
  React48.Children.forEach(children2, (child, index) => {
    if (!React48.isValidElement(child)) {
      if (activeItemIndex === index) {
        activeItemIndex += 1;
        if (activeItemIndex >= children2.length) {
          activeItemIndex = -1;
        }
      }
      return;
    }
    if (true) {
      if ((0, import_react_is.isFragment)(child)) {
        console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
    if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
      activeItemIndex += 1;
      if (activeItemIndex >= children2.length) {
        activeItemIndex = -1;
      }
    }
  });
  const items = React48.Children.map(children2, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return React48.cloneElement(child, newChildProps);
    }
    return child;
  });
  return (0, import_jsx_runtime18.jsx)(List_default, {
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1,
    ...other,
    children: items
  });
});
true ? MenuList.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: import_prop_types17.default.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: import_prop_types17.default.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: import_prop_types17.default.node,
  /**
   * @ignore
   */
  className: import_prop_types17.default.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: import_prop_types17.default.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: import_prop_types17.default.bool,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types17.default.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: import_prop_types17.default.oneOf(["menu", "selectedMenu"])
} : void 0;
var MenuList_default = MenuList;

// node_modules/@mui/material/esm/Popover/Popover.js
var React63 = __toESM(require_react(), 1);
var import_prop_types32 = __toESM(require_prop_types(), 1);

// node_modules/@mui/utils/esm/integerPropType/integerPropType.js
function getTypeByValue(value) {
  const valueType = typeof value;
  switch (valueType) {
    case "number":
      if (Number.isNaN(value)) {
        return "NaN";
      }
      if (!Number.isFinite(value)) {
        return "Infinity";
      }
      if (value !== Math.floor(value)) {
        return "float";
      }
      return "number";
    case "object":
      if (value === null) {
        return "null";
      }
      return value.constructor.name;
    default:
      return valueType;
  }
}
function requiredInteger(props, propName, componentName, location) {
  const propValue = props[propName];
  if (propValue == null || !Number.isInteger(propValue)) {
    const propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }
  return null;
}
function validator(props, propName, componentName, location) {
  const propValue = props[propName];
  if (propValue === void 0) {
    return null;
  }
  return requiredInteger(props, propName, componentName, location);
}
function validatorNoop() {
  return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
var integerPropType = false ? validatorNoop : validator;
var integerPropType_default = integerPropType;

// node_modules/@mui/material/esm/Grow/Grow.js
var React55 = __toESM(require_react(), 1);
var import_prop_types25 = __toESM(require_prop_types(), 1);

// node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js
var import_prop_types18 = __toESM(require_prop_types(), 1);
function isClassComponent2(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;
  if (element == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  const elementType = element.type;
  if (typeof elementType === "function" && !isClassComponent2(elementType)) {
    warningHint = "Did you accidentally use a plain function component for an element instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var elementAcceptingRef = chainPropTypes(import_prop_types18.default.element, acceptingRef);
elementAcceptingRef.isRequired = chainPropTypes(import_prop_types18.default.element.isRequired, acceptingRef);
var elementAcceptingRef_default = elementAcceptingRef;

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/react-transition-group/esm/CSSTransition.js
var import_prop_types21 = __toESM(require_prop_types());

// node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
  else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/react-transition-group/esm/CSSTransition.js
var import_react3 = __toESM(require_react());

// node_modules/react-transition-group/esm/Transition.js
var import_prop_types20 = __toESM(require_prop_types());
var import_react2 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types19 = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types19.default.oneOfType([import_prop_types19.default.number, import_prop_types19.default.shape({
  enter: import_prop_types19.default.number,
  exit: import_prop_types19.default.number,
  appear: import_prop_types19.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types19.default.oneOfType([import_prop_types19.default.string, import_prop_types19.default.shape({
  enter: import_prop_types19.default.string,
  exit: import_prop_types19.default.string,
  active: import_prop_types19.default.string
}), import_prop_types19.default.shape({
  enter: import_prop_types19.default.string,
  enterDone: import_prop_types19.default.string,
  enterActive: import_prop_types19.default.string,
  exit: import_prop_types19.default.string,
  exitDone: import_prop_types19.default.string,
  exitActive: import_prop_types19.default.string
})]) : null;

// node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react = __toESM(require_react());
var TransitionGroupContext_default = import_react.default.createContext(null);

// node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};

// node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
          if (node) forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children2 = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      import_react2.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children2 === "function" ? children2(status, childProps) : import_react2.default.cloneElement(import_react2.default.Children.only(children2), childProps))
    );
  };
  return Transition2;
}(import_react2.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types20.default.shape({
    current: typeof Element === "undefined" ? import_prop_types20.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types20.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types20.default.oneOfType([import_prop_types20.default.func.isRequired, import_prop_types20.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types20.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types20.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types20.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types20.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types20.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types20.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types20.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types20.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types20.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types20.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types20.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types20.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types20.default.func
} : {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = function addClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return addClass(node, c);
  });
};
var removeClass2 = function removeClass3(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return removeClass(node, c);
  });
};
var CSSTransition = function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === "string";
      var prefix = isStringClassNames && classNames ? classNames + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass3(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node) forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass2(node, baseClassName);
    }
    if (activeClassName) {
      removeClass2(node, activeClassName);
    }
    if (doneClassName) {
      removeClass2(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, _ = _this$props.classNames, props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return import_react3.default.createElement(Transition_default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(import_react3.default.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = true ? _extends({}, Transition_default.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: import_prop_types21.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types21.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: import_prop_types21.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: import_prop_types21.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: import_prop_types21.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: import_prop_types21.default.func
}) : {};

// node_modules/react-transition-group/esm/ReplaceTransition.js
var import_prop_types23 = __toESM(require_prop_types());
var import_react6 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types22 = __toESM(require_prop_types());
var import_react5 = __toESM(require_react());

// node_modules/react-transition-group/esm/utils/ChildMapping.js
var import_react4 = __toESM(require_react());
function getChildMapping(children2, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && (0, import_react4.isValidElement)(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children2) import_react4.Children.map(children2, function(c) {
    return c;
  }).forEach(function(child) {
    result[child.key] = mapper(child);
  });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return (0, import_react4.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children2 = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children2).forEach(function(key) {
    var child = children2[key];
    if (!(0, import_react4.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, import_react4.isValidElement)(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children2[key] = (0, import_react4.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children2[key] = (0, import_react4.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, import_react4.isValidElement)(prevChild)) {
      children2[key] = (0, import_react4.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children2;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children2 = _extends({}, state.children);
        delete children2[child.key];
        return {
          children: children2
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children2 = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return import_react5.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children2);
    }
    return import_react5.default.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, import_react5.default.createElement(Component, props, children2));
  };
  return TransitionGroup2;
}(import_react5.default.Component);
TransitionGroup.propTypes = true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: import_prop_types22.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: import_prop_types22.default.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: import_prop_types22.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: import_prop_types22.default.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: import_prop_types22.default.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: import_prop_types22.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup_default = TransitionGroup;

// node_modules/react-transition-group/esm/ReplaceTransition.js
var ReplaceTransition = function(_React$Component) {
  _inheritsLoose(ReplaceTransition2, _React$Component);
  function ReplaceTransition2() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.handleEnter = function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return _this.handleLifecycle("onEnter", 0, args);
    };
    _this.handleEntering = function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return _this.handleLifecycle("onEntering", 0, args);
    };
    _this.handleEntered = function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return _this.handleLifecycle("onEntered", 0, args);
    };
    _this.handleExit = function() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return _this.handleLifecycle("onExit", 1, args);
    };
    _this.handleExiting = function() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return _this.handleLifecycle("onExiting", 1, args);
    };
    _this.handleExited = function() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      return _this.handleLifecycle("onExited", 1, args);
    };
    return _this;
  }
  var _proto = ReplaceTransition2.prototype;
  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;
    var children2 = this.props.children;
    var child = import_react6.default.Children.toArray(children2)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? void 0 : import_react_dom2.default.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, children2 = _this$props.children, inProp = _this$props.in, props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);
    var _React$Children$toArr = import_react6.default.Children.toArray(children2), first = _React$Children$toArr[0], second = _React$Children$toArr[1];
    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return import_react6.default.createElement(TransitionGroup_default, props, inProp ? import_react6.default.cloneElement(first, {
      key: "first",
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : import_react6.default.cloneElement(second, {
      key: "second",
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };
  return ReplaceTransition2;
}(import_react6.default.Component);
ReplaceTransition.propTypes = true ? {
  in: import_prop_types23.default.bool.isRequired,
  children: function children(props, propName) {
    if (import_react6.default.Children.count(props[propName]) !== 2) return new Error('"' + propName + '" must be exactly two transition components.');
    return null;
  }
} : {};

// node_modules/react-transition-group/esm/SwitchTransition.js
var import_react7 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());
var _leaveRenders;
var _enterRenders;
function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;
  if (import_react7.default.isValidElement(oldChildren) && import_react7.default.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }
  return true;
}
var modes = {
  out: "out-in",
  in: "in-out"
};
var callHook = function callHook2(element, name, cb) {
  return function() {
    var _element$props;
    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};
var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function(_ref) {
  var current = _ref.current, changeState = _ref.changeState;
  return import_react7.default.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function(_ref2) {
  var current = _ref2.current, changeState = _ref2.changeState, children2 = _ref2.children;
  return [current, import_react7.default.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function(_ref3) {
  var children2 = _ref3.children, changeState = _ref3.changeState;
  return import_react7.default.cloneElement(children2, {
    in: true,
    onEntered: callHook(children2, "onEntered", function() {
      changeState(ENTERED, import_react7.default.cloneElement(children2, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function(_ref4) {
  var current = _ref4.current, children2 = _ref4.children, changeState = _ref4.changeState;
  return [import_react7.default.cloneElement(current, {
    in: false,
    onExited: callHook(current, "onExited", function() {
      changeState(ENTERED, import_react7.default.cloneElement(children2, {
        in: true
      }));
    })
  }), import_react7.default.cloneElement(children2, {
    in: true
  })];
}, _enterRenders);
var SwitchTransition = function(_React$Component) {
  _inheritsLoose(SwitchTransition2, _React$Component);
  function SwitchTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: ENTERED,
      current: null
    };
    _this.appeared = false;
    _this.changeState = function(status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }
      _this.setState({
        status,
        current
      });
    };
    return _this;
  }
  var _proto = SwitchTransition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };
  SwitchTransition2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }
    if (state.status === ENTERING && props.mode === modes.in) {
      return {
        status: ENTERING
      };
    }
    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: EXITING
      };
    }
    return {
      current: import_react7.default.cloneElement(props.children, {
        in: true
      })
    };
  };
  _proto.render = function render() {
    var _this$props = this.props, children2 = _this$props.children, mode = _this$props.mode, _this$state = this.state, status = _this$state.status, current = _this$state.current;
    var data = {
      children: children2,
      current,
      changeState: this.changeState,
      status
    };
    var component;
    switch (status) {
      case ENTERING:
        component = enterRenders[mode](data);
        break;
      case EXITING:
        component = leaveRenders[mode](data);
        break;
      case ENTERED:
        component = current;
    }
    return import_react7.default.createElement(TransitionGroupContext_default.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };
  return SwitchTransition2;
}(import_react7.default.Component);
SwitchTransition.propTypes = true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: import_prop_types24.default.oneOf([modes.in, modes.out]),
  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: import_prop_types24.default.oneOfType([import_prop_types24.default.element.isRequired])
} : {};
SwitchTransition.defaultProps = {
  mode: modes.out
};

// node_modules/@mui/material/esm/transitions/utils.js
var reflow = (node) => node.scrollTop;
function getTransitionProps(props, options) {
  const {
    timeout: timeout2,
    easing,
    style = {}
  } = props;
  return {
    duration: style.transitionDuration ?? (typeof timeout2 === "number" ? timeout2 : timeout2[options.mode] || 0),
    easing: style.transitionTimingFunction ?? (typeof easing === "object" ? easing[options.mode] : easing),
    delay: style.transitionDelay
  };
}

// node_modules/@mui/material/esm/Grow/Grow.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
var styles2 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
var isWebKit154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
var Grow = React55.forwardRef(function Grow2(props, ref) {
  const {
    addEndListener,
    appear = true,
    children: children2,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout: timeout2 = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition_default,
    ...other
  } = props;
  const timer = useTimeout();
  const autoTimeout = React55.useRef();
  const theme = useTheme();
  const nodeRef = React55.useRef(null);
  const handleRef = useForkRef_default(nodeRef, getReactElementRef(children2), ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout: timeout2,
      easing
    }, {
      mode: "enter"
    });
    let duration;
    if (timeout2 === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(",");
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout: timeout2,
      easing
    }, {
      mode: "exit"
    });
    let duration;
    if (timeout2 === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay: isWebKit154 ? delay : delay || duration * 0.333,
      easing: transitionTimingFunction
    })].join(",");
    node.style.opacity = 0;
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (timeout2 === "auto") {
      timer.start(autoTimeout.current || 0, next);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return (0, import_jsx_runtime19.jsx)(TransitionComponent, {
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout2 === "auto" ? null : timeout2,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return React55.cloneElement(children2, {
        style: {
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === "exited" && !inProp ? "hidden" : void 0,
          ...styles2[state],
          ...style,
          ...children2.props.style
        },
        ref: handleRef,
        ...restChildProps
      });
    }
  });
});
true ? Grow.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: import_prop_types25.default.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: import_prop_types25.default.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: import_prop_types25.default.oneOfType([import_prop_types25.default.shape({
    enter: import_prop_types25.default.string,
    exit: import_prop_types25.default.string
  }), import_prop_types25.default.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: import_prop_types25.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types25.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types25.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types25.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types25.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types25.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types25.default.func,
  /**
   * @ignore
   */
  style: import_prop_types25.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: import_prop_types25.default.oneOfType([import_prop_types25.default.oneOf(["auto"]), import_prop_types25.default.number, import_prop_types25.default.shape({
    appear: import_prop_types25.default.number,
    enter: import_prop_types25.default.number,
    exit: import_prop_types25.default.number
  })])
} : void 0;
if (Grow) {
  Grow.muiSupportAuto = true;
}
var Grow_default = Grow;

// node_modules/@mui/material/esm/Modal/ModalManager.js
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, hide) {
  if (hide) {
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  const forbiddenTagNames = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"];
  const isForbiddenTagName = forbiddenTagNames.includes(element.tagName);
  const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, hide) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element) => {
    const isNotExcludedElement = !blacklist.includes(element);
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, hide);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      const scrollbarSize = getScrollbarSize(ownerWindow(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: "padding-right",
        el: container
      });
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
      const fixedElements = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container).body;
    } else {
      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
    }
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, (element) => {
    if (element.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
var ModalManager = class {
  constructor() {
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.includes(modal));
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.includes(modal));
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
};

// node_modules/@mui/material/esm/Modal/Modal.js
var React61 = __toESM(require_react(), 1);
var import_prop_types30 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Unstable_TrapFocus/FocusTrap.js
var React56 = __toESM(require_react(), 1);
var import_prop_types26 = __toESM(require_prop_types(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute("tabindex") || "", 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node.contentEditable === "true" || (node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== "INPUT" || node.type !== "radio") {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = (selector) => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === "INPUT" && node.type === "hidden" || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a) => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function FocusTrap(props) {
  const {
    children: children2,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = React56.useRef(false);
  const sentinelStart = React56.useRef(null);
  const sentinelEnd = React56.useRef(null);
  const nodeToRestore = React56.useRef(null);
  const reactFocusEventTarget = React56.useRef(null);
  const activated = React56.useRef(false);
  const rootRef = React56.useRef(null);
  const handleRef = useForkRef(getReactElementRef(children2), rootRef);
  const lastKeydown = React56.useRef(null);
  React56.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  React56.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        if (true) {
          console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join("\n"));
        }
        rootRef.current.setAttribute("tabIndex", "-1");
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open]);
  React56.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      var _a, _b;
      const rootElement = rootRef.current;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (rootElement.contains(doc.activeElement)) {
        return;
      }
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }
      if (tabbable.length > 0) {
        const isShiftTab = Boolean(((_a = lastKeydown.current) == null ? void 0 : _a.shiftKey) && ((_b = lastKeydown.current) == null ? void 0 : _b.key) === "Tab");
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === "BODY") {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children2.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return (0, import_jsx_runtime20.jsxs)(React56.Fragment, {
    children: [(0, import_jsx_runtime20.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), React56.cloneElement(children2, {
      ref: handleRef,
      onFocus
    }), (0, import_jsx_runtime20.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
true ? FocusTrap.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types26.default.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types26.default.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types26.default.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: import_prop_types26.default.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: import_prop_types26.default.func,
  /**
   * If `true`, focus is locked.
   */
  open: import_prop_types26.default.bool.isRequired
} : void 0;
if (true) {
  FocusTrap["propTypes"] = exactProp(FocusTrap.propTypes);
}
var FocusTrap_default = FocusTrap;

// node_modules/@mui/material/esm/Portal/Portal.js
var React57 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);
var import_prop_types27 = __toESM(require_prop_types(), 1);
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
var Portal = React57.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children: children2,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React57.useState(null);
  const handleRef = useForkRef(React57.isValidElement(children2) ? getReactElementRef(children2) : null, forwardedRef);
  useEnhancedEffect_default(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect_default(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (React57.isValidElement(children2)) {
      const newProps = {
        ref: handleRef
      };
      return React57.cloneElement(children2, newProps);
    }
    return children2;
  }
  return mountNode ? ReactDOM3.createPortal(children2, mountNode) : mountNode;
});
true ? Portal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: import_prop_types27.default.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types27.default.oneOfType([HTMLElementType, import_prop_types27.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types27.default.bool
} : void 0;
if (true) {
  Portal["propTypes"] = exactProp(Portal.propTypes);
}
var Portal_default = Portal;

// node_modules/@mui/material/esm/Backdrop/Backdrop.js
var React59 = __toESM(require_react(), 1);
var import_prop_types29 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Fade/Fade.js
var React58 = __toESM(require_react(), 1);
var import_prop_types28 = __toESM(require_prop_types(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var styles3 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var Fade = React58.forwardRef(function Fade2(props, ref) {
  const theme = useTheme();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children: children2,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout: timeout2 = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition_default,
    ...other
  } = props;
  const enableStrictModeCompat = true;
  const nodeRef = React58.useRef(null);
  const handleRef = useForkRef_default(nodeRef, getReactElementRef(children2), ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const transitionProps = getTransitionProps({
      style,
      timeout: timeout2,
      easing
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps({
      style,
      timeout: timeout2,
      easing
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return (0, import_jsx_runtime21.jsx)(TransitionComponent, {
    appear,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : void 0,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout2,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return React58.cloneElement(children2, {
        style: {
          opacity: 0,
          visibility: state === "exited" && !inProp ? "hidden" : void 0,
          ...styles3[state],
          ...style,
          ...children2.props.style
        },
        ref: handleRef,
        ...restChildProps
      });
    }
  });
});
true ? Fade.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: import_prop_types28.default.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: import_prop_types28.default.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: import_prop_types28.default.oneOfType([import_prop_types28.default.shape({
    enter: import_prop_types28.default.string,
    exit: import_prop_types28.default.string
  }), import_prop_types28.default.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: import_prop_types28.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types28.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types28.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types28.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types28.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types28.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types28.default.func,
  /**
   * @ignore
   */
  style: import_prop_types28.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: import_prop_types28.default.oneOfType([import_prop_types28.default.number, import_prop_types28.default.shape({
    appear: import_prop_types28.default.number,
    enter: import_prop_types28.default.number,
    exit: import_prop_types28.default.number
  })])
} : void 0;
var Fade_default = Fade;

// node_modules/@mui/material/esm/Backdrop/backdropClasses.js
function getBackdropUtilityClass(slot) {
  return generateUtilityClass("MuiBackdrop", slot);
}
var backdropClasses = generateUtilityClasses("MuiBackdrop", ["root", "invisible"]);

// node_modules/@mui/material/esm/Backdrop/Backdrop.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses11 = (ownerState) => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ["root", invisible && "invisible"]
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};
var BackdropRoot = styled_default("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.invisible && styles4.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: true
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
});
var Backdrop = React59.forwardRef(function Backdrop2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiBackdrop"
  });
  const {
    children: children2,
    className,
    component = "div",
    invisible = false,
    open,
    components = {},
    componentsProps = {},
    slotProps = {},
    slots = {},
    TransitionComponent: TransitionComponentProp,
    transitionDuration,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    invisible
  };
  const classes = useUtilityClasses11(ownerState);
  const backwardCompatibleSlots = {
    transition: TransitionComponentProp,
    root: components.Root,
    ...slots
  };
  const backwardCompatibleSlotProps = {
    ...componentsProps,
    ...slotProps
  };
  const externalForwardedProps = {
    slots: backwardCompatibleSlots,
    slotProps: backwardCompatibleSlotProps
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: BackdropRoot,
    externalForwardedProps,
    className: clsx_default(classes.root, className),
    ownerState
  });
  const [TransitionSlot, transitionProps] = useSlot("transition", {
    elementType: Fade_default,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime22.jsx)(TransitionSlot, {
    in: open,
    timeout: transitionDuration,
    ...other,
    ...transitionProps,
    children: (0, import_jsx_runtime22.jsx)(RootSlot, {
      "aria-hidden": true,
      ...rootProps,
      classes,
      ref,
      children: children2
    })
  });
});
true ? Backdrop.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types29.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types29.default.object,
  /**
   * @ignore
   */
  className: import_prop_types29.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types29.default.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: import_prop_types29.default.shape({
    Root: import_prop_types29.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: import_prop_types29.default.shape({
    root: import_prop_types29.default.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: import_prop_types29.default.bool,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types29.default.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types29.default.shape({
    root: import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object]),
    transition: import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types29.default.shape({
    root: import_prop_types29.default.elementType,
    transition: import_prop_types29.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types29.default.oneOfType([import_prop_types29.default.arrayOf(import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object, import_prop_types29.default.bool])), import_prop_types29.default.func, import_prop_types29.default.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: import_prop_types29.default.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: import_prop_types29.default.oneOfType([import_prop_types29.default.number, import_prop_types29.default.shape({
    appear: import_prop_types29.default.number,
    enter: import_prop_types29.default.number,
    exit: import_prop_types29.default.number
  })])
} : void 0;
var Backdrop_default = Backdrop;

// node_modules/@mui/material/esm/Modal/useModal.js
var React60 = __toESM(require_react(), 1);
function getContainer2(container) {
  return typeof container === "function" ? container() : container;
}
function getHasTransition(children2) {
  return children2 ? children2.props.hasOwnProperty("in") : false;
}
var noop2 = () => {
};
var manager = new ModalManager();
function useModal(parameters) {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children: children2,
    onClose,
    open,
    rootRef
  } = parameters;
  const modal = React60.useRef({});
  const mountNodeRef = React60.useRef(null);
  const modalRef = React60.useRef(null);
  const handleRef = useForkRef(modalRef, rootRef);
  const [exited, setExited] = React60.useState(!open);
  const hasTransition = getHasTransition(children2);
  let ariaHiddenProp = true;
  if (parameters["aria-hidden"] === "false" || parameters["aria-hidden"] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = useEventCallback_default(() => {
    const resolvedContainer = getContainer2(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = () => manager.isTopModal(getModal());
  const handlePortalRef = useEventCallback_default((node) => {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React60.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp]);
  React60.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React60.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onKeyDown) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.key !== "Escape" || event.which === 229 || // Wait until IME is settled.
    !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  const createHandleBackdropClick = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onClick) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers_default(parameters);
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = {
      ...propsEventHandlers,
      ...otherHandlers
    };
    return {
      /*
       * Marking an element with the role presentation indicates to assistive technology
       * that this element should be ignored; it exists to support the web application and
       * is not meant for humans to interact with directly.
       * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
       */
      role: "presentation",
      ...externalEventHandlers,
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    };
  };
  const getBackdropProps = (otherHandlers = {}) => {
    const externalEventHandlers = otherHandlers;
    return {
      "aria-hidden": true,
      ...externalEventHandlers,
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    };
  };
  const getTransitionProps2 = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: createChainedFunction(handleEnter, (children2 == null ? void 0 : children2.props.onEnter) ?? noop2),
      onExited: createChainedFunction(handleExited, (children2 == null ? void 0 : children2.props.onExited) ?? noop2)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}
var useModal_default = useModal;

// node_modules/@mui/material/esm/Modal/modalClasses.js
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
var modalClasses = generateUtilityClasses("MuiModal", ["root", "hidden", "backdrop"]);

// node_modules/@mui/material/esm/Modal/Modal.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses12 = (ownerState) => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};
var ModalRoot = styled_default("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, !ownerState.open && ownerState.exited && styles4.hidden];
  }
})(memoTheme_default(({
  theme
}) => ({
  position: "fixed",
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.open && ownerState.exited,
    style: {
      visibility: "hidden"
    }
  }]
})));
var ModalBackdrop = styled_default(Backdrop_default, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
});
var Modal = React61.forwardRef(function Modal2(inProps, ref) {
  const props = useDefaultProps2({
    name: "MuiModal",
    props: inProps
  });
  const {
    BackdropComponent = ModalBackdrop,
    BackdropProps,
    classes: classesProp,
    className,
    closeAfterTransition = false,
    children: children2,
    container,
    component,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onClose,
    onTransitionEnter,
    onTransitionExited,
    open,
    slotProps = {},
    slots = {},
    // eslint-disable-next-line react/prop-types
    theme,
    ...other
  } = props;
  const propsWithDefaults = {
    ...props,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  };
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = useModal_default({
    ...propsWithDefaults,
    rootRef: ref
  });
  const ownerState = {
    ...propsWithDefaults,
    exited
  };
  const classes = useUtilityClasses12(ownerState);
  const childProps = {};
  if (children2.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    const {
      onEnter,
      onExited
    } = getTransitionProps2();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const externalForwardedProps = {
    slots: {
      root: components.Root,
      backdrop: components.Backdrop,
      ...slots
    },
    slotProps: {
      ...componentsProps,
      ...slotProps
    }
  };
  const [RootSlot, rootProps] = useSlot("root", {
    ref,
    elementType: ModalRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      component
    },
    getSlotProps: getRootProps,
    ownerState,
    className: clsx_default(className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
  });
  const [BackdropSlot, backdropProps] = useSlot("backdrop", {
    ref: BackdropProps == null ? void 0 : BackdropProps.ref,
    elementType: BackdropComponent,
    externalForwardedProps,
    shouldForwardComponentProp: true,
    additionalProps: BackdropProps,
    getSlotProps: (otherHandlers) => {
      return getBackdropProps({
        ...otherHandlers,
        onClick: (event) => {
          if (otherHandlers == null ? void 0 : otherHandlers.onClick) {
            otherHandlers.onClick(event);
          }
        }
      });
    },
    className: clsx_default(BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop),
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return (0, import_jsx_runtime23.jsx)(Portal_default, {
    ref: portalRef,
    container,
    disablePortal,
    children: (0, import_jsx_runtime23.jsxs)(RootSlot, {
      ...rootProps,
      children: [!hideBackdrop && BackdropComponent ? (0, import_jsx_runtime23.jsx)(BackdropSlot, {
        ...backdropProps
      }) : null, (0, import_jsx_runtime23.jsx)(FocusTrap_default, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open,
        children: React61.cloneElement(children2, childProps)
      })]
    })
  });
});
true ? Modal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: import_prop_types30.default.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: import_prop_types30.default.object,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types30.default.object,
  /**
   * @ignore
   */
  className: import_prop_types30.default.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: import_prop_types30.default.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types30.default.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: import_prop_types30.default.shape({
    Backdrop: import_prop_types30.default.elementType,
    Root: import_prop_types30.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: import_prop_types30.default.shape({
    backdrop: import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object]),
    root: import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types30.default.oneOfType([HTMLElementType, import_prop_types30.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types30.default.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types30.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types30.default.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types30.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types30.default.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: import_prop_types30.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: import_prop_types30.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: import_prop_types30.default.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types30.default.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: import_prop_types30.default.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: import_prop_types30.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types30.default.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: import_prop_types30.default.shape({
    backdrop: import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object]),
    root: import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types30.default.shape({
    backdrop: import_prop_types30.default.elementType,
    root: import_prop_types30.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types30.default.oneOfType([import_prop_types30.default.arrayOf(import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object, import_prop_types30.default.bool])), import_prop_types30.default.func, import_prop_types30.default.object])
} : void 0;
var Modal_default = Modal;

// node_modules/@mui/material/esm/Paper/Paper.js
var React62 = __toESM(require_react(), 1);
var import_prop_types31 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Paper/paperClasses.js
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
var paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);

// node_modules/@mui/material/esm/Paper/Paper.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses13 = (ownerState) => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
var PaperRoot = styled_default("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, styles4[ownerState.variant], !ownerState.square && styles4.rounded, ownerState.variant === "elevation" && styles4[`elevation${ownerState.elevation}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.primary,
  transition: theme.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.square,
    style: {
      borderRadius: theme.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
})));
var Paper = React62.forwardRef(function Paper2(inProps, ref) {
  var _a;
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiPaper"
  });
  const theme = useTheme();
  const {
    className,
    component = "div",
    elevation = 1,
    square = false,
    variant = "elevation",
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    elevation,
    square,
    variant
  };
  const classes = useUtilityClasses13(ownerState);
  if (true) {
    if (theme.shadows[elevation] === void 0) {
      console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join("\n"));
    }
  }
  return (0, import_jsx_runtime24.jsx)(PaperRoot, {
    as: component,
    ownerState,
    className: clsx_default(classes.root, className),
    ref,
    ...other,
    style: {
      ...variant === "elevation" && {
        "--Paper-shadow": (theme.vars || theme).shadows[elevation],
        ...theme.vars && {
          "--Paper-overlay": (_a = theme.vars.overlays) == null ? void 0 : _a[elevation]
        },
        ...!theme.vars && theme.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${alpha("#fff", getOverlayAlpha(elevation))}, ${alpha("#fff", getOverlayAlpha(elevation))})`
        }
      },
      ...other.style
    }
  });
});
true ? Paper.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types31.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types31.default.object,
  /**
   * @ignore
   */
  className: import_prop_types31.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types31.default.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: chainPropTypes(integerPropType_default, (props) => {
    const {
      elevation,
      variant
    } = props;
    if (elevation > 0 && variant === "outlined") {
      return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
    }
    return null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: import_prop_types31.default.bool,
  /**
   * @ignore
   */
  style: import_prop_types31.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types31.default.oneOfType([import_prop_types31.default.arrayOf(import_prop_types31.default.oneOfType([import_prop_types31.default.func, import_prop_types31.default.object, import_prop_types31.default.bool])), import_prop_types31.default.func, import_prop_types31.default.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: import_prop_types31.default.oneOfType([import_prop_types31.default.oneOf(["elevation", "outlined"]), import_prop_types31.default.string])
} : void 0;
var Paper_default = Paper;

// node_modules/@mui/material/esm/Popover/popoverClasses.js
function getPopoverUtilityClass(slot) {
  return generateUtilityClass("MuiPopover", slot);
}
var popoverClasses = generateUtilityClasses("MuiPopover", ["root", "paper"]);

// node_modules/@mui/material/esm/Popover/Popover.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
function getOffsetTop(rect, vertical) {
  let offset = 0;
  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }
  return offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }
  return offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map((n) => typeof n === "number" ? `${n}px` : n).join(" ");
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
var useUtilityClasses14 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPopoverUtilityClass, classes);
};
var PopoverRoot = styled_default(Modal_default, {
  name: "MuiPopover",
  slot: "Root"
})({});
var PopoverPaper = styled_default(Paper_default, {
  name: "MuiPopover",
  slot: "Paper"
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
var Popover = React63.forwardRef(function Popover2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiPopover"
  });
  const {
    action,
    anchorEl,
    anchorOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition,
    anchorReference = "anchorEl",
    children: children2,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps: PaperPropsProp = {},
    // TODO: remove in v7
    slots = {},
    slotProps = {},
    transformOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent,
    // TODO: remove in v7
    transitionDuration: transitionDurationProp = "auto",
    TransitionProps = {},
    // TODO: remove in v7
    disableScrollLock = false,
    ...other
  } = props;
  const paperRef = React63.useRef();
  const ownerState = {
    ...props,
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  };
  const classes = useUtilityClasses14(ownerState);
  const getAnchorOffset = React63.useCallback(() => {
    if (anchorReference === "anchorPosition") {
      if (true) {
        if (!anchorPosition) {
          console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.');
        }
      }
      return anchorPosition;
    }
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument_default(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    if (true) {
      const box = anchorElement.getBoundingClientRect();
      if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
      }
    }
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  const getTransformOrigin = React63.useCallback((elemRect) => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = React63.useCallback((element) => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    const elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    const anchorOffset = getAnchorOffset();
    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left + elemRect.width;
    const containerWindow = ownerWindow_default(resolveAnchorEl(anchorEl));
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (marginThreshold !== null && top < marginThreshold) {
      const diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (marginThreshold !== null && bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (true) {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${elemRect.height - heightThreshold}px).`, "Please consider adding a `max-height` to improve the user-experience."].join("\n"));
      }
    }
    if (marginThreshold !== null && left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const [isPositioned, setIsPositioned] = React63.useState(open);
  const setPositioningStyles = React63.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.setProperty("top", positioning.top);
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);
  React63.useEffect(() => {
    if (disableScrollLock) {
      window.addEventListener("scroll", setPositioningStyles);
    }
    return () => window.removeEventListener("scroll", setPositioningStyles);
  }, [anchorEl, disableScrollLock, setPositioningStyles]);
  const handleEntering = () => {
    setPositioningStyles();
  };
  const handleExited = () => {
    setIsPositioned(false);
  };
  React63.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  React63.useImperativeHandle(action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  React63.useEffect(() => {
    if (!open) {
      return void 0;
    }
    const handleResize = debounce_default(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow_default(resolveAnchorEl(anchorEl));
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  const externalForwardedProps = {
    slots: {
      transition: TransitionComponent,
      ...slots
    },
    slotProps: {
      transition: TransitionProps,
      paper: PaperPropsProp,
      ...slotProps
    }
  };
  const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
    elementType: Grow_default,
    externalForwardedProps,
    ownerState,
    getSlotProps: (handlers) => ({
      ...handlers,
      onEntering: (element, isAppearing) => {
        var _a;
        (_a = handlers.onEntering) == null ? void 0 : _a.call(handlers, element, isAppearing);
        handleEntering();
      },
      onExited: (element) => {
        var _a;
        (_a = handlers.onExited) == null ? void 0 : _a.call(handlers, element);
        handleExited();
      }
    }),
    additionalProps: {
      appear: true,
      in: open
    }
  });
  if (transitionDurationProp === "auto" && !TransitionSlot.muiSupportAuto) {
    transitionDuration = void 0;
  }
  const container = containerProp || (anchorEl ? ownerDocument_default(resolveAnchorEl(anchorEl)).body : void 0);
  const [RootSlot, {
    slots: rootSlotsProp,
    slotProps: rootSlotPropsProp,
    ...rootProps
  }] = useSlot("root", {
    ref,
    elementType: PopoverRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    shouldForwardComponentProp: true,
    additionalProps: {
      slots: {
        backdrop: slots.backdrop
      },
      slotProps: {
        backdrop: mergeSlotProps(typeof slotProps.backdrop === "function" ? slotProps.backdrop(ownerState) : slotProps.backdrop, {
          invisible: true
        })
      },
      container,
      open
    },
    ownerState,
    className: clsx_default(classes.root, className)
  });
  const [PaperSlot, paperProps] = useSlot("paper", {
    ref: paperRef,
    className: classes.paper,
    elementType: PopoverPaper,
    externalForwardedProps,
    shouldForwardComponentProp: true,
    additionalProps: {
      elevation,
      style: isPositioned ? void 0 : {
        opacity: 0
      }
    },
    ownerState
  });
  return (0, import_jsx_runtime25.jsx)(RootSlot, {
    ...rootProps,
    ...!isHostComponent_default(RootSlot) && {
      slots: rootSlotsProp,
      slotProps: rootSlotPropsProp,
      disableScrollLock
    },
    children: (0, import_jsx_runtime25.jsx)(TransitionSlot, {
      ...transitionSlotProps,
      timeout: transitionDuration,
      children: (0, import_jsx_runtime25.jsx)(PaperSlot, {
        ...paperProps,
        children: children2
      })
    })
  });
});
true ? Popover.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: refType_default,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: chainPropTypes(import_prop_types32.default.oneOfType([HTMLElementType, import_prop_types32.default.func]), (props) => {
    if (props.open && (!props.anchorReference || props.anchorReference === "anchorEl")) {
      const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else {
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${resolvedAnchorEl}\` instead.`].join("\n"));
      }
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: import_prop_types32.default.shape({
    horizontal: import_prop_types32.default.oneOfType([import_prop_types32.default.oneOf(["center", "left", "right"]), import_prop_types32.default.number]).isRequired,
    vertical: import_prop_types32.default.oneOfType([import_prop_types32.default.oneOf(["bottom", "center", "top"]), import_prop_types32.default.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: import_prop_types32.default.shape({
    left: import_prop_types32.default.number.isRequired,
    top: import_prop_types32.default.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: import_prop_types32.default.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: import_prop_types32.default.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: import_prop_types32.default.object,
  /**
   * The content of the component.
   */
  children: import_prop_types32.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types32.default.object,
  /**
   * @ignore
   */
  className: import_prop_types32.default.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types32.default.oneOfType([HTMLElementType, import_prop_types32.default.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: import_prop_types32.default.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: integerPropType_default,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: import_prop_types32.default.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: import_prop_types32.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types32.default.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: import_prop_types32.default.shape({
    component: elementTypeAcceptingRef_default
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types32.default.shape({
    backdrop: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object]),
    paper: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object]),
    root: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object]),
    transition: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types32.default.shape({
    backdrop: import_prop_types32.default.elementType,
    paper: import_prop_types32.default.elementType,
    root: import_prop_types32.default.elementType,
    transition: import_prop_types32.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types32.default.oneOfType([import_prop_types32.default.arrayOf(import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object, import_prop_types32.default.bool])), import_prop_types32.default.func, import_prop_types32.default.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: import_prop_types32.default.shape({
    horizontal: import_prop_types32.default.oneOfType([import_prop_types32.default.oneOf(["center", "left", "right"]), import_prop_types32.default.number]).isRequired,
    vertical: import_prop_types32.default.oneOfType([import_prop_types32.default.oneOf(["bottom", "center", "top"]), import_prop_types32.default.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: import_prop_types32.default.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: import_prop_types32.default.oneOfType([import_prop_types32.default.oneOf(["auto"]), import_prop_types32.default.number, import_prop_types32.default.shape({
    appear: import_prop_types32.default.number,
    enter: import_prop_types32.default.number,
    exit: import_prop_types32.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: import_prop_types32.default.object
} : void 0;
var Popover_default = Popover;

// node_modules/@mui/material/esm/Menu/menuClasses.js
function getMenuUtilityClass(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
var menuClasses = generateUtilityClasses("MuiMenu", ["root", "paper", "list"]);

// node_modules/@mui/material/esm/Menu/Menu.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
var LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
var useUtilityClasses15 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  };
  return composeClasses(slots, getMenuUtilityClass, classes);
};
var MenuRoot = styled_default(Popover_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiMenu",
  slot: "Root"
})({});
var MenuPaper = styled_default(PopoverPaper, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
});
var MenuMenuList = styled_default(MenuList_default, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
var Menu = React64.forwardRef(function Menu2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiMenu"
  });
  const {
    autoFocus = true,
    children: children2,
    className,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = "auto",
    TransitionProps: {
      onEntering,
      ...TransitionProps
    } = {},
    variant = "selectedMenu",
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const isRtl = useRtl();
  const ownerState = {
    ...props,
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  };
  const classes = useUtilityClasses15(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = React64.useRef(null);
  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, {
        direction: isRtl ? "rtl" : "ltr"
      });
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  let activeItemIndex = -1;
  React64.Children.map(children2, (child, index) => {
    if (!React64.isValidElement(child)) {
      return;
    }
    if (true) {
      if ((0, import_react_is2.isFragment)(child)) {
        console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const externalForwardedProps = {
    slots,
    slotProps: {
      list: MenuListProps,
      transition: TransitionProps,
      paper: PaperProps,
      ...slotProps
    }
  };
  const rootSlotProps = useSlotProps_default({
    elementType: slots.root,
    externalSlotProps: slotProps.root,
    ownerState,
    className: [classes.root, className]
  });
  const [PaperSlot, paperSlotProps] = useSlot("paper", {
    className: classes.paper,
    elementType: MenuPaper,
    externalForwardedProps,
    shouldForwardComponentProp: true,
    ownerState
  });
  const [ListSlot, listSlotProps] = useSlot("list", {
    className: clsx_default(classes.list, MenuListProps.className),
    elementType: MenuMenuList,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    getSlotProps: (handlers) => ({
      ...handlers,
      onKeyDown: (event) => {
        var _a;
        handleListKeyDown(event);
        (_a = handlers.onKeyDown) == null ? void 0 : _a.call(handlers, event);
      }
    }),
    ownerState
  });
  const resolvedTransitionProps = typeof externalForwardedProps.slotProps.transition === "function" ? externalForwardedProps.slotProps.transition(ownerState) : externalForwardedProps.slotProps.transition;
  return (0, import_jsx_runtime26.jsx)(MenuRoot, {
    onClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: isRtl ? "right" : "left"
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    slots: {
      root: slots.root,
      paper: PaperSlot,
      backdrop: slots.backdrop,
      ...slots.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: slots.transition
      }
    },
    slotProps: {
      root: rootSlotProps,
      paper: paperSlotProps,
      backdrop: typeof slotProps.backdrop === "function" ? slotProps.backdrop(ownerState) : slotProps.backdrop,
      transition: {
        ...resolvedTransitionProps,
        onEntering: (...args) => {
          var _a;
          handleEntering(...args);
          (_a = resolvedTransitionProps == null ? void 0 : resolvedTransitionProps.onEntering) == null ? void 0 : _a.call(resolvedTransitionProps, ...args);
        }
      }
    },
    open,
    ref,
    transitionDuration,
    ownerState,
    ...other,
    classes: PopoverClasses,
    children: (0, import_jsx_runtime26.jsx)(ListSlot, {
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem,
      variant,
      ...listSlotProps,
      children: children2
    })
  });
});
true ? Menu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: import_prop_types33.default.oneOfType([HTMLElementType, import_prop_types33.default.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: import_prop_types33.default.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: import_prop_types33.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types33.default.object,
  /**
   * @ignore
   */
  className: import_prop_types33.default.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: import_prop_types33.default.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: import_prop_types33.default.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: import_prop_types33.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types33.default.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: import_prop_types33.default.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: import_prop_types33.default.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types33.default.shape({
    backdrop: import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object]),
    list: import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object]),
    paper: import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object]),
    root: import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object]),
    transition: import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types33.default.shape({
    backdrop: import_prop_types33.default.elementType,
    list: import_prop_types33.default.elementType,
    paper: import_prop_types33.default.elementType,
    root: import_prop_types33.default.elementType,
    transition: import_prop_types33.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types33.default.oneOfType([import_prop_types33.default.arrayOf(import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object, import_prop_types33.default.bool])), import_prop_types33.default.func, import_prop_types33.default.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: import_prop_types33.default.oneOfType([import_prop_types33.default.oneOf(["auto"]), import_prop_types33.default.number, import_prop_types33.default.shape({
    appear: import_prop_types33.default.number,
    enter: import_prop_types33.default.number,
    exit: import_prop_types33.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: import_prop_types33.default.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: import_prop_types33.default.oneOf(["menu", "selectedMenu"])
} : void 0;
var Menu_default = Menu;

// node_modules/@mui/material/esm/NativeSelect/NativeSelectInput.js
var React65 = __toESM(require_react(), 1);
var import_prop_types34 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/NativeSelect/nativeSelectClasses.js
function getNativeSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiNativeSelect", slot);
}
var nativeSelectClasses = generateUtilityClasses("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var nativeSelectClasses_default = nativeSelectClasses;

// node_modules/@mui/material/esm/NativeSelect/NativeSelectInput.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses16 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize_default(variant)}`, open && "iconOpen", disabled && "disabled"]
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};
var StyledSelectSelect = styled_default("select")(({
  theme
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${nativeSelectClasses_default.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.variant !== "filled" && ownerState.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (theme.vars || theme).shape.borderRadius,
      "&:focus": {
        borderRadius: (theme.vars || theme).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
}));
var NativeSelectSelect = styled_default(StyledSelectSelect, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: rootShouldForwardProp_default,
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.select, styles4[ownerState.variant], ownerState.error && styles4.error, {
      [`&.${nativeSelectClasses_default.multiple}`]: styles4.multiple
    }];
  }
})({});
var StyledSelectIcon = styled_default("svg")(({
  theme
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (theme.vars || theme).palette.action.active,
  [`&.${nativeSelectClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
}));
var NativeSelectIcon = styled_default(StyledSelectIcon, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.icon, ownerState.variant && styles4[`icon${capitalize_default(ownerState.variant)}`], ownerState.open && styles4.iconOpen];
  }
})({});
var NativeSelectInput = React65.forwardRef(function NativeSelectInput2(props, ref) {
  const {
    className,
    disabled,
    error,
    IconComponent,
    inputRef,
    variant = "standard",
    ...other
  } = props;
  const ownerState = {
    ...props,
    disabled,
    variant,
    error
  };
  const classes = useUtilityClasses16(ownerState);
  return (0, import_jsx_runtime27.jsxs)(React65.Fragment, {
    children: [(0, import_jsx_runtime27.jsx)(NativeSelectSelect, {
      ownerState,
      className: clsx_default(classes.select, className),
      disabled,
      ref: inputRef || ref,
      ...other
    }), props.multiple ? null : (0, import_jsx_runtime27.jsx)(NativeSelectIcon, {
      as: IconComponent,
      ownerState,
      className: classes.icon
    })]
  });
});
true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: import_prop_types34.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types34.default.object,
  /**
   * The CSS class name of the select element.
   */
  className: import_prop_types34.default.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: import_prop_types34.default.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: import_prop_types34.default.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types34.default.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: refType_default,
  /**
   * @ignore
   */
  multiple: import_prop_types34.default.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: import_prop_types34.default.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types34.default.func,
  /**
   * The input value.
   */
  value: import_prop_types34.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types34.default.oneOf(["standard", "outlined", "filled"])
} : void 0;
var NativeSelectInput_default = NativeSelectInput;

// node_modules/@mui/material/esm/Select/selectClasses.js
function getSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
var selectClasses = generateUtilityClasses("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var selectClasses_default = selectClasses;

// node_modules/@mui/material/esm/Select/SelectInput.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var _span3;
var SelectSelect = styled_default(StyledSelectSelect, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [
      // Win specificity over the input base
      {
        [`&.${selectClasses_default.select}`]: styles4.select
      },
      {
        [`&.${selectClasses_default.select}`]: styles4[ownerState.variant]
      },
      {
        [`&.${selectClasses_default.error}`]: styles4.error
      },
      {
        [`&.${selectClasses_default.multiple}`]: styles4.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${selectClasses_default.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
});
var SelectIcon = styled_default(StyledSelectIcon, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.icon, ownerState.variant && styles4[`icon${capitalize_default(ownerState.variant)}`], ownerState.open && styles4.iconOpen];
  }
})({});
var SelectNativeInput = styled_default("input", {
  shouldForwardProp: (prop) => slotShouldForwardProp_default(prop) && prop !== "classes",
  name: "MuiSelect",
  slot: "NativeInput"
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function areEqualValues(a, b) {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
function isEmpty2(display) {
  return display == null || typeof display === "string" && !display.trim();
}
var useUtilityClasses17 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize_default(variant)}`, open && "iconOpen", disabled && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return composeClasses(slots, getSelectUtilityClasses, classes);
};
var SelectInput = React66.forwardRef(function SelectInput2(props, ref) {
  var _a;
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    autoFocus,
    autoWidth,
    children: children2,
    className,
    defaultOpen,
    defaultValue,
    disabled,
    displayEmpty,
    error = false,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    required,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    // catching `type` from Input which makes no sense for SelectInput
    type,
    value: valueProp,
    variant = "standard",
    ...other
  } = props;
  const [value, setValueState] = useControlled_default({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  });
  const [openState, setOpenState] = useControlled_default({
    controlled: openProp,
    default: defaultOpen,
    name: "Select"
  });
  const inputRef = React66.useRef(null);
  const displayRef = React66.useRef(null);
  const [displayNode, setDisplayNode] = React66.useState(null);
  const {
    current: isOpenControlled
  } = React66.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = React66.useState();
  const handleRef = useForkRef_default(ref, inputRefProp);
  const handleDisplayRef = React66.useCallback((node) => {
    displayRef.current = node;
    if (node) {
      setDisplayNode(node);
    }
  }, []);
  const anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
  React66.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);
  React66.useEffect(() => {
    if (defaultOpen && openState && displayNode && !isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      displayRef.current.focus();
    }
  }, [displayNode, autoWidth]);
  React66.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  React66.useEffect(() => {
    if (!labelId) {
      return void 0;
    }
    const label = ownerDocument_default(displayRef.current).getElementById(labelId);
    if (label) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };
      label.addEventListener("click", handler);
      return () => {
        label.removeEventListener("click", handler);
      };
    }
    return void 0;
  }, [labelId]);
  const update = (open2, event) => {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      setOpenState(open2);
    }
  };
  const handleMouseDown = (event) => {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };
  const handleClose = (event) => {
    update(false, event);
  };
  const childrenArray = React66.Children.toArray(children2);
  const handleChange = (event) => {
    const child = childrenArray.find((childItem) => childItem.props.value === event.target.value);
    if (child === void 0) {
      return;
    }
    setValueState(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  const handleItemClick = (child) => (event) => {
    let newValue;
    if (!event.currentTarget.hasAttribute("tabindex")) {
      return;
    }
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);
      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (value !== newValue) {
      setValueState(newValue);
      if (onChange) {
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, "target", {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(clonedEvent, child);
      }
    }
    if (!multiple) {
      update(false, event);
    }
  };
  const handleKeyDown = (event) => {
    if (!readOnly) {
      const validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        // The native select doesn't respond to enter on macOS, but it's recommended by
        // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
        "Enter"
      ];
      if (validKeys.includes(event.key)) {
        event.preventDefault();
        update(true, event);
      }
    }
  };
  const open = displayNode !== null && openState;
  const handleBlur = (event) => {
    if (!open && onBlur) {
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  let display;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;
  let foundMatch = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  const items = childrenArray.map((child) => {
    if (!React66.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is3.isFragment)(child)) {
        console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    let selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(true ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : formatMuiErrorMessage(2));
      }
      selected = value.some((v) => areEqualValues(v, child.props.value));
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    if (selected) {
      foundMatch = true;
    }
    return React66.cloneElement(child, {
      "aria-selected": selected ? "true" : "false",
      onClick: handleItemClick(child),
      onKeyUp: (event) => {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": child.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  if (true) {
    React66.useEffect(() => {
      if (!foundMatch && !multiple && value !== "") {
        const values2 = childrenArray.map((child) => child.props.value);
        console.warn([`MUI: You have provided an out-of-range value \`${value}\` for the select ${name ? `(name="${name}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${values2.filter((x) => x != null).map((x) => `\`${x}\``).join(", ") || '""'}.`].join("\n"));
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }
  if (computeDisplay) {
    if (multiple) {
      if (displayMultiple.length === 0) {
        display = null;
      } else {
        display = displayMultiple.reduce((output, child, index) => {
          output.push(child);
          if (index < displayMultiple.length - 1) {
            output.push(", ");
          }
          return output;
        }, []);
      }
    } else {
      display = displaySingle;
    }
  }
  let menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = anchorElement.clientWidth;
  }
  let tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : void 0);
  const ownerState = {
    ...props,
    variant,
    value,
    open,
    error
  };
  const classes = useUtilityClasses17(ownerState);
  const paperProps = {
    ...MenuProps.PaperProps,
    ...(_a = MenuProps.slotProps) == null ? void 0 : _a.paper
  };
  const listboxId = useId();
  return (0, import_jsx_runtime28.jsxs)(React66.Fragment, {
    children: [(0, import_jsx_runtime28.jsx)(SelectSelect, {
      as: "div",
      ref: handleDisplayRef,
      tabIndex,
      role: "combobox",
      "aria-controls": open ? listboxId : void 0,
      "aria-disabled": disabled ? "true" : void 0,
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
      "aria-describedby": ariaDescribedby,
      "aria-required": required ? "true" : void 0,
      "aria-invalid": error ? "true" : void 0,
      onKeyDown: handleKeyDown,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus,
      ...SelectDisplayProps,
      ownerState,
      className: clsx_default(SelectDisplayProps.className, classes.select, className),
      id: buttonId,
      children: isEmpty2(display) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span3 || (_span3 = (0, import_jsx_runtime28.jsx)("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "​"
        }))
      ) : display
    }), (0, import_jsx_runtime28.jsx)(SelectNativeInput, {
      "aria-invalid": error,
      value: Array.isArray(value) ? value.join(",") : value,
      name,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled,
      className: classes.nativeInput,
      autoFocus,
      required,
      ...other,
      ownerState
    }), (0, import_jsx_runtime28.jsx)(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState
    }), (0, import_jsx_runtime28.jsx)(Menu_default, {
      id: `menu-${name || ""}`,
      anchorEl: anchorElement,
      open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...MenuProps,
      slotProps: {
        ...MenuProps.slotProps,
        list: {
          "aria-labelledby": labelId,
          role: "listbox",
          "aria-multiselectable": multiple ? "true" : void 0,
          disableListWrap: true,
          id: listboxId,
          ...MenuProps.MenuListProps
        },
        paper: {
          ...paperProps,
          style: {
            minWidth: menuMinWidth,
            ...paperProps != null ? paperProps.style : null
          }
        }
      },
      children: items
    })]
  });
});
true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": import_prop_types35.default.string,
  /**
   * @ignore
   */
  "aria-label": import_prop_types35.default.string,
  /**
   * @ignore
   */
  autoFocus: import_prop_types35.default.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: import_prop_types35.default.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: import_prop_types35.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types35.default.object,
  /**
   * The CSS class name of the select element.
   */
  className: import_prop_types35.default.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: import_prop_types35.default.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types35.default.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: import_prop_types35.default.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: import_prop_types35.default.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: import_prop_types35.default.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types35.default.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: refType_default,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: import_prop_types35.default.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: import_prop_types35.default.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: import_prop_types35.default.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: import_prop_types35.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types35.default.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: import_prop_types35.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types35.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types35.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: import_prop_types35.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types35.default.bool,
  /**
   * @ignore
   */
  readOnly: import_prop_types35.default.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: import_prop_types35.default.func,
  /**
   * If `true`, the component is required.
   */
  required: import_prop_types35.default.bool,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: import_prop_types35.default.object,
  /**
   * @ignore
   */
  tabIndex: import_prop_types35.default.oneOfType([import_prop_types35.default.number, import_prop_types35.default.string]),
  /**
   * @ignore
   */
  type: import_prop_types35.default.any,
  /**
   * The input value.
   */
  value: import_prop_types35.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types35.default.oneOf(["standard", "outlined", "filled"])
} : void 0;
var SelectInput_default = SelectInput;

// node_modules/@mui/material/esm/internal/svg-icons/ArrowDropDown.js
var React67 = __toESM(require_react(), 1);
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var ArrowDropDown_default = createSvgIcon((0, import_jsx_runtime29.jsx)("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");

// node_modules/@mui/material/esm/Select/Select.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses18 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  const composedClasses = composeClasses(slots, getSelectUtilityClasses, classes);
  return {
    ...classes,
    ...composedClasses
  };
};
var styledRootConfig = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) && prop !== "variant"
};
var StyledInput = styled_default(Input_default, styledRootConfig)("");
var StyledOutlinedInput = styled_default(OutlinedInput_default, styledRootConfig)("");
var StyledFilledInput = styled_default(FilledInput_default, styledRootConfig)("");
var Select = React68.forwardRef(function Select2(inProps, ref) {
  const props = useDefaultProps2({
    name: "MuiSelect",
    props: inProps
  });
  const {
    autoWidth = false,
    children: children2,
    classes: classesProp = {},
    className,
    defaultOpen = false,
    displayEmpty = false,
    IconComponent = ArrowDropDown_default,
    id,
    input,
    inputProps,
    label,
    labelId,
    MenuProps,
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProp = "outlined",
    ...other
  } = props;
  const inputComponent = native ? NativeSelectInput_default : SelectInput_default;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "error"]
  });
  const variant = fcs.variant || variantProp;
  const ownerState = {
    ...props,
    variant,
    classes: classesProp
  };
  const classes = useUtilityClasses18(ownerState);
  const {
    root,
    ...restOfClasses
  } = classes;
  const InputComponent = input || {
    standard: (0, import_jsx_runtime30.jsx)(StyledInput, {
      ownerState
    }),
    outlined: (0, import_jsx_runtime30.jsx)(StyledOutlinedInput, {
      label,
      ownerState
    }),
    filled: (0, import_jsx_runtime30.jsx)(StyledFilledInput, {
      ownerState
    })
  }[variant];
  const inputComponentRef = useForkRef_default(ref, getReactElementRef(InputComponent));
  return (0, import_jsx_runtime30.jsx)(React68.Fragment, {
    children: React68.cloneElement(InputComponent, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent,
      inputProps: {
        children: children2,
        error: fcs.error,
        IconComponent,
        variant,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple,
        ...native ? {
          id
        } : {
          autoWidth,
          defaultOpen,
          displayEmpty,
          labelId,
          MenuProps,
          onClose,
          onOpen,
          open,
          renderValue,
          SelectDisplayProps: {
            id,
            ...SelectDisplayProps
          }
        },
        ...inputProps,
        classes: inputProps ? deepmerge(restOfClasses, inputProps.classes) : restOfClasses,
        ...input ? input.props.inputProps : {}
      },
      ...(multiple && native || displayEmpty) && variant === "outlined" ? {
        notched: true
      } : {},
      ref: inputComponentRef,
      className: clsx_default(InputComponent.props.className, className, classes.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!input && {
        variant
      },
      ...other
    })
  });
});
true ? Select.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: import_prop_types36.default.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: import_prop_types36.default.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: import_prop_types36.default.object,
  /**
   * @ignore
   */
  className: import_prop_types36.default.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: import_prop_types36.default.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types36.default.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: import_prop_types36.default.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: import_prop_types36.default.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: import_prop_types36.default.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: import_prop_types36.default.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: import_prop_types36.default.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: import_prop_types36.default.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: import_prop_types36.default.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: import_prop_types36.default.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: import_prop_types36.default.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: import_prop_types36.default.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: import_prop_types36.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types36.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: import_prop_types36.default.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: import_prop_types36.default.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: import_prop_types36.default.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: import_prop_types36.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types36.default.oneOfType([import_prop_types36.default.arrayOf(import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object, import_prop_types36.default.bool])), import_prop_types36.default.func, import_prop_types36.default.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: import_prop_types36.default.oneOfType([import_prop_types36.default.oneOf([""]), import_prop_types36.default.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types36.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
Select.muiName = "Select";
var Select_default = Select;

// node_modules/@mui/material/esm/TextField/textFieldClasses.js
function getTextFieldUtilityClass(slot) {
  return generateUtilityClass("MuiTextField", slot);
}
var textFieldClasses = generateUtilityClasses("MuiTextField", ["root"]);

// node_modules/@mui/material/esm/TextField/TextField.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var variantComponent = {
  standard: Input_default,
  filled: FilledInput_default,
  outlined: OutlinedInput_default
};
var useUtilityClasses19 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTextFieldUtilityClass, classes);
};
var TextFieldRoot = styled_default(FormControl_default, {
  name: "MuiTextField",
  slot: "Root"
})({});
var TextField = React69.forwardRef(function TextField2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiTextField"
  });
  const {
    autoComplete,
    autoFocus = false,
    children: children2,
    className,
    color = "primary",
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps: FormHelperTextPropsProp,
    fullWidth = false,
    helperText,
    id: idOverride,
    InputLabelProps: InputLabelPropsProp,
    inputProps: inputPropsProp,
    InputProps: InputPropsProp,
    inputRef,
    label,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    select = false,
    SelectProps: SelectPropsProp,
    slots = {},
    slotProps = {},
    type,
    value,
    variant = "outlined",
    ...other
  } = props;
  const ownerState = {
    ...props,
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  };
  const classes = useUtilityClasses19(ownerState);
  if (true) {
    if (select && !children2) {
      console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
    }
  }
  const id = useId(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
  const inputLabelId = label && id ? `${id}-label` : void 0;
  const InputComponent = variantComponent[variant];
  const externalForwardedProps = {
    slots,
    slotProps: {
      input: InputPropsProp,
      inputLabel: InputLabelPropsProp,
      htmlInput: inputPropsProp,
      formHelperText: FormHelperTextPropsProp,
      select: SelectPropsProp,
      ...slotProps
    }
  };
  const inputAdditionalProps = {};
  const inputLabelSlotProps = externalForwardedProps.slotProps.inputLabel;
  if (variant === "outlined") {
    if (inputLabelSlotProps && typeof inputLabelSlotProps.shrink !== "undefined") {
      inputAdditionalProps.notched = inputLabelSlotProps.shrink;
    }
    inputAdditionalProps.label = label;
  }
  if (select) {
    if (!SelectPropsProp || !SelectPropsProp.native) {
      inputAdditionalProps.id = void 0;
    }
    inputAdditionalProps["aria-describedby"] = void 0;
  }
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: TextFieldRoot,
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    className: clsx_default(classes.root, className),
    ref,
    additionalProps: {
      disabled,
      error,
      fullWidth,
      required,
      color,
      variant
    }
  });
  const [InputSlot, inputProps] = useSlot("input", {
    elementType: InputComponent,
    externalForwardedProps,
    additionalProps: inputAdditionalProps,
    ownerState
  });
  const [InputLabelSlot, inputLabelProps] = useSlot("inputLabel", {
    elementType: InputLabel_default,
    externalForwardedProps,
    ownerState
  });
  const [HtmlInputSlot, htmlInputProps] = useSlot("htmlInput", {
    elementType: "input",
    externalForwardedProps,
    ownerState
  });
  const [FormHelperTextSlot, formHelperTextProps] = useSlot("formHelperText", {
    elementType: FormHelperText_default,
    externalForwardedProps,
    ownerState
  });
  const [SelectSlot, selectProps] = useSlot("select", {
    elementType: Select_default,
    externalForwardedProps,
    ownerState
  });
  const InputElement = (0, import_jsx_runtime31.jsx)(InputSlot, {
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name,
    rows,
    maxRows,
    minRows,
    type,
    value,
    id,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputProps: htmlInputProps,
    slots: {
      input: slots.htmlInput ? HtmlInputSlot : void 0
    },
    ...inputProps
  });
  return (0, import_jsx_runtime31.jsxs)(RootSlot, {
    ...rootProps,
    children: [label != null && label !== "" && (0, import_jsx_runtime31.jsx)(InputLabelSlot, {
      htmlFor: id,
      id: inputLabelId,
      ...inputLabelProps,
      children: label
    }), select ? (0, import_jsx_runtime31.jsx)(SelectSlot, {
      "aria-describedby": helperTextId,
      id,
      labelId: inputLabelId,
      value,
      input: InputElement,
      ...selectProps,
      children: children2
    }) : InputElement, helperText && (0, import_jsx_runtime31.jsx)(FormHelperTextSlot, {
      id: helperTextId,
      ...formHelperTextProps,
      children: helperText
    })]
  });
});
true ? TextField.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types37.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types37.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types37.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types37.default.object,
  /**
   * @ignore
   */
  className: import_prop_types37.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types37.default.oneOfType([import_prop_types37.default.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), import_prop_types37.default.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types37.default.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types37.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: import_prop_types37.default.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: import_prop_types37.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types37.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types37.default.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types37.default.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: import_prop_types37.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: import_prop_types37.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: import_prop_types37.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types37.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types37.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types37.default.oneOfType([import_prop_types37.default.number, import_prop_types37.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types37.default.oneOfType([import_prop_types37.default.number, import_prop_types37.default.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: import_prop_types37.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types37.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types37.default.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types37.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types37.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types37.default.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types37.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types37.default.oneOfType([import_prop_types37.default.number, import_prop_types37.default.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: import_prop_types37.default.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: import_prop_types37.default.object,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types37.default.oneOfType([import_prop_types37.default.oneOf(["medium", "small"]), import_prop_types37.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types37.default.shape({
    formHelperText: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object]),
    htmlInput: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object]),
    input: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object]),
    inputLabel: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object]),
    select: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types37.default.shape({
    formHelperText: import_prop_types37.default.elementType,
    htmlInput: import_prop_types37.default.elementType,
    input: import_prop_types37.default.elementType,
    inputLabel: import_prop_types37.default.elementType,
    root: import_prop_types37.default.elementType,
    select: import_prop_types37.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types37.default.oneOfType([import_prop_types37.default.arrayOf(import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object, import_prop_types37.default.bool])), import_prop_types37.default.func, import_prop_types37.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   */
  type: import_prop_types37.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types37.default.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types37.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var TextField_default = TextField;

// node_modules/@mui/material/esm/IconButton/IconButton.js
var React75 = __toESM(require_react(), 1);
var import_prop_types42 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/ButtonBase/ButtonBase.js
var React73 = __toESM(require_react(), 1);
var import_prop_types40 = __toESM(require_prop_types(), 1);

// node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js
function isFocusVisible(element) {
  try {
    return element.matches(":focus-visible");
  } catch (error) {
    if (!/jsdom/.test(window.navigator.userAgent)) {
      console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join("\n"));
    }
  }
  return false;
}

// node_modules/@mui/material/esm/useLazyRipple/useLazyRipple.js
var React70 = __toESM(require_react(), 1);
var LazyRipple = class _LazyRipple {
  constructor() {
    __publicField(this, "mountEffect", () => {
      if (this.shouldMount && !this.didMount) {
        if (this.ref.current !== null) {
          this.didMount = true;
          this.mounted.resolve();
        }
      }
    });
    this.ref = {
      current: null
    };
    this.mounted = null;
    this.didMount = false;
    this.shouldMount = false;
    this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new _LazyRipple();
  }
  static use() {
    const ripple = useLazyRef(_LazyRipple.create).current;
    const [shouldMount, setShouldMount] = React70.useState(false);
    ripple.shouldMount = shouldMount;
    ripple.setShouldMount = setShouldMount;
    React70.useEffect(ripple.mountEffect, [shouldMount]);
    return ripple;
  }
  mount() {
    if (!this.mounted) {
      this.mounted = createControlledPromise();
      this.shouldMount = true;
      this.setShouldMount(this.shouldMount);
    }
    return this.mounted;
  }
  /* Ripple API */
  start(...args) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.start(...args);
    });
  }
  stop(...args) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.stop(...args);
    });
  }
  pulsate(...args) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.pulsate(...args);
    });
  }
};
function useLazyRipple() {
  return LazyRipple.use();
}
function createControlledPromise() {
  let resolve;
  let reject;
  const p = new Promise((resolveFn, rejectFn) => {
    resolve = resolveFn;
    reject = rejectFn;
  });
  p.resolve = resolve;
  p.reject = reject;
  return p;
}

// node_modules/@mui/material/esm/ButtonBase/TouchRipple.js
var React72 = __toESM(require_react(), 1);
var import_prop_types39 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/ButtonBase/Ripple.js
var React71 = __toESM(require_react(), 1);
var import_prop_types38 = __toESM(require_prop_types(), 1);
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout: timeout2
  } = props;
  const [leaving, setLeaving] = React71.useState(false);
  const rippleClassName = clsx_default(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx_default(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  React71.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout2);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout2]);
  return (0, import_jsx_runtime32.jsx)("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: (0, import_jsx_runtime32.jsx)("span", {
      className: childClassName
    })
  });
}
true ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types38.default.object.isRequired,
  className: import_prop_types38.default.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: import_prop_types38.default.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: import_prop_types38.default.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: import_prop_types38.default.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: import_prop_types38.default.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: import_prop_types38.default.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: import_prop_types38.default.number,
  /**
   * exit delay
   */
  timeout: import_prop_types38.default.number.isRequired
} : void 0;
var Ripple_default = Ripple;

// node_modules/@mui/material/esm/ButtonBase/touchRippleClasses.js
var touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
var touchRippleClasses_default = touchRippleClasses;

// node_modules/@mui/material/esm/ButtonBase/TouchRipple.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var DURATION = 550;
var DELAY_RIPPLE = 80;
var enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;
var exitKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
var pulsateKeyframe = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
var TouchRippleRoot = styled_default("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
});
var TouchRippleRipple = styled_default(Ripple_default, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${touchRippleClasses_default.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${enterKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  &.${touchRippleClasses_default.ripplePulsate} {
    animation-duration: ${({
  theme
}) => theme.transitions.duration.shorter}ms;
  }

  & .${touchRippleClasses_default.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${touchRippleClasses_default.childLeaving} {
    opacity: 0;
    animation-name: ${exitKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  & .${touchRippleClasses_default.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${pulsateKeyframe};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`;
var TouchRipple = React72.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className,
    ...other
  } = props;
  const [ripples, setRipples] = React72.useState([]);
  const nextKey = React72.useRef(0);
  const rippleCallback = React72.useRef(null);
  React72.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = React72.useRef(false);
  const startTimer = useTimeout();
  const startTimerCommit = React72.useRef(null);
  const container = React72.useRef(null);
  const startCommit = React72.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, (0, import_jsx_runtime33.jsx)(TouchRippleRipple, {
      classes: {
        ripple: clsx_default(classes.ripple, touchRippleClasses_default.ripple),
        rippleVisible: clsx_default(classes.rippleVisible, touchRippleClasses_default.rippleVisible),
        ripplePulsate: clsx_default(classes.ripplePulsate, touchRippleClasses_default.ripplePulsate),
        child: clsx_default(classes.child, touchRippleClasses_default.child),
        childLeaving: clsx_default(classes.childLeaving, touchRippleClasses_default.childLeaving),
        childPulsate: clsx_default(classes.childPulsate, touchRippleClasses_default.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = React72.useCallback((event = {}, options = {}, cb = () => {
  }) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
      // For test purposes
    } = options;
    if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if ((event == null ? void 0 : event.type) === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event == null ? void 0 : event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.start(DELAY_RIPPLE, () => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        });
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit, startTimer]);
  const pulsate = React72.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = React72.useCallback((event, cb) => {
    startTimer.clear();
    if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.start(0, () => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, [startTimer]);
  React72.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return (0, import_jsx_runtime33.jsx)(TouchRippleRoot, {
    className: clsx_default(touchRippleClasses_default.root, classes.root, className),
    ref: container,
    ...other,
    children: (0, import_jsx_runtime33.jsx)(TransitionGroup_default, {
      component: null,
      exit: true,
      children: ripples
    })
  });
});
true ? TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: import_prop_types39.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types39.default.object,
  /**
   * @ignore
   */
  className: import_prop_types39.default.string
} : void 0;
var TouchRipple_default = TouchRipple;

// node_modules/@mui/material/esm/ButtonBase/buttonBaseClasses.js
function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass("MuiButtonBase", slot);
}
var buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
var buttonBaseClasses_default = buttonBaseClasses;

// node_modules/@mui/material/esm/ButtonBase/ButtonBase.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses20 = (ownerState) => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
var ButtonBaseRoot = styled_default("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses_default.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
});
var ButtonBase = React73.forwardRef(function ButtonBase2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action,
    centerRipple = false,
    children: children2,
    className,
    component = "button",
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    focusVisibleClassName,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type,
    ...other
  } = props;
  const buttonRef = React73.useRef(null);
  const ripple = useLazyRipple();
  const handleRippleRef = useForkRef_default(ripple.ref, touchRippleRef);
  const [focusVisible, setFocusVisible] = React73.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React73.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
  React73.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      ripple.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, ripple]);
  const handleMouseDown = useRippleHandler(ripple, "start", onMouseDown, disableTouchRipple);
  const handleContextMenu = useRippleHandler(ripple, "stop", onContextMenu, disableTouchRipple);
  const handleDragLeave = useRippleHandler(ripple, "stop", onDragLeave, disableTouchRipple);
  const handleMouseUp = useRippleHandler(ripple, "stop", onMouseUp, disableTouchRipple);
  const handleMouseLeave = useRippleHandler(ripple, "stop", (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  }, disableTouchRipple);
  const handleTouchStart = useRippleHandler(ripple, "start", onTouchStart, disableTouchRipple);
  const handleTouchEnd = useRippleHandler(ripple, "stop", onTouchEnd, disableTouchRipple);
  const handleTouchMove = useRippleHandler(ripple, "stop", onTouchMove, disableTouchRipple);
  const handleBlur = useRippleHandler(ripple, "stop", (event) => {
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback_default2((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  const handleKeyDown = useEventCallback_default2((event) => {
    if (focusRipple && !event.repeat && focusVisible && event.key === " ") {
      ripple.stop(event, () => {
        ripple.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback_default2((event) => {
    if (focusRipple && event.key === " " && focusVisible && !event.defaultPrevented) {
      ripple.stop(event, () => {
        ripple.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type === void 0 ? "button" : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
    }
  }
  const handleRef = useForkRef_default(ref, buttonRef);
  const ownerState = {
    ...props,
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  };
  const classes = useUtilityClasses20(ownerState);
  return (0, import_jsx_runtime34.jsxs)(ButtonBaseRoot, {
    as: ComponentProp,
    className: clsx_default(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type,
    ...buttonProps,
    ...other,
    children: [children2, enableTouchRipple ? (0, import_jsx_runtime34.jsx)(TouchRipple_default, {
      ref: handleRippleRef,
      center: centerRipple,
      ...TouchRippleProps
    }) : null]
  });
});
function useRippleHandler(ripple, rippleAction, eventCallback, skipRippleAction = false) {
  return useEventCallback_default2((event) => {
    if (eventCallback) {
      eventCallback(event);
    }
    if (!skipRippleAction) {
      ripple[rippleAction](event);
    }
    return true;
  });
}
true ? ButtonBase.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: refType_default,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: import_prop_types40.default.bool,
  /**
   * The content of the component.
   */
  children: import_prop_types40.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types40.default.object,
  /**
   * @ignore
   */
  className: import_prop_types40.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef_default,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types40.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types40.default.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: import_prop_types40.default.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: import_prop_types40.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types40.default.string,
  /**
   * @ignore
   */
  href: import_prop_types40.default.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: import_prop_types40.default.elementType,
  /**
   * @ignore
   */
  onBlur: import_prop_types40.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types40.default.func,
  /**
   * @ignore
   */
  onContextMenu: import_prop_types40.default.func,
  /**
   * @ignore
   */
  onDragLeave: import_prop_types40.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types40.default.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: import_prop_types40.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types40.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types40.default.func,
  /**
   * @ignore
   */
  onMouseDown: import_prop_types40.default.func,
  /**
   * @ignore
   */
  onMouseLeave: import_prop_types40.default.func,
  /**
   * @ignore
   */
  onMouseUp: import_prop_types40.default.func,
  /**
   * @ignore
   */
  onTouchEnd: import_prop_types40.default.func,
  /**
   * @ignore
   */
  onTouchMove: import_prop_types40.default.func,
  /**
   * @ignore
   */
  onTouchStart: import_prop_types40.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types40.default.oneOfType([import_prop_types40.default.arrayOf(import_prop_types40.default.oneOfType([import_prop_types40.default.func, import_prop_types40.default.object, import_prop_types40.default.bool])), import_prop_types40.default.func, import_prop_types40.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types40.default.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: import_prop_types40.default.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: import_prop_types40.default.oneOfType([import_prop_types40.default.func, import_prop_types40.default.shape({
    current: import_prop_types40.default.shape({
      pulsate: import_prop_types40.default.func.isRequired,
      start: import_prop_types40.default.func.isRequired,
      stop: import_prop_types40.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: import_prop_types40.default.oneOfType([import_prop_types40.default.oneOf(["button", "reset", "submit"]), import_prop_types40.default.string])
} : void 0;
var ButtonBase_default = ButtonBase;

// node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var React74 = __toESM(require_react(), 1);
var import_prop_types41 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/CircularProgress/circularProgressClasses.js
function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass("MuiCircularProgress", slot);
}
var circularProgressClasses = generateUtilityClasses("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);

// node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var SIZE = 44;
var circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
var circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;
var rotateAnimation = typeof circularRotateKeyframe !== "string" ? css`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      ` : null;
var dashAnimation = typeof circularDashKeyframe !== "string" ? css`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      ` : null;
var useUtilityClasses21 = (ownerState) => {
  const {
    classes,
    variant,
    color,
    disableShrink
  } = ownerState;
  const slots = {
    root: ["root", variant, `color${capitalize_default(color)}`],
    svg: ["svg"],
    circle: ["circle", `circle${capitalize_default(variant)}`, disableShrink && "circleDisableShrink"]
  };
  return composeClasses(slots, getCircularProgressUtilityClass, classes);
};
var CircularProgressRoot = styled_default("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, styles4[ownerState.variant], styles4[`color${capitalize_default(ownerState.color)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: theme.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: rotateAnimation || {
      animation: `${circularRotateKeyframe} 1.4s linear infinite`
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  }))]
})));
var CircularProgressSVG = styled_default("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
});
var CircularProgressCircle = styled_default("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.circle, styles4[`circle${capitalize_default(ownerState.variant)}`], ownerState.disableShrink && styles4.circleDisableShrink];
  }
})(memoTheme_default(({
  theme
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: theme.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" && !ownerState.disableShrink,
    style: dashAnimation || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`
    }
  }]
})));
var CircularProgress = React74.forwardRef(function CircularProgress2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiCircularProgress"
  });
  const {
    className,
    color = "primary",
    disableShrink = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = "indeterminate",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disableShrink,
    size,
    thickness,
    value,
    variant
  };
  const classes = useUtilityClasses21(ownerState);
  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};
  if (variant === "determinate") {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps["aria-valuenow"] = Math.round(value);
    circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
    rootStyle.transform = "rotate(-90deg)";
  }
  return (0, import_jsx_runtime35.jsx)(CircularProgressRoot, {
    className: clsx_default(classes.root, className),
    style: {
      width: size,
      height: size,
      ...rootStyle,
      ...style
    },
    ownerState,
    ref,
    role: "progressbar",
    ...rootProps,
    ...other,
    children: (0, import_jsx_runtime35.jsx)(CircularProgressSVG, {
      className: classes.svg,
      ownerState,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
      children: (0, import_jsx_runtime35.jsx)(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })
    })
  });
});
true ? CircularProgress.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types41.default.object,
  /**
   * @ignore
   */
  className: import_prop_types41.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types41.default.oneOfType([import_prop_types41.default.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types41.default.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: chainPropTypes(import_prop_types41.default.bool, (props) => {
    if (props.disableShrink && props.variant && props.variant !== "indeterminate") {
      return new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.");
    }
    return null;
  }),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: import_prop_types41.default.oneOfType([import_prop_types41.default.number, import_prop_types41.default.string]),
  /**
   * @ignore
   */
  style: import_prop_types41.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types41.default.oneOfType([import_prop_types41.default.arrayOf(import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object, import_prop_types41.default.bool])), import_prop_types41.default.func, import_prop_types41.default.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: import_prop_types41.default.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: import_prop_types41.default.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: import_prop_types41.default.oneOf(["determinate", "indeterminate"])
} : void 0;
var CircularProgress_default = CircularProgress;

// node_modules/@mui/material/esm/IconButton/iconButtonClasses.js
function getIconButtonUtilityClass(slot) {
  return generateUtilityClass("MuiIconButton", slot);
}
var iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]);
var iconButtonClasses_default = iconButtonClasses;

// node_modules/@mui/material/esm/IconButton/IconButton.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses22 = (ownerState) => {
  const {
    classes,
    disabled,
    color,
    edge,
    size,
    loading
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading", disabled && "disabled", color !== "default" && `color${capitalize_default(color)}`, edge && `edge${capitalize_default(edge)}`, `size${capitalize_default(size)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
var IconButtonRoot = styled_default(ButtonBase_default, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.loading && styles4.loading, ownerState.color !== "default" && styles4[`color${capitalize_default(ownerState.color)}`], ownerState.edge && styles4[`edge${capitalize_default(ownerState.edge)}`], styles4[`size${capitalize_default(ownerState.size)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: (props) => !props.disableRipple,
    style: {
      "--IconButton-hoverBg": theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), memoTheme_default(({
  theme
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      "--IconButton-hoverBg": theme.vars ? `rgba(${(theme.vars || theme).palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha((theme.vars || theme).palette[color].main, theme.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: theme.typography.pxToRem(28)
    }
  }],
  [`&.${iconButtonClasses_default.disabled}`]: {
    backgroundColor: "transparent",
    color: (theme.vars || theme).palette.action.disabled
  },
  [`&.${iconButtonClasses_default.loading}`]: {
    color: "transparent"
  }
})));
var IconButtonLoadingIndicator = styled_default("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (theme.vars || theme).palette.action.disabled,
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: "flex"
    }
  }]
}));
var IconButton = React75.forwardRef(function IconButton2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiIconButton"
  });
  const {
    edge = false,
    children: children2,
    className,
    color = "default",
    disabled = false,
    disableFocusRipple = false,
    size = "medium",
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    ...other
  } = props;
  const loadingId = useId_default(idProp);
  const loadingIndicator = loadingIndicatorProp ?? (0, import_jsx_runtime36.jsx)(CircularProgress_default, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    edge,
    color,
    disabled,
    disableFocusRipple,
    loading,
    loadingIndicator,
    size
  };
  const classes = useUtilityClasses22(ownerState);
  return (0, import_jsx_runtime36.jsxs)(IconButtonRoot, {
    id: loading ? loadingId : idProp,
    className: clsx_default(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled || loading,
    ref,
    ...other,
    ownerState,
    children: [typeof loading === "boolean" && // use plain HTML span to minimize the runtime overhead
    (0, import_jsx_runtime36.jsx)("span", {
      className: classes.loadingWrapper,
      style: {
        display: "contents"
      },
      children: (0, import_jsx_runtime36.jsx)(IconButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState,
        children: loading && loadingIndicator
      })
    }), children2]
  });
});
true ? IconButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: chainPropTypes(import_prop_types42.default.node, (props) => {
    const found = React75.Children.toArray(props.children).some((child) => React75.isValidElement(child) && child.props.onClick);
    if (found) {
      return new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join("\n"));
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types42.default.object,
  /**
   * @ignore
   */
  className: import_prop_types42.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: import_prop_types42.default.oneOfType([import_prop_types42.default.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types42.default.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types42.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types42.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types42.default.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: import_prop_types42.default.oneOf(["end", "start", false]),
  /**
   * @ignore
   */
  id: import_prop_types42.default.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: import_prop_types42.default.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: import_prop_types42.default.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: import_prop_types42.default.oneOfType([import_prop_types42.default.oneOf(["small", "medium", "large"]), import_prop_types42.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types42.default.oneOfType([import_prop_types42.default.arrayOf(import_prop_types42.default.oneOfType([import_prop_types42.default.func, import_prop_types42.default.object, import_prop_types42.default.bool])), import_prop_types42.default.func, import_prop_types42.default.object])
} : void 0;
var IconButton_default = IconButton;

// node_modules/@mui/material/esm/InputAdornment/InputAdornment.js
var React77 = __toESM(require_react(), 1);
var import_prop_types44 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Typography/Typography.js
var React76 = __toESM(require_react(), 1);
var import_prop_types43 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Typography/typographyClasses.js
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
var typographyClasses = generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
var typographyClasses_default = typographyClasses;

// node_modules/@mui/material/esm/Typography/Typography.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var v6Colors = {
  primary: true,
  secondary: true,
  error: true,
  info: true,
  success: true,
  warning: true,
  textPrimary: true,
  textSecondary: true,
  textDisabled: true
};
var extendSxProp2 = internal_createExtendSxProp();
var useUtilityClasses23 = (ownerState) => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize_default(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
var TypographyRoot = styled_default("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.variant && styles4[ownerState.variant], ownerState.align !== "inherit" && styles4[`align${capitalize_default(ownerState.align)}`], ownerState.noWrap && styles4.noWrap, ownerState.gutterBottom && styles4.gutterBottom, ownerState.paragraph && styles4.paragraph];
  }
})(memoTheme_default(({
  theme
}) => {
  var _a;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(theme.typography).filter(([variant, value]) => variant !== "inherit" && value && typeof value === "object").map(([variant, value]) => ({
      props: {
        variant
      },
      style: value
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color
      },
      style: {
        color: (theme.vars || theme).palette[color].main
      }
    })), ...Object.entries(((_a = theme.palette) == null ? void 0 : _a.text) || {}).filter(([, value]) => typeof value === "string").map(([color]) => ({
      props: {
        color: `text${capitalize_default(color)}`
      },
      style: {
        color: (theme.vars || theme).palette.text[color]
      }
    })), {
      props: ({
        ownerState
      }) => ownerState.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
}));
var defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
};
var Typography = React76.forwardRef(function Typography2(inProps, ref) {
  const {
    color,
    ...themeProps
  } = useDefaultProps2({
    props: inProps,
    name: "MuiTypography"
  });
  const isSxColor = !v6Colors[color];
  const props = extendSxProp2({
    ...themeProps,
    ...isSxColor && {
      color
    }
  });
  const {
    align = "inherit",
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = "body1",
    variantMapping = defaultVariantMapping,
    ...other
  } = props;
  const ownerState = {
    ...props,
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  };
  const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  const classes = useUtilityClasses23(ownerState);
  return (0, import_jsx_runtime37.jsx)(TypographyRoot, {
    as: Component,
    ref,
    className: clsx_default(classes.root, className),
    ...other,
    ownerState,
    style: {
      ...align !== "inherit" && {
        "--Typography-textAlign": align
      },
      ...other.style
    }
  });
});
true ? Typography.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: import_prop_types43.default.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: import_prop_types43.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types43.default.object,
  /**
   * @ignore
   */
  className: import_prop_types43.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: import_prop_types43.default.oneOfType([import_prop_types43.default.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), import_prop_types43.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types43.default.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: import_prop_types43.default.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: import_prop_types43.default.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: import_prop_types43.default.bool,
  /**
   * @ignore
   */
  style: import_prop_types43.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types43.default.oneOfType([import_prop_types43.default.arrayOf(import_prop_types43.default.oneOfType([import_prop_types43.default.func, import_prop_types43.default.object, import_prop_types43.default.bool])), import_prop_types43.default.func, import_prop_types43.default.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: import_prop_types43.default.oneOfType([import_prop_types43.default.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), import_prop_types43.default.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: import_prop_types43.default.object
} : void 0;
var Typography_default = Typography;

// node_modules/@mui/material/esm/InputAdornment/inputAdornmentClasses.js
function getInputAdornmentUtilityClass(slot) {
  return generateUtilityClass("MuiInputAdornment", slot);
}
var inputAdornmentClasses = generateUtilityClasses("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var inputAdornmentClasses_default = inputAdornmentClasses;

// node_modules/@mui/material/esm/InputAdornment/InputAdornment.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var _span4;
var overridesResolver = (props, styles4) => {
  const {
    ownerState
  } = props;
  return [styles4.root, styles4[`position${capitalize_default(ownerState.position)}`], ownerState.disablePointerEvents === true && styles4.disablePointerEvents, styles4[ownerState.variant]];
};
var useUtilityClasses24 = (ownerState) => {
  const {
    classes,
    disablePointerEvents,
    hiddenLabel,
    position,
    size,
    variant
  } = ownerState;
  const slots = {
    root: ["root", disablePointerEvents && "disablePointerEvents", position && `position${capitalize_default(position)}`, variant, hiddenLabel && "hiddenLabel", size && `size${capitalize_default(size)}`]
  };
  return composeClasses(slots, getInputAdornmentUtilityClass, classes);
};
var InputAdornmentRoot = styled_default("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver
})(memoTheme_default(({
  theme
}) => ({
  display: "flex",
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (theme.vars || theme).palette.action.active,
  variants: [{
    props: {
      variant: "filled"
    },
    style: {
      [`&.${inputAdornmentClasses_default.positionStart}&:not(.${inputAdornmentClasses_default.hiddenLabel})`]: {
        marginTop: 16
      }
    }
  }, {
    props: {
      position: "start"
    },
    style: {
      marginRight: 8
    }
  }, {
    props: {
      position: "end"
    },
    style: {
      marginLeft: 8
    }
  }, {
    props: {
      disablePointerEvents: true
    },
    style: {
      pointerEvents: "none"
    }
  }]
})));
var InputAdornment = React77.forwardRef(function InputAdornment2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiInputAdornment"
  });
  const {
    children: children2,
    className,
    component = "div",
    disablePointerEvents = false,
    disableTypography = false,
    position,
    variant: variantProp,
    ...other
  } = props;
  const muiFormControl = useFormControl() || {};
  let variant = variantProp;
  if (variantProp && muiFormControl.variant) {
    if (true) {
      if (variantProp === muiFormControl.variant) {
        console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one.");
      }
    }
  }
  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }
  const ownerState = {
    ...props,
    hiddenLabel: muiFormControl.hiddenLabel,
    size: muiFormControl.size,
    disablePointerEvents,
    position,
    variant
  };
  const classes = useUtilityClasses24(ownerState);
  return (0, import_jsx_runtime38.jsx)(FormControlContext_default.Provider, {
    value: null,
    children: (0, import_jsx_runtime38.jsx)(InputAdornmentRoot, {
      as: component,
      ownerState,
      className: clsx_default(classes.root, className),
      ref,
      ...other,
      children: typeof children2 === "string" && !disableTypography ? (0, import_jsx_runtime38.jsx)(Typography_default, {
        color: "textSecondary",
        children: children2
      }) : (0, import_jsx_runtime38.jsxs)(React77.Fragment, {
        children: [position === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          _span4 || (_span4 = (0, import_jsx_runtime38.jsx)("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "​"
          }))
        ) : null, children2]
      })
    })
  });
});
true ? InputAdornment.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: import_prop_types44.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types44.default.object,
  /**
   * @ignore
   */
  className: import_prop_types44.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types44.default.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: import_prop_types44.default.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: import_prop_types44.default.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: import_prop_types44.default.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types44.default.oneOfType([import_prop_types44.default.arrayOf(import_prop_types44.default.oneOfType([import_prop_types44.default.func, import_prop_types44.default.object, import_prop_types44.default.bool])), import_prop_types44.default.func, import_prop_types44.default.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: import_prop_types44.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var InputAdornment_default = InputAdornment;

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useFieldOwnerState.js
var React79 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/internals/hooks/usePickerPrivateContext.js
var React78 = __toESM(require_react(), 1);
var usePickerPrivateContext = () => React78.useContext(PickerPrivateContext);

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useFieldOwnerState.js
function useFieldOwnerState(parameters) {
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const isRtl = useRtl();
  return React79.useMemo(() => _extends({}, pickerOwnerState, {
    isFieldDisabled: parameters.disabled ?? false,
    isFieldReadOnly: parameters.readOnly ?? false,
    isFieldRequired: parameters.required ?? false,
    fieldDirection: isRtl ? "rtl" : "ltr"
  }), [pickerOwnerState, parameters.disabled, parameters.readOnly, parameters.required, isRtl]);
}

// node_modules/@mui/x-date-pickers/esm/icons/index.js
var React80 = __toESM(require_react(), 1);
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var ArrowDropDownIcon = createSvgIcon((0, import_jsx_runtime39.jsx)("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
var ArrowLeftIcon = createSvgIcon((0, import_jsx_runtime39.jsx)("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft");
var ArrowRightIcon = createSvgIcon((0, import_jsx_runtime39.jsx)("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight");
var CalendarIcon = createSvgIcon((0, import_jsx_runtime39.jsx)("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
var ClockIcon = createSvgIcon((0, import_jsx_runtime39.jsxs)(React80.Fragment, {
  children: [(0, import_jsx_runtime39.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), (0, import_jsx_runtime39.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
var DateRangeIcon = createSvgIcon((0, import_jsx_runtime39.jsx)("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
var TimeIcon = createSvgIcon((0, import_jsx_runtime39.jsxs)(React80.Fragment, {
  children: [(0, import_jsx_runtime39.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), (0, import_jsx_runtime39.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time");
var ClearIcon = createSvgIcon((0, import_jsx_runtime39.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear");

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersTextField.js
var React88 = __toESM(require_react(), 1);
var import_prop_types50 = __toESM(require_prop_types(), 1);

// node_modules/@mui/x-date-pickers/esm/PickersTextField/pickersTextFieldClasses.js
function getPickersTextFieldUtilityClass(slot) {
  return generateUtilityClass("MuiPickersTextField", slot);
}
var pickersTextFieldClasses = generateUtilityClasses("MuiPickersTextField", ["root", "focused", "disabled", "error", "required"]);

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersOutlinedInput/PickersOutlinedInput.js
var React85 = __toESM(require_react(), 1);
var import_prop_types47 = __toESM(require_prop_types(), 1);

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInputBase/PickersInputBase.js
var React83 = __toESM(require_react(), 1);
var import_prop_types46 = __toESM(require_prop_types(), 1);

// node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js
var visuallyHidden = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
var visuallyHidden_default = visuallyHidden;

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInputBase/pickersInputBaseClasses.js
function getPickersInputBaseUtilityClass(slot) {
  return generateUtilityClass("MuiPickersInputBase", slot);
}
var pickersInputBaseClasses = generateUtilityClasses("MuiPickersInputBase", ["root", "focused", "disabled", "error", "notchedOutline", "sectionContent", "sectionBefore", "sectionAfter", "adornedStart", "adornedEnd", "input", "activeBar"]);

// node_modules/@mui/x-date-pickers/esm/PickersSectionList/PickersSectionList.js
var React81 = __toESM(require_react(), 1);
var import_prop_types45 = __toESM(require_prop_types(), 1);

// node_modules/@mui/x-date-pickers/esm/PickersSectionList/pickersSectionListClasses.js
function getPickersSectionListUtilityClass(slot) {
  return generateUtilityClass("MuiPickersSectionList", slot);
}
var pickersSectionListClasses = generateUtilityClasses("MuiPickersSectionList", ["root", "section", "sectionContent"]);

// node_modules/@mui/x-date-pickers/esm/PickersSectionList/PickersSectionList.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var _excluded2 = ["slots", "slotProps", "elements", "sectionListRef", "classes"];
var PickersSectionListRoot = styled_default("div", {
  name: "MuiPickersSectionList",
  slot: "Root"
})({
  direction: "ltr /*! @noflip */",
  outline: "none"
});
var PickersSectionListSection = styled_default("span", {
  name: "MuiPickersSectionList",
  slot: "Section"
})({});
var PickersSectionListSectionSeparator = styled_default("span", {
  name: "MuiPickersSectionList",
  slot: "SectionSeparator"
})({
  whiteSpace: "pre"
});
var PickersSectionListSectionContent = styled_default("span", {
  name: "MuiPickersSectionList",
  slot: "SectionContent"
})({
  outline: "none"
});
var useUtilityClasses25 = (classes) => {
  const slots = {
    root: ["root"],
    section: ["section"],
    sectionContent: ["sectionContent"]
  };
  return composeClasses(slots, getPickersSectionListUtilityClass, classes);
};
function PickersSection(props) {
  const {
    slots,
    slotProps,
    element,
    classes
  } = props;
  const {
    ownerState
  } = usePickerPrivateContext();
  const Section = (slots == null ? void 0 : slots.section) ?? PickersSectionListSection;
  const sectionProps = useSlotProps_default({
    elementType: Section,
    externalSlotProps: slotProps == null ? void 0 : slotProps.section,
    externalForwardedProps: element.container,
    className: classes.section,
    ownerState
  });
  const SectionContent = (slots == null ? void 0 : slots.sectionContent) ?? PickersSectionListSectionContent;
  const sectionContentProps = useSlotProps_default({
    elementType: SectionContent,
    externalSlotProps: slotProps == null ? void 0 : slotProps.sectionContent,
    externalForwardedProps: element.content,
    additionalProps: {
      suppressContentEditableWarning: true
    },
    className: classes.sectionContent,
    ownerState
  });
  const SectionSeparator = (slots == null ? void 0 : slots.sectionSeparator) ?? PickersSectionListSectionSeparator;
  const sectionSeparatorBeforeProps = useSlotProps_default({
    elementType: SectionSeparator,
    externalSlotProps: slotProps == null ? void 0 : slotProps.sectionSeparator,
    externalForwardedProps: element.before,
    ownerState: _extends({}, ownerState, {
      separatorPosition: "before"
    })
  });
  const sectionSeparatorAfterProps = useSlotProps_default({
    elementType: SectionSeparator,
    externalSlotProps: slotProps == null ? void 0 : slotProps.sectionSeparator,
    externalForwardedProps: element.after,
    ownerState: _extends({}, ownerState, {
      separatorPosition: "after"
    })
  });
  return (0, import_jsx_runtime40.jsxs)(Section, _extends({}, sectionProps, {
    children: [(0, import_jsx_runtime40.jsx)(SectionSeparator, _extends({}, sectionSeparatorBeforeProps)), (0, import_jsx_runtime40.jsx)(SectionContent, _extends({}, sectionContentProps)), (0, import_jsx_runtime40.jsx)(SectionSeparator, _extends({}, sectionSeparatorAfterProps))]
  }));
}
true ? PickersSection.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types45.default.object.isRequired,
  element: import_prop_types45.default.shape({
    after: import_prop_types45.default.object.isRequired,
    before: import_prop_types45.default.object.isRequired,
    container: import_prop_types45.default.object.isRequired,
    content: import_prop_types45.default.object.isRequired
  }).isRequired,
  /**
   * The props used for each component slot.
   */
  slotProps: import_prop_types45.default.object,
  /**
   * Overridable component slots.
   */
  slots: import_prop_types45.default.object
} : void 0;
var PickersSectionList = React81.forwardRef(function PickersSectionList2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersSectionList"
  });
  const {
    slots,
    slotProps,
    elements,
    sectionListRef,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const classes = useUtilityClasses25(classesProp);
  const {
    ownerState
  } = usePickerPrivateContext();
  const rootRef = React81.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const getRoot = (methodName) => {
    if (!rootRef.current) {
      throw new Error(`MUI X: Cannot call sectionListRef.${methodName} before the mount of the component.`);
    }
    return rootRef.current;
  };
  React81.useImperativeHandle(sectionListRef, () => ({
    getRoot() {
      return getRoot("getRoot");
    },
    getSectionContainer(index) {
      const root = getRoot("getSectionContainer");
      return root.querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"]`);
    },
    getSectionContent(index) {
      const root = getRoot("getSectionContent");
      return root.querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"] .${pickersSectionListClasses.sectionContent}`);
    },
    getSectionIndexFromDOMElement(element) {
      const root = getRoot("getSectionIndexFromDOMElement");
      if (element == null || !root.contains(element)) {
        return null;
      }
      let sectionContainer = null;
      if (element.classList.contains(pickersSectionListClasses.section)) {
        sectionContainer = element;
      } else if (element.classList.contains(pickersSectionListClasses.sectionContent)) {
        sectionContainer = element.parentElement;
      }
      if (sectionContainer == null) {
        return null;
      }
      return Number(sectionContainer.dataset.sectionindex);
    }
  }));
  const Root = (slots == null ? void 0 : slots.root) ?? PickersSectionListRoot;
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps == null ? void 0 : slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: handleRootRef,
      suppressContentEditableWarning: true
    },
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime40.jsx)(Root, _extends({}, rootProps, {
    children: rootProps.contentEditable ? elements.map(({
      content,
      before,
      after
    }) => `${before.children}${content.children}${after.children}`).join("") : (0, import_jsx_runtime40.jsx)(React81.Fragment, {
      children: elements.map((element, elementIndex) => (0, import_jsx_runtime40.jsx)(PickersSection, {
        slots,
        slotProps,
        element,
        classes
      }, elementIndex))
    })
  }));
});
if (true) PickersSectionList.displayName = "PickersSectionList";
true ? PickersSectionList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types45.default.object,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types45.default.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types45.default.arrayOf(import_prop_types45.default.shape({
    after: import_prop_types45.default.object.isRequired,
    before: import_prop_types45.default.object.isRequired,
    container: import_prop_types45.default.object.isRequired,
    content: import_prop_types45.default.object.isRequired
  })).isRequired,
  sectionListRef: import_prop_types45.default.oneOfType([import_prop_types45.default.func, import_prop_types45.default.shape({
    current: import_prop_types45.default.shape({
      getRoot: import_prop_types45.default.func.isRequired,
      getSectionContainer: import_prop_types45.default.func.isRequired,
      getSectionContent: import_prop_types45.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types45.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   */
  slotProps: import_prop_types45.default.object,
  /**
   * Overridable component slots.
   */
  slots: import_prop_types45.default.object
} : void 0;

// node_modules/@mui/x-date-pickers/esm/PickersTextField/usePickerTextFieldOwnerState.js
var React82 = __toESM(require_react(), 1);
var PickerTextFieldOwnerStateContext = React82.createContext(null);
if (true) PickerTextFieldOwnerStateContext.displayName = "PickerTextFieldOwnerStateContext";
var usePickerTextFieldOwnerState = () => {
  const value = React82.useContext(PickerTextFieldOwnerStateContext);
  if (value == null) {
    throw new Error(["MUI X: The `usePickerTextFieldOwnerState` can only be called in components that are used inside a PickerTextField component"].join("\n"));
  }
  return value;
};

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInputBase/PickersInputBase.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var _excluded3 = ["elements", "areAllSectionsEmpty", "defaultValue", "label", "value", "onChange", "id", "autoFocus", "endAdornment", "startAdornment", "renderSuffix", "slots", "slotProps", "contentEditable", "tabIndex", "onInput", "onPaste", "onKeyDown", "fullWidth", "name", "readOnly", "inputProps", "inputRef", "sectionListRef", "onFocus", "onBlur", "classes", "ownerState"];
var round = (value) => Math.round(value * 1e5) / 1e5;
var PickersInputBaseRoot = styled_default("div", {
  name: "MuiPickersInputBase",
  slot: "Root"
})(({
  theme
}) => _extends({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  cursor: "text",
  padding: 0,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  letterSpacing: `${round(0.15 / 16)}em`,
  variants: [{
    props: {
      isInputInFullWidth: true
    },
    style: {
      width: "100%"
    }
  }]
}));
var PickersInputBaseSectionsContainer = styled_default(PickersSectionListRoot, {
  name: "MuiPickersInputBase",
  slot: "SectionsContainer"
})(({
  theme
}) => ({
  padding: "4px 0 5px",
  fontFamily: theme.typography.fontFamily,
  fontSize: "inherit",
  lineHeight: "1.4375em",
  // 23px
  flexGrow: 1,
  outline: "none",
  display: "flex",
  flexWrap: "nowrap",
  overflow: "hidden",
  letterSpacing: "inherit",
  // Baseline behavior
  width: "182px",
  variants: [{
    props: {
      fieldDirection: "rtl"
    },
    style: {
      textAlign: "right /*! @noflip */"
    }
  }, {
    props: {
      inputSize: "small"
    },
    style: {
      paddingTop: 1
    }
  }, {
    props: {
      hasStartAdornment: false,
      isFieldFocused: false,
      isFieldValueEmpty: true
    },
    style: {
      color: "currentColor",
      opacity: 0
    }
  }, {
    props: {
      hasStartAdornment: false,
      isFieldFocused: false,
      isFieldValueEmpty: true,
      inputHasLabel: false
    },
    style: theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: theme.palette.mode === "light" ? 0.42 : 0.5
    }
  }]
}));
var PickersInputBaseSection = styled_default(PickersSectionListSection, {
  name: "MuiPickersInputBase",
  slot: "Section"
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "inherit",
  letterSpacing: "inherit",
  lineHeight: "1.4375em",
  // 23px
  display: "inline-block",
  whiteSpace: "nowrap"
}));
var PickersInputBaseSectionContent = styled_default(PickersSectionListSectionContent, {
  name: "MuiPickersInputBase",
  slot: "SectionContent",
  overridesResolver: (props, styles4) => styles4.content
  // FIXME: Inconsistent naming with slot
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  lineHeight: "1.4375em",
  // 23px
  letterSpacing: "inherit",
  width: "fit-content",
  outline: "none"
}));
var PickersInputBaseSectionSeparator = styled_default(PickersSectionListSectionSeparator, {
  name: "MuiPickersInputBase",
  slot: "Separator"
})(() => ({
  whiteSpace: "pre",
  letterSpacing: "inherit"
}));
var PickersInputBaseInput = styled_default("input", {
  name: "MuiPickersInputBase",
  slot: "Input",
  overridesResolver: (props, styles4) => styles4.hiddenInput
  // FIXME: Inconsistent naming with slot
})(_extends({}, visuallyHidden_default));
var PickersInputBaseActiveBar = styled_default("div", {
  name: "MuiPickersInputBase",
  slot: "ActiveBar"
})(({
  theme,
  ownerState
}) => ({
  display: "none",
  position: "absolute",
  height: 2,
  bottom: 2,
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  transition: theme.transitions.create(["width", "left"], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: (theme.vars || theme).palette.primary.main,
  '[data-active-range-position="start"] &, [data-active-range-position="end"] &': {
    display: "block"
  },
  '[data-active-range-position="start"] &': {
    left: ownerState.sectionOffsets[0]
  },
  '[data-active-range-position="end"] &': {
    left: ownerState.sectionOffsets[1]
  }
}));
var useUtilityClasses26 = (classes, ownerState) => {
  const {
    isFieldFocused: isFieldFocused3,
    isFieldDisabled,
    isFieldReadOnly,
    hasFieldError,
    inputSize,
    isInputInFullWidth,
    inputColor,
    hasStartAdornment,
    hasEndAdornment
  } = ownerState;
  const slots = {
    root: ["root", isFieldFocused3 && !isFieldDisabled && "focused", isFieldDisabled && "disabled", isFieldReadOnly && "readOnly", hasFieldError && "error", isInputInFullWidth && "fullWidth", `color${capitalize(inputColor)}`, inputSize === "small" && "inputSizeSmall", hasStartAdornment && "adornedStart", hasEndAdornment && "adornedEnd"],
    notchedOutline: ["notchedOutline"],
    input: ["input"],
    sectionsContainer: ["sectionsContainer"],
    sectionContent: ["sectionContent"],
    sectionBefore: ["sectionBefore"],
    sectionAfter: ["sectionAfter"],
    activeBar: ["activeBar"]
  };
  return composeClasses(slots, getPickersInputBaseUtilityClass, classes);
};
function resolveSectionElementWidth(sectionElement, rootRef, index, dateRangePosition) {
  var _a;
  if (sectionElement.content.id) {
    const activeSectionElements = (_a = rootRef.current) == null ? void 0 : _a.querySelectorAll(`[data-sectionindex="${index}"] [data-range-position="${dateRangePosition}"]`);
    if (activeSectionElements) {
      return Array.from(activeSectionElements).reduce((currentActiveBarWidth, element) => {
        return currentActiveBarWidth + element.offsetWidth;
      }, 0);
    }
  }
  return 0;
}
function resolveSectionWidthAndOffsets(elements, rootRef) {
  var _a, _b, _c, _d, _e;
  let activeBarWidth = 0;
  const activeRangePosition = (_a = rootRef.current) == null ? void 0 : _a.getAttribute("data-active-range-position");
  if (activeRangePosition === "end") {
    for (let i = elements.length - 1; i >= elements.length / 2; i -= 1) {
      activeBarWidth += resolveSectionElementWidth(elements[i], rootRef, i, "end");
    }
  } else {
    for (let i = 0; i < elements.length / 2; i += 1) {
      activeBarWidth += resolveSectionElementWidth(elements[i], rootRef, i, "start");
    }
  }
  return {
    activeBarWidth,
    sectionOffsets: [((_c = (_b = rootRef.current) == null ? void 0 : _b.querySelector(`[data-sectionindex="0"]`)) == null ? void 0 : _c.offsetLeft) || 0, ((_e = (_d = rootRef.current) == null ? void 0 : _d.querySelector(`[data-sectionindex="${elements.length / 2}"]`)) == null ? void 0 : _e.offsetLeft) || 0]
  };
}
var PickersInputBase = React83.forwardRef(function PickersInputBase2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersInputBase"
  });
  const {
    elements,
    areAllSectionsEmpty,
    value,
    onChange,
    id,
    endAdornment,
    startAdornment,
    renderSuffix,
    slots,
    slotProps,
    contentEditable,
    tabIndex,
    onInput,
    onPaste,
    onKeyDown,
    name,
    readOnly,
    inputProps,
    inputRef,
    sectionListRef,
    onFocus,
    onBlur,
    classes: classesProp,
    ownerState: ownerStateProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const ownerStateContext = usePickerTextFieldOwnerState();
  const rootRef = React83.useRef(null);
  const activeBarRef = React83.useRef(null);
  const sectionOffsetsRef = React83.useRef([]);
  const handleRootRef = useForkRef(ref, rootRef);
  const handleInputRef = useForkRef(inputProps == null ? void 0 : inputProps.ref, inputRef);
  const muiFormControl = useFormControl();
  if (!muiFormControl) {
    throw new Error("MUI X: PickersInputBase should always be used inside a PickersTextField component");
  }
  const ownerState = ownerStateProp ?? ownerStateContext;
  const handleInputFocus = (event) => {
    var _a;
    (_a = muiFormControl.onFocus) == null ? void 0 : _a.call(muiFormControl, event);
    onFocus == null ? void 0 : onFocus(event);
  };
  const handleHiddenInputFocus = (event) => {
    handleInputFocus(event);
  };
  const handleKeyDown = (event) => {
    var _a, _b;
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (event.key === "Enter" && !event.defaultMuiPrevented) {
      if ((_a = rootRef.current) == null ? void 0 : _a.dataset.multiInput) {
        return;
      }
      const closestForm = (_b = rootRef.current) == null ? void 0 : _b.closest("form");
      const submitTrigger = closestForm == null ? void 0 : closestForm.querySelector('[type="submit"]');
      if (!closestForm || !submitTrigger) {
        return;
      }
      event.preventDefault();
      closestForm.requestSubmit(submitTrigger);
    }
  };
  const handleInputBlur = (event) => {
    var _a;
    (_a = muiFormControl.onBlur) == null ? void 0 : _a.call(muiFormControl, event);
    onBlur == null ? void 0 : onBlur(event);
  };
  React83.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  React83.useEffect(() => {
    if (!muiFormControl) {
      return;
    }
    if (areAllSectionsEmpty) {
      muiFormControl.onEmpty();
    } else {
      muiFormControl.onFilled();
    }
  }, [muiFormControl, areAllSectionsEmpty]);
  const classes = useUtilityClasses26(classesProp, ownerState);
  const InputRoot2 = (slots == null ? void 0 : slots.root) || PickersInputBaseRoot;
  const inputRootProps = useSlotProps_default({
    elementType: InputRoot2,
    externalSlotProps: slotProps == null ? void 0 : slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      "aria-invalid": muiFormControl.error,
      ref: handleRootRef
    },
    className: classes.root,
    ownerState
  });
  const InputSectionsContainer = (slots == null ? void 0 : slots.input) || PickersInputBaseSectionsContainer;
  const isSingleInputRange = elements.some((element) => element.content["data-range-position"] !== void 0);
  React83.useEffect(() => {
    if (!isSingleInputRange || !ownerState.isPickerOpen) {
      return;
    }
    const {
      activeBarWidth,
      sectionOffsets
    } = resolveSectionWidthAndOffsets(elements, rootRef);
    sectionOffsetsRef.current = [sectionOffsets[0], sectionOffsets[1]];
    if (activeBarRef.current) {
      activeBarRef.current.style.width = `${activeBarWidth}px`;
    }
  }, [elements, isSingleInputRange, ownerState.isPickerOpen]);
  return (0, import_jsx_runtime41.jsxs)(InputRoot2, _extends({}, inputRootProps, {
    children: [startAdornment, (0, import_jsx_runtime41.jsx)(PickersSectionList, {
      sectionListRef,
      elements,
      contentEditable,
      tabIndex,
      className: classes.sectionsContainer,
      onFocus: handleInputFocus,
      onBlur: handleInputBlur,
      onInput,
      onPaste,
      onKeyDown: handleKeyDown,
      slots: {
        root: InputSectionsContainer,
        section: PickersInputBaseSection,
        sectionContent: PickersInputBaseSectionContent,
        sectionSeparator: PickersInputBaseSectionSeparator
      },
      slotProps: {
        root: _extends({}, slotProps == null ? void 0 : slotProps.input, {
          ownerState
        }),
        sectionContent: {
          className: pickersInputBaseClasses.sectionContent
        },
        sectionSeparator: ({
          separatorPosition
        }) => ({
          className: separatorPosition === "before" ? pickersInputBaseClasses.sectionBefore : pickersInputBaseClasses.sectionAfter
        })
      }
    }), endAdornment, renderSuffix ? renderSuffix(_extends({}, muiFormControl)) : null, (0, import_jsx_runtime41.jsx)(PickersInputBaseInput, _extends({
      name,
      className: classes.input,
      value,
      onChange,
      id,
      "aria-hidden": "true",
      tabIndex: -1,
      readOnly,
      required: muiFormControl.required,
      disabled: muiFormControl.disabled,
      onFocus: handleHiddenInputFocus
    }, inputProps, {
      ref: handleInputRef
    })), isSingleInputRange && (0, import_jsx_runtime41.jsx)(PickersInputBaseActiveBar, {
      className: classes.activeBar,
      ref: activeBarRef,
      ownerState: {
        sectionOffsets: sectionOffsetsRef.current
      }
    })]
  }));
});
if (true) PickersInputBase.displayName = "PickersInputBase";
true ? PickersInputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types46.default.bool.isRequired,
  className: import_prop_types46.default.string,
  component: import_prop_types46.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types46.default.bool.isRequired,
  "data-multi-input": import_prop_types46.default.string,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types46.default.arrayOf(import_prop_types46.default.shape({
    after: import_prop_types46.default.object.isRequired,
    before: import_prop_types46.default.object.isRequired,
    container: import_prop_types46.default.object.isRequired,
    content: import_prop_types46.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types46.default.node,
  fullWidth: import_prop_types46.default.bool,
  id: import_prop_types46.default.string,
  inputProps: import_prop_types46.default.object,
  inputRef: refType_default,
  label: import_prop_types46.default.node,
  margin: import_prop_types46.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types46.default.string,
  onChange: import_prop_types46.default.func.isRequired,
  onClick: import_prop_types46.default.func.isRequired,
  onInput: import_prop_types46.default.func.isRequired,
  onKeyDown: import_prop_types46.default.func.isRequired,
  onPaste: import_prop_types46.default.func.isRequired,
  ownerState: import_prop_types46.default.any,
  readOnly: import_prop_types46.default.bool,
  renderSuffix: import_prop_types46.default.func,
  sectionListRef: import_prop_types46.default.oneOfType([import_prop_types46.default.func, import_prop_types46.default.shape({
    current: import_prop_types46.default.shape({
      getRoot: import_prop_types46.default.func.isRequired,
      getSectionContainer: import_prop_types46.default.func.isRequired,
      getSectionContent: import_prop_types46.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types46.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types46.default.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types46.default.object,
  startAdornment: import_prop_types46.default.node,
  style: import_prop_types46.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types46.default.oneOfType([import_prop_types46.default.arrayOf(import_prop_types46.default.oneOfType([import_prop_types46.default.func, import_prop_types46.default.object, import_prop_types46.default.bool])), import_prop_types46.default.func, import_prop_types46.default.object]),
  value: import_prop_types46.default.string.isRequired
} : void 0;

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersOutlinedInput/pickersOutlinedInputClasses.js
function getPickersOutlinedInputUtilityClass(slot) {
  return generateUtilityClass("MuiPickersOutlinedInput", slot);
}
var pickersOutlinedInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersOutlinedInput", ["root", "notchedOutline", "input"]));

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersOutlinedInput/Outline.js
var React84 = __toESM(require_react(), 1);
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var _excluded4 = ["children", "className", "label", "notched", "shrink"];
var OutlineRoot = styled_default("fieldset", {
  name: "MuiPickersOutlinedInput",
  slot: "NotchedOutline"
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
  };
});
var OutlineLabel = styled_default("span")(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "inherit"
}));
var OutlineLegend = styled_default("legend", {
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "notched"
})(({
  theme
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: {
      inputHasLabel: false
    },
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: theme.transitions.create("width", {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      inputHasLabel: true
    },
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: theme.transitions.create("max-width", {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: {
      inputHasLabel: true,
      notched: true
    },
    style: {
      maxWidth: "100%",
      transition: theme.transitions.create("max-width", {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
}));
function Outline(props) {
  const {
    className,
    label,
    notched
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const ownerState = usePickerTextFieldOwnerState();
  return (0, import_jsx_runtime42.jsx)(OutlineRoot, _extends({
    "aria-hidden": true,
    className
  }, other, {
    ownerState,
    children: (0, import_jsx_runtime42.jsx)(OutlineLegend, {
      ownerState,
      notched,
      children: label ? (0, import_jsx_runtime42.jsx)(OutlineLabel, {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        (0, import_jsx_runtime42.jsx)(OutlineLabel, {
          className: "notranslate",
          children: "​"
        })
      )
    })
  }));
}

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersOutlinedInput/PickersOutlinedInput.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var _excluded5 = ["label", "autoFocus", "ownerState", "classes", "notched"];
var PickersOutlinedInputRoot = styled_default(PickersInputBaseRoot, {
  name: "MuiPickersOutlinedInput",
  slot: "Root"
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    padding: "0 14px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
      }
    },
    [`&.${pickersOutlinedInputClasses.focused} .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderStyle: "solid",
      borderWidth: 2
    },
    [`&.${pickersOutlinedInputClasses.disabled}`]: {
      [`& .${pickersOutlinedInputClasses.notchedOutline}`]: {
        borderColor: (theme.vars || theme).palette.action.disabled
      },
      "*": {
        color: (theme.vars || theme).palette.action.disabled
      }
    },
    [`&.${pickersOutlinedInputClasses.error} .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    variants: Object.keys((theme.vars ?? theme).palette).filter((key) => {
      var _a;
      return ((_a = (theme.vars ?? theme).palette[key]) == null ? void 0 : _a.main) ?? false;
    }).map((color) => ({
      props: {
        inputColor: color
      },
      style: {
        [`&.${pickersOutlinedInputClasses.focused}:not(.${pickersOutlinedInputClasses.error}) .${pickersOutlinedInputClasses.notchedOutline}`]: {
          // @ts-ignore
          borderColor: (theme.vars || theme).palette[color].main
        }
      }
    }))
  };
});
var PickersOutlinedInputSectionsContainer = styled_default(PickersInputBaseSectionsContainer, {
  name: "MuiPickersOutlinedInput",
  slot: "SectionsContainer"
})({
  padding: "16.5px 0",
  variants: [{
    props: {
      inputSize: "small"
    },
    style: {
      padding: "8.5px 0"
    }
  }]
});
var useUtilityClasses27 = (classes) => {
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getPickersOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var PickersOutlinedInput = React85.forwardRef(function PickersOutlinedInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersOutlinedInput"
  });
  const {
    label,
    classes: classesProp,
    notched
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const muiFormControl = useFormControl();
  const classes = useUtilityClasses27(classesProp);
  return (0, import_jsx_runtime43.jsx)(PickersInputBase, _extends({
    slots: {
      root: PickersOutlinedInputRoot,
      input: PickersOutlinedInputSectionsContainer
    },
    renderSuffix: (state) => (0, import_jsx_runtime43.jsx)(Outline, {
      shrink: Boolean(notched || state.adornedStart || state.focused || state.filled),
      notched: Boolean(notched || state.adornedStart || state.focused || state.filled),
      className: classes.notchedOutline,
      label: label != null && label !== "" && (muiFormControl == null ? void 0 : muiFormControl.required) ? (0, import_jsx_runtime43.jsxs)(React85.Fragment, {
        children: [label, " ", "*"]
      }) : label
    })
  }, other, {
    label,
    classes,
    ref
  }));
});
if (true) PickersOutlinedInput.displayName = "PickersOutlinedInput";
true ? PickersOutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types47.default.bool.isRequired,
  className: import_prop_types47.default.string,
  component: import_prop_types47.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types47.default.bool.isRequired,
  "data-multi-input": import_prop_types47.default.string,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types47.default.arrayOf(import_prop_types47.default.shape({
    after: import_prop_types47.default.object.isRequired,
    before: import_prop_types47.default.object.isRequired,
    container: import_prop_types47.default.object.isRequired,
    content: import_prop_types47.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types47.default.node,
  fullWidth: import_prop_types47.default.bool,
  id: import_prop_types47.default.string,
  inputProps: import_prop_types47.default.object,
  inputRef: refType_default,
  label: import_prop_types47.default.node,
  margin: import_prop_types47.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types47.default.string,
  notched: import_prop_types47.default.bool,
  onChange: import_prop_types47.default.func.isRequired,
  onClick: import_prop_types47.default.func.isRequired,
  onInput: import_prop_types47.default.func.isRequired,
  onKeyDown: import_prop_types47.default.func.isRequired,
  onPaste: import_prop_types47.default.func.isRequired,
  ownerState: import_prop_types47.default.any,
  readOnly: import_prop_types47.default.bool,
  renderSuffix: import_prop_types47.default.func,
  sectionListRef: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.shape({
    current: import_prop_types47.default.shape({
      getRoot: import_prop_types47.default.func.isRequired,
      getSectionContainer: import_prop_types47.default.func.isRequired,
      getSectionContent: import_prop_types47.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types47.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types47.default.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types47.default.object,
  startAdornment: import_prop_types47.default.node,
  style: import_prop_types47.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types47.default.oneOfType([import_prop_types47.default.arrayOf(import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object, import_prop_types47.default.bool])), import_prop_types47.default.func, import_prop_types47.default.object]),
  value: import_prop_types47.default.string.isRequired
} : void 0;
PickersOutlinedInput.muiName = "Input";

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersFilledInput/PickersFilledInput.js
var React86 = __toESM(require_react(), 1);
var import_prop_types48 = __toESM(require_prop_types(), 1);

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersFilledInput/pickersFilledInputClasses.js
function getPickersFilledInputUtilityClass(slot) {
  return generateUtilityClass("MuiPickersFilledInput", slot);
}
var pickersFilledInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersFilledInput", ["root", "underline", "input"]));

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersFilledInput/PickersFilledInput.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var _excluded6 = ["label", "autoFocus", "disableUnderline", "hiddenLabel", "classes"];
var PickersFilledInputRoot = styled_default(PickersInputBaseRoot, {
  name: "MuiPickersFilledInput",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "disableUnderline"
})(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  const bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor = light ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${pickersFilledInputClasses.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${pickersFilledInputClasses.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    },
    variants: [...Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key].main).map((color) => {
      var _a;
      return {
        props: {
          inputColor: color,
          disableUnderline: false
        },
        style: {
          "&::after": {
            // @ts-ignore
            borderBottom: `2px solid ${(_a = (theme.vars || theme).palette[color]) == null ? void 0 : _a.main}`
          }
        }
      };
    }), {
      props: {
        disableUnderline: false
      },
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${pickersFilledInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${pickersFilledInputClasses.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${pickersFilledInputClasses.disabled}, .${pickersFilledInputClasses.error}):before`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
        },
        [`&.${pickersFilledInputClasses.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, {
      props: {
        hasStartAdornment: true
      },
      style: {
        paddingLeft: 12
      }
    }, {
      props: {
        hasEndAdornment: true
      },
      style: {
        paddingRight: 12
      }
    }]
  };
});
var PickersFilledSectionsContainer = styled_default(PickersInputBaseSectionsContainer, {
  name: "MuiPickersFilledInput",
  slot: "sectionsContainer",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "hiddenLabel"
})({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  variants: [{
    props: {
      inputSize: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: {
      hasStartAdornment: true
    },
    style: {
      paddingLeft: 0
    }
  }, {
    props: {
      hasEndAdornment: true
    },
    style: {
      paddingRight: 0
    }
  }, {
    props: {
      hiddenLabel: true
    },
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: {
      hiddenLabel: true,
      inputSize: "small"
    },
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }]
});
var useUtilityClasses28 = (classes, ownerState) => {
  const {
    inputHasUnderline
  } = ownerState;
  const slots = {
    root: ["root", inputHasUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getPickersFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var PickersFilledInput = React86.forwardRef(function PickersFilledInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersFilledInput"
  });
  const {
    label,
    disableUnderline = false,
    hiddenLabel = false,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const pickerTextFieldOwnerState = usePickerTextFieldOwnerState();
  const ownerState = _extends({}, pickerTextFieldOwnerState, {
    inputHasUnderline: !disableUnderline
  });
  const classes = useUtilityClasses28(classesProp, ownerState);
  return (0, import_jsx_runtime44.jsx)(PickersInputBase, _extends({
    slots: {
      root: PickersFilledInputRoot,
      input: PickersFilledSectionsContainer
    },
    slotProps: {
      root: {
        disableUnderline
      },
      input: {
        hiddenLabel
      }
    }
  }, other, {
    label,
    classes,
    ref,
    ownerState
  }));
});
if (true) PickersFilledInput.displayName = "PickersFilledInput";
true ? PickersFilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types48.default.bool.isRequired,
  className: import_prop_types48.default.string,
  component: import_prop_types48.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types48.default.bool.isRequired,
  "data-multi-input": import_prop_types48.default.string,
  disableUnderline: import_prop_types48.default.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types48.default.arrayOf(import_prop_types48.default.shape({
    after: import_prop_types48.default.object.isRequired,
    before: import_prop_types48.default.object.isRequired,
    container: import_prop_types48.default.object.isRequired,
    content: import_prop_types48.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types48.default.node,
  fullWidth: import_prop_types48.default.bool,
  hiddenLabel: import_prop_types48.default.bool,
  id: import_prop_types48.default.string,
  inputProps: import_prop_types48.default.object,
  inputRef: refType_default,
  label: import_prop_types48.default.node,
  margin: import_prop_types48.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types48.default.string,
  onChange: import_prop_types48.default.func.isRequired,
  onClick: import_prop_types48.default.func.isRequired,
  onInput: import_prop_types48.default.func.isRequired,
  onKeyDown: import_prop_types48.default.func.isRequired,
  onPaste: import_prop_types48.default.func.isRequired,
  ownerState: import_prop_types48.default.any,
  readOnly: import_prop_types48.default.bool,
  renderSuffix: import_prop_types48.default.func,
  sectionListRef: import_prop_types48.default.oneOfType([import_prop_types48.default.func, import_prop_types48.default.shape({
    current: import_prop_types48.default.shape({
      getRoot: import_prop_types48.default.func.isRequired,
      getSectionContainer: import_prop_types48.default.func.isRequired,
      getSectionContent: import_prop_types48.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types48.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types48.default.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types48.default.object,
  startAdornment: import_prop_types48.default.node,
  style: import_prop_types48.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types48.default.oneOfType([import_prop_types48.default.arrayOf(import_prop_types48.default.oneOfType([import_prop_types48.default.func, import_prop_types48.default.object, import_prop_types48.default.bool])), import_prop_types48.default.func, import_prop_types48.default.object]),
  value: import_prop_types48.default.string.isRequired
} : void 0;
PickersFilledInput.muiName = "Input";

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInput/PickersInput.js
var React87 = __toESM(require_react(), 1);
var import_prop_types49 = __toESM(require_prop_types(), 1);

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInput/pickersInputClasses.js
function getPickersInputUtilityClass(slot) {
  return generateUtilityClass("MuiPickersFilledInput", slot);
}
var pickersInputClasses = _extends({}, pickersInputBaseClasses, generateUtilityClasses("MuiPickersInput", ["root", "underline", "input"]));

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersInput/PickersInput.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var _excluded7 = ["label", "autoFocus", "disableUnderline", "ownerState", "classes"];
var PickersInputRoot = styled_default(PickersInputBaseRoot, {
  name: "MuiPickersInput",
  slot: "Root",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "disableUnderline"
})(({
  theme
}) => {
  const light = theme.palette.mode === "light";
  let bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return {
    "label + &": {
      marginTop: 16
    },
    variants: [...Object.keys((theme.vars ?? theme).palette).filter((key) => (theme.vars ?? theme).palette[key].main).map((color) => ({
      props: {
        inputColor: color,
        inputHasUnderline: true
      },
      style: {
        "&::after": {
          // @ts-ignore
          borderBottom: `2px solid ${(theme.vars || theme).palette[color].main}`
        }
      }
    })), {
      props: {
        inputHasUnderline: true
      },
      style: {
        "&::after": {
          background: "red",
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${pickersInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${pickersInputClasses.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${pickersInputClasses.disabled}, .${pickersInputClasses.error}):before`]: {
          borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${bottomLineColor}`
          }
        },
        [`&.${pickersInputClasses.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }]
  };
});
var useUtilityClasses29 = (classes, ownerState) => {
  const {
    inputHasUnderline
  } = ownerState;
  const slots = {
    root: ["root", !inputHasUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getPickersInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var PickersInput = React87.forwardRef(function PickersInput2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersInput"
  });
  const {
    label,
    disableUnderline = false,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const pickerTextFieldOwnerState = usePickerTextFieldOwnerState();
  const ownerState = _extends({}, pickerTextFieldOwnerState, {
    inputHasUnderline: !disableUnderline
  });
  const classes = useUtilityClasses29(classesProp, ownerState);
  return (0, import_jsx_runtime45.jsx)(PickersInputBase, _extends({
    slots: {
      root: PickersInputRoot
    },
    slotProps: {
      root: {
        disableUnderline
      }
    }
  }, other, {
    ownerState,
    label,
    classes,
    ref
  }));
});
if (true) PickersInput.displayName = "PickersInput";
true ? PickersInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types49.default.bool.isRequired,
  className: import_prop_types49.default.string,
  component: import_prop_types49.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types49.default.bool.isRequired,
  "data-multi-input": import_prop_types49.default.string,
  disableUnderline: import_prop_types49.default.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types49.default.arrayOf(import_prop_types49.default.shape({
    after: import_prop_types49.default.object.isRequired,
    before: import_prop_types49.default.object.isRequired,
    container: import_prop_types49.default.object.isRequired,
    content: import_prop_types49.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types49.default.node,
  fullWidth: import_prop_types49.default.bool,
  id: import_prop_types49.default.string,
  inputProps: import_prop_types49.default.object,
  inputRef: refType_default,
  label: import_prop_types49.default.node,
  margin: import_prop_types49.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types49.default.string,
  onChange: import_prop_types49.default.func.isRequired,
  onClick: import_prop_types49.default.func.isRequired,
  onInput: import_prop_types49.default.func.isRequired,
  onKeyDown: import_prop_types49.default.func.isRequired,
  onPaste: import_prop_types49.default.func.isRequired,
  ownerState: import_prop_types49.default.any,
  readOnly: import_prop_types49.default.bool,
  renderSuffix: import_prop_types49.default.func,
  sectionListRef: import_prop_types49.default.oneOfType([import_prop_types49.default.func, import_prop_types49.default.shape({
    current: import_prop_types49.default.shape({
      getRoot: import_prop_types49.default.func.isRequired,
      getSectionContainer: import_prop_types49.default.func.isRequired,
      getSectionContent: import_prop_types49.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types49.default.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types49.default.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types49.default.object,
  startAdornment: import_prop_types49.default.node,
  style: import_prop_types49.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types49.default.oneOfType([import_prop_types49.default.arrayOf(import_prop_types49.default.oneOfType([import_prop_types49.default.func, import_prop_types49.default.object, import_prop_types49.default.bool])), import_prop_types49.default.func, import_prop_types49.default.object]),
  value: import_prop_types49.default.string.isRequired
} : void 0;
PickersInput.muiName = "Input";

// node_modules/@mui/x-date-pickers/esm/PickersTextField/PickersTextField.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var _excluded8 = ["onFocus", "onBlur", "className", "classes", "color", "disabled", "error", "variant", "required", "hiddenLabel", "InputProps", "inputProps", "inputRef", "sectionListRef", "elements", "areAllSectionsEmpty", "onClick", "onKeyDown", "onKeyUp", "onPaste", "onInput", "endAdornment", "startAdornment", "tabIndex", "contentEditable", "focused", "value", "onChange", "fullWidth", "id", "name", "helperText", "FormHelperTextProps", "label", "InputLabelProps", "data-active-range-position"];
var VARIANT_COMPONENT = {
  standard: PickersInput,
  filled: PickersFilledInput,
  outlined: PickersOutlinedInput
};
var PickersTextFieldRoot = styled_default(FormControl_default, {
  name: "MuiPickersTextField",
  slot: "Root"
})({
  maxWidth: "100%"
});
var useUtilityClasses30 = (classes, ownerState) => {
  const {
    isFieldFocused: isFieldFocused3,
    isFieldDisabled,
    isFieldRequired
  } = ownerState;
  const slots = {
    root: ["root", isFieldFocused3 && !isFieldDisabled && "focused", isFieldDisabled && "disabled", isFieldRequired && "required"]
  };
  return composeClasses(slots, getPickersTextFieldUtilityClass, classes);
};
var PickersTextField = React88.forwardRef(function PickersTextField2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersTextField"
  });
  const {
    // Props used by FormControl
    onFocus,
    onBlur,
    className,
    classes: classesProp,
    color = "primary",
    disabled = false,
    error = false,
    variant = "outlined",
    required = false,
    hiddenLabel = false,
    // Props used by PickersInput
    InputProps,
    inputProps,
    inputRef,
    sectionListRef,
    elements,
    areAllSectionsEmpty,
    onClick,
    onKeyDown,
    onKeyUp,
    onPaste,
    onInput,
    endAdornment,
    startAdornment,
    tabIndex,
    contentEditable,
    focused,
    value,
    onChange,
    fullWidth,
    id: idProp,
    name,
    // Props used by FormHelperText
    helperText,
    FormHelperTextProps,
    // Props used by InputLabel
    label,
    InputLabelProps,
    // @ts-ignore
    "data-active-range-position": dataActiveRangePosition
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const rootRef = React88.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const id = useId(idProp);
  const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
  const inputLabelId = label && id ? `${id}-label` : void 0;
  const fieldOwnerState = useFieldOwnerState({
    disabled: props.disabled,
    required: props.required,
    readOnly: InputProps == null ? void 0 : InputProps.readOnly
  });
  const ownerState = React88.useMemo(() => _extends({}, fieldOwnerState, {
    isFieldValueEmpty: areAllSectionsEmpty,
    isFieldFocused: focused ?? false,
    hasFieldError: error ?? false,
    inputSize: props.size ?? "medium",
    inputColor: color ?? "primary",
    isInputInFullWidth: fullWidth ?? false,
    hasStartAdornment: Boolean(startAdornment ?? (InputProps == null ? void 0 : InputProps.startAdornment)),
    hasEndAdornment: Boolean(endAdornment ?? (InputProps == null ? void 0 : InputProps.endAdornment)),
    inputHasLabel: !!label
  }), [fieldOwnerState, areAllSectionsEmpty, focused, error, props.size, color, fullWidth, startAdornment, endAdornment, InputProps == null ? void 0 : InputProps.startAdornment, InputProps == null ? void 0 : InputProps.endAdornment, label]);
  const classes = useUtilityClasses30(classesProp, ownerState);
  const PickersInputComponent = VARIANT_COMPONENT[variant];
  const inputAdditionalProps = {};
  if (variant === "outlined") {
    if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
      inputAdditionalProps.notched = InputLabelProps.shrink;
    }
    inputAdditionalProps.label = label;
  } else if (variant === "filled") {
    inputAdditionalProps.hiddenLabel = hiddenLabel;
  }
  return (0, import_jsx_runtime46.jsx)(PickerTextFieldOwnerStateContext.Provider, {
    value: ownerState,
    children: (0, import_jsx_runtime46.jsxs)(PickersTextFieldRoot, _extends({
      className: clsx_default(classes.root, className),
      ref: handleRootRef,
      focused,
      disabled,
      variant,
      error,
      color,
      fullWidth,
      required,
      ownerState
    }, other, {
      children: [label != null && label !== "" && (0, import_jsx_runtime46.jsx)(InputLabel_default, _extends({
        htmlFor: id,
        id: inputLabelId
      }, InputLabelProps, {
        children: label
      })), (0, import_jsx_runtime46.jsx)(PickersInputComponent, _extends({
        elements,
        areAllSectionsEmpty,
        onClick,
        onKeyDown,
        onKeyUp,
        onInput,
        onPaste,
        onFocus,
        onBlur,
        endAdornment,
        startAdornment,
        tabIndex,
        contentEditable,
        value,
        onChange,
        id,
        fullWidth,
        inputProps,
        inputRef,
        sectionListRef,
        label,
        name,
        role: "group",
        "aria-labelledby": inputLabelId,
        "aria-describedby": helperTextId,
        "aria-live": helperTextId ? "polite" : void 0,
        "data-active-range-position": dataActiveRangePosition
      }, inputAdditionalProps, InputProps)), helperText && (0, import_jsx_runtime46.jsx)(FormHelperText_default, _extends({
        id: helperTextId
      }, FormHelperTextProps, {
        children: helperText
      }))]
    }))
  });
});
if (true) PickersTextField.displayName = "PickersTextField";
true ? PickersTextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: import_prop_types50.default.bool.isRequired,
  className: import_prop_types50.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types50.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types50.default.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: import_prop_types50.default.bool.isRequired,
  disabled: import_prop_types50.default.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: import_prop_types50.default.arrayOf(import_prop_types50.default.shape({
    after: import_prop_types50.default.object.isRequired,
    before: import_prop_types50.default.object.isRequired,
    container: import_prop_types50.default.object.isRequired,
    content: import_prop_types50.default.object.isRequired
  })).isRequired,
  endAdornment: import_prop_types50.default.node,
  error: import_prop_types50.default.bool.isRequired,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types50.default.bool,
  FormHelperTextProps: import_prop_types50.default.object,
  fullWidth: import_prop_types50.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types50.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types50.default.bool,
  id: import_prop_types50.default.string,
  InputLabelProps: import_prop_types50.default.object,
  inputProps: import_prop_types50.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types50.default.object,
  inputRef: refType_default,
  label: import_prop_types50.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types50.default.oneOf(["dense", "none", "normal"]),
  name: import_prop_types50.default.string,
  onBlur: import_prop_types50.default.func.isRequired,
  onChange: import_prop_types50.default.func.isRequired,
  onClick: import_prop_types50.default.func.isRequired,
  onFocus: import_prop_types50.default.func.isRequired,
  onInput: import_prop_types50.default.func.isRequired,
  onKeyDown: import_prop_types50.default.func.isRequired,
  onPaste: import_prop_types50.default.func.isRequired,
  readOnly: import_prop_types50.default.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: import_prop_types50.default.bool,
  sectionListRef: import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.shape({
    current: import_prop_types50.default.shape({
      getRoot: import_prop_types50.default.func.isRequired,
      getSectionContainer: import_prop_types50.default.func.isRequired,
      getSectionContent: import_prop_types50.default.func.isRequired,
      getSectionIndexFromDOMElement: import_prop_types50.default.func.isRequired
    })
  })]),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types50.default.oneOf(["medium", "small"]),
  startAdornment: import_prop_types50.default.node,
  style: import_prop_types50.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types50.default.oneOfType([import_prop_types50.default.arrayOf(import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object, import_prop_types50.default.bool])), import_prop_types50.default.func, import_prop_types50.default.object]),
  value: import_prop_types50.default.string.isRequired,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types50.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/@mui/x-date-pickers/esm/internals/components/PickerFieldUI.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var _excluded9 = ["enableAccessibleFieldDOMStructure"];
var _excluded22 = ["InputProps", "readOnly", "onClear", "clearable", "clearButtonPosition", "openPickerButtonPosition", "openPickerAriaLabel"];
var _excluded32 = ["onPaste", "onKeyDown", "inputMode", "readOnly", "InputProps", "inputProps", "inputRef", "onClear", "clearable", "clearButtonPosition", "openPickerButtonPosition", "openPickerAriaLabel"];
var _excluded42 = ["ownerState"];
var _excluded52 = ["ownerState"];
var _excluded62 = ["ownerState"];
var _excluded72 = ["ownerState"];
var _excluded82 = ["InputProps", "inputProps"];
var cleanFieldResponse = (_ref) => {
  let {
    enableAccessibleFieldDOMStructure
  } = _ref, fieldResponse = _objectWithoutPropertiesLoose(_ref, _excluded9);
  if (enableAccessibleFieldDOMStructure) {
    const {
      InputProps: InputProps2,
      readOnly: readOnly2,
      onClear: onClear2,
      clearable: clearable2,
      clearButtonPosition: clearButtonPosition2,
      openPickerButtonPosition: openPickerButtonPosition2,
      openPickerAriaLabel: openPickerAriaLabel2
    } = fieldResponse, other2 = _objectWithoutPropertiesLoose(fieldResponse, _excluded22);
    return {
      clearable: clearable2,
      onClear: onClear2,
      clearButtonPosition: clearButtonPosition2,
      openPickerButtonPosition: openPickerButtonPosition2,
      openPickerAriaLabel: openPickerAriaLabel2,
      textFieldProps: _extends({}, other2, {
        InputProps: _extends({}, InputProps2 ?? {}, {
          readOnly: readOnly2
        })
      })
    };
  }
  const {
    onPaste,
    onKeyDown,
    inputMode,
    readOnly,
    InputProps,
    inputProps,
    inputRef,
    onClear,
    clearable,
    clearButtonPosition,
    openPickerButtonPosition,
    openPickerAriaLabel
  } = fieldResponse, other = _objectWithoutPropertiesLoose(fieldResponse, _excluded32);
  return {
    clearable,
    onClear,
    clearButtonPosition,
    openPickerButtonPosition,
    openPickerAriaLabel,
    textFieldProps: _extends({}, other, {
      InputProps: _extends({}, InputProps ?? {}, {
        readOnly
      }),
      inputProps: _extends({}, inputProps ?? {}, {
        inputMode,
        onPaste,
        onKeyDown,
        ref: inputRef
      })
    })
  };
};
var PickerFieldUIContext = React89.createContext({
  slots: {},
  slotProps: {},
  inputRef: void 0
});
if (true) PickerFieldUIContext.displayName = "PickerFieldUIContext";
function PickerFieldUI(props) {
  var _a, _b;
  const {
    slots,
    slotProps,
    fieldResponse,
    defaultOpenPickerIcon
  } = props;
  const translations = usePickerTranslations();
  const pickerContext = useNullablePickerContext();
  const pickerFieldUIContext = React89.useContext(PickerFieldUIContext);
  const {
    textFieldProps,
    onClear,
    clearable,
    openPickerAriaLabel,
    clearButtonPosition: clearButtonPositionProp = "end",
    openPickerButtonPosition: openPickerButtonPositionProp = "end"
  } = cleanFieldResponse(fieldResponse);
  const ownerState = useFieldOwnerState(textFieldProps);
  const handleClickOpeningButton = useEventCallback_default((event) => {
    event.preventDefault();
    pickerContext == null ? void 0 : pickerContext.setOpen((prev) => !prev);
  });
  const triggerStatus = pickerContext ? pickerContext.triggerStatus : "hidden";
  const clearButtonPosition = clearable ? clearButtonPositionProp : null;
  const openPickerButtonPosition = triggerStatus !== "hidden" ? openPickerButtonPositionProp : null;
  const TextField3 = (slots == null ? void 0 : slots.textField) ?? pickerFieldUIContext.slots.textField ?? (fieldResponse.enableAccessibleFieldDOMStructure === false ? TextField_default : PickersTextField);
  const InputAdornment3 = (slots == null ? void 0 : slots.inputAdornment) ?? pickerFieldUIContext.slots.inputAdornment ?? InputAdornment_default;
  const _useSlotProps = useSlotProps_default({
    elementType: InputAdornment3,
    externalSlotProps: mergeSlotProps3(pickerFieldUIContext.slotProps.inputAdornment, slotProps == null ? void 0 : slotProps.inputAdornment),
    additionalProps: {
      position: "start"
    },
    ownerState: _extends({}, ownerState, {
      position: "start"
    })
  }), startInputAdornmentProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded42);
  const _useSlotProps2 = useSlotProps_default({
    elementType: InputAdornment3,
    externalSlotProps: slotProps == null ? void 0 : slotProps.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: _extends({}, ownerState, {
      position: "end"
    })
  }), endInputAdornmentProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded52);
  const OpenPickerButton = pickerFieldUIContext.slots.openPickerButton ?? IconButton_default;
  const _useSlotProps3 = useSlotProps_default({
    elementType: OpenPickerButton,
    externalSlotProps: pickerFieldUIContext.slotProps.openPickerButton,
    additionalProps: {
      disabled: triggerStatus === "disabled",
      onClick: handleClickOpeningButton,
      "aria-label": openPickerAriaLabel,
      edge: (
        // open button is always rendered at the edge
        textFieldProps.variant !== "standard" ? openPickerButtonPosition : false
      )
    },
    ownerState
  }), openPickerButtonProps = _objectWithoutPropertiesLoose(_useSlotProps3, _excluded62);
  const OpenPickerIcon = pickerFieldUIContext.slots.openPickerIcon ?? defaultOpenPickerIcon;
  const openPickerIconProps = useSlotProps_default({
    elementType: OpenPickerIcon,
    externalSlotProps: pickerFieldUIContext.slotProps.openPickerIcon,
    ownerState
  });
  const ClearButton = (slots == null ? void 0 : slots.clearButton) ?? pickerFieldUIContext.slots.clearButton ?? IconButton_default;
  const _useSlotProps4 = useSlotProps_default({
    elementType: ClearButton,
    externalSlotProps: mergeSlotProps3(pickerFieldUIContext.slotProps.clearButton, slotProps == null ? void 0 : slotProps.clearButton),
    className: "clearButton",
    additionalProps: {
      title: translations.fieldClearLabel,
      tabIndex: -1,
      onClick: onClear,
      disabled: fieldResponse.disabled || fieldResponse.readOnly,
      edge: (
        // clear button can only be at the edge if it's position differs from the open button
        textFieldProps.variant !== "standard" && clearButtonPosition !== openPickerButtonPosition ? clearButtonPosition : false
      )
    },
    ownerState
  }), clearButtonProps = _objectWithoutPropertiesLoose(_useSlotProps4, _excluded72);
  const ClearIcon2 = (slots == null ? void 0 : slots.clearIcon) ?? pickerFieldUIContext.slots.clearIcon ?? ClearIcon;
  const clearIconProps = useSlotProps_default({
    elementType: ClearIcon2,
    externalSlotProps: mergeSlotProps3(pickerFieldUIContext.slotProps.clearIcon, slotProps == null ? void 0 : slotProps.clearIcon),
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  textFieldProps.ref = useForkRef(textFieldProps.ref, pickerContext == null ? void 0 : pickerContext.rootRef);
  if (!textFieldProps.InputProps) {
    textFieldProps.InputProps = {};
  }
  if (pickerContext) {
    textFieldProps.InputProps.ref = pickerContext.triggerRef;
  }
  if (!((_a = textFieldProps.InputProps) == null ? void 0 : _a.startAdornment) && (clearButtonPosition === "start" || openPickerButtonPosition === "start")) {
    textFieldProps.InputProps.startAdornment = (0, import_jsx_runtime47.jsxs)(InputAdornment3, _extends({}, startInputAdornmentProps, {
      children: [openPickerButtonPosition === "start" && (0, import_jsx_runtime47.jsx)(OpenPickerButton, _extends({}, openPickerButtonProps, {
        children: (0, import_jsx_runtime47.jsx)(OpenPickerIcon, _extends({}, openPickerIconProps))
      })), clearButtonPosition === "start" && (0, import_jsx_runtime47.jsx)(ClearButton, _extends({}, clearButtonProps, {
        children: (0, import_jsx_runtime47.jsx)(ClearIcon2, _extends({}, clearIconProps))
      }))]
    }));
  }
  if (!((_b = textFieldProps.InputProps) == null ? void 0 : _b.endAdornment) && (clearButtonPosition === "end" || openPickerButtonPosition === "end")) {
    textFieldProps.InputProps.endAdornment = (0, import_jsx_runtime47.jsxs)(InputAdornment3, _extends({}, endInputAdornmentProps, {
      children: [clearButtonPosition === "end" && (0, import_jsx_runtime47.jsx)(ClearButton, _extends({}, clearButtonProps, {
        children: (0, import_jsx_runtime47.jsx)(ClearIcon2, _extends({}, clearIconProps))
      })), openPickerButtonPosition === "end" && (0, import_jsx_runtime47.jsx)(OpenPickerButton, _extends({}, openPickerButtonProps, {
        children: (0, import_jsx_runtime47.jsx)(OpenPickerIcon, _extends({}, openPickerIconProps))
      }))]
    }));
  }
  if (clearButtonPosition != null) {
    textFieldProps.sx = [{
      "& .clearButton": {
        opacity: 1
      },
      "@media (pointer: fine)": {
        "& .clearButton": {
          opacity: 0
        },
        "&:hover, &:focus-within": {
          ".clearButton": {
            opacity: 1
          }
        }
      }
    }, ...Array.isArray(textFieldProps.sx) ? textFieldProps.sx : [textFieldProps.sx]];
  }
  return (0, import_jsx_runtime47.jsx)(TextField3, _extends({}, textFieldProps));
}
function mergeSlotProps3(slotPropsA, slotPropsB) {
  if (!slotPropsA) {
    return slotPropsB;
  }
  if (!slotPropsB) {
    return slotPropsA;
  }
  return (ownerState) => {
    return _extends({}, resolveComponentProps_default(slotPropsB, ownerState), resolveComponentProps_default(slotPropsA, ownerState));
  };
}
function useFieldTextFieldProps(parameters) {
  const {
    ref,
    externalForwardedProps,
    slotProps
  } = parameters;
  const pickerFieldUIContext = React89.useContext(PickerFieldUIContext);
  const pickerContext = useNullablePickerContext();
  const ownerState = useFieldOwnerState(externalForwardedProps);
  const {
    InputProps,
    inputProps
  } = externalForwardedProps, otherExternalForwardedProps = _objectWithoutPropertiesLoose(externalForwardedProps, _excluded82);
  const textFieldProps = useSlotProps_default({
    elementType: PickersTextField,
    externalSlotProps: mergeSlotProps3(pickerFieldUIContext.slotProps.textField, slotProps == null ? void 0 : slotProps.textField),
    externalForwardedProps: otherExternalForwardedProps,
    additionalProps: {
      ref,
      sx: pickerContext == null ? void 0 : pickerContext.rootSx,
      label: pickerContext == null ? void 0 : pickerContext.label,
      name: pickerContext == null ? void 0 : pickerContext.name,
      className: pickerContext == null ? void 0 : pickerContext.rootClassName,
      inputRef: pickerFieldUIContext.inputRef
    },
    ownerState
  });
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  return textFieldProps;
}
function PickerFieldUIContextProvider(props) {
  const {
    slots = {},
    slotProps = {},
    inputRef,
    children: children2
  } = props;
  const contextValue = React89.useMemo(() => ({
    inputRef,
    slots: {
      openPickerButton: slots.openPickerButton,
      openPickerIcon: slots.openPickerIcon,
      textField: slots.textField,
      inputAdornment: slots.inputAdornment,
      clearIcon: slots.clearIcon,
      clearButton: slots.clearButton
    },
    slotProps: {
      openPickerButton: slotProps.openPickerButton,
      openPickerIcon: slotProps.openPickerIcon,
      textField: slotProps.textField,
      inputAdornment: slotProps.inputAdornment,
      clearIcon: slotProps.clearIcon,
      clearButton: slotProps.clearButton
    }
  }), [inputRef, slots.openPickerButton, slots.openPickerIcon, slots.textField, slots.inputAdornment, slots.clearIcon, slots.clearButton, slotProps.openPickerButton, slotProps.openPickerIcon, slotProps.textField, slotProps.inputAdornment, slotProps.clearIcon, slotProps.clearButton]);
  return (0, import_jsx_runtime47.jsx)(PickerFieldUIContext.Provider, {
    value: contextValue,
    children: children2
  });
}

// node_modules/@mui/x-date-pickers/esm/TimeField/TimeField.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var _excluded10 = ["slots", "slotProps", "InputProps", "inputProps"];
var TimeField = React90.forwardRef(function TimeField2(inProps, inRef) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiTimeField"
  });
  const {
    slots,
    slotProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded10);
  const textFieldProps = useFieldTextFieldProps({
    slotProps,
    ref: inRef,
    externalForwardedProps: other
  });
  const fieldResponse = useTimeField(textFieldProps);
  return (0, import_jsx_runtime48.jsx)(PickerFieldUI, {
    slots,
    slotProps,
    fieldResponse,
    defaultOpenPickerIcon: ClockIcon
  });
});
if (true) TimeField.displayName = "TimeField";
true ? TimeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types51.default.bool,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types51.default.bool,
  className: import_prop_types51.default.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: import_prop_types51.default.bool,
  /**
   * The position at which the clear button is placed.
   * If the field is not clearable, the button is not rendered.
   * @default 'end'
   */
  clearButtonPosition: import_prop_types51.default.oneOf(["end", "start"]),
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types51.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types51.default.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types51.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types51.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types51.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types51.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types51.default.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: import_prop_types51.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types51.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types51.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types51.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: import_prop_types51.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types51.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types51.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types51.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types51.default.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: import_prop_types51.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: import_prop_types51.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: import_prop_types51.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types51.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types51.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types51.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types51.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types51.default.number,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types51.default.string,
  onBlur: import_prop_types51.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types51.default.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: import_prop_types51.default.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: import_prop_types51.default.func,
  onFocus: import_prop_types51.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types51.default.func,
  /**
   * The position at which the opening button is placed.
   * If there is no Picker to open, the button is not rendered
   * @default 'end'
   */
  openPickerButtonPosition: import_prop_types51.default.oneOf(["end", "start"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types51.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types51.default.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types51.default.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types51.default.oneOfType([import_prop_types51.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types51.default.number]),
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types51.default.func,
  /**
   * If `true`, the format will respect the leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (for example on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (for example "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default false
   */
  shouldRespectLeadingZeros: import_prop_types51.default.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types51.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types51.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types51.default.object,
  style: import_prop_types51.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types51.default.oneOfType([import_prop_types51.default.arrayOf(import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object, import_prop_types51.default.bool])), import_prop_types51.default.func, import_prop_types51.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types51.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types51.default.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types51.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/@mui/x-date-pickers/esm/TimePicker/shared.js
var React100 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/TimePicker/TimePickerToolbar.js
var React99 = __toESM(require_react(), 1);
var import_prop_types53 = __toESM(require_prop_types(), 1);

// node_modules/@mui/x-date-pickers/esm/internals/components/PickersToolbarText.js
var React91 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/internals/components/pickersToolbarTextClasses.js
function getPickersToolbarTextUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbarText", slot);
}
var pickersToolbarTextClasses = generateUtilityClasses("MuiPickersToolbarText", ["root"]);

// node_modules/@mui/x-date-pickers/esm/internals/components/PickersToolbarText.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var _excluded11 = ["className", "classes", "selected", "value"];
var useUtilityClasses31 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
};
var PickersToolbarTextRoot = styled_default(Typography_default, {
  name: "MuiPickersToolbarText",
  slot: "Root"
})(({
  theme
}) => ({
  transition: theme.transitions.create("color"),
  color: (theme.vars || theme).palette.text.secondary,
  [`&[data-selected]`]: {
    color: (theme.vars || theme).palette.text.primary
  }
}));
var PickersToolbarText = React91.forwardRef(function PickersToolbarText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarText"
  });
  const {
    className,
    classes: classesProp,
    selected,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const classes = useUtilityClasses31(classesProp);
  return (0, import_jsx_runtime49.jsx)(PickersToolbarTextRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    component: "span",
    ownerState: props
  }, selected && {
    "data-selected": true
  }, other, {
    children: value
  }));
});
if (true) PickersToolbarText.displayName = "PickersToolbarText";

// node_modules/@mui/x-date-pickers/esm/internals/components/PickersToolbarButton.js
var React95 = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/Button/Button.js
var React94 = __toESM(require_react(), 1);
var import_prop_types52 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Button/buttonClasses.js
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]);
var buttonClasses_default = buttonClasses;

// node_modules/@mui/material/esm/ButtonGroup/ButtonGroupContext.js
var React92 = __toESM(require_react(), 1);
var ButtonGroupContext = React92.createContext({});
if (true) {
  ButtonGroupContext.displayName = "ButtonGroupContext";
}
var ButtonGroupContext_default = ButtonGroupContext;

// node_modules/@mui/material/esm/ButtonGroup/ButtonGroupButtonContext.js
var React93 = __toESM(require_react(), 1);
var ButtonGroupButtonContext = React93.createContext(void 0);
if (true) {
  ButtonGroupButtonContext.displayName = "ButtonGroupButtonContext";
}
var ButtonGroupButtonContext_default = ButtonGroupButtonContext;

// node_modules/@mui/material/esm/Button/Button.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses32 = (ownerState) => {
  const {
    color,
    disableElevation,
    fullWidth,
    size,
    variant,
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading", variant, `${variant}${capitalize_default(color)}`, `size${capitalize_default(size)}`, `${variant}Size${capitalize_default(size)}`, `color${capitalize_default(color)}`, disableElevation && "disableElevation", fullWidth && "fullWidth", loading && `loadingPosition${capitalize_default(loadingPosition)}`],
    startIcon: ["icon", "startIcon", `iconSize${capitalize_default(size)}`],
    endIcon: ["icon", "endIcon", `iconSize${capitalize_default(size)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return {
    ...classes,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...composedClasses
  };
};
var commonIconStyles = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}];
var ButtonRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, styles4[ownerState.variant], styles4[`${ownerState.variant}${capitalize_default(ownerState.color)}`], styles4[`size${capitalize_default(ownerState.size)}`], styles4[`${ownerState.variant}Size${capitalize_default(ownerState.size)}`], ownerState.color === "inherit" && styles4.colorInherit, ownerState.disableElevation && styles4.disableElevation, ownerState.fullWidth && styles4.fullWidth, ownerState.loading && styles4.loading];
  }
})(memoTheme_default(({
  theme
}) => {
  const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
  const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
  return {
    ...theme.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${buttonClasses_default.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: `var(--variant-containedColor)`,
        backgroundColor: `var(--variant-containedBg)`,
        boxShadow: (theme.vars || theme).shadows[2],
        "&:hover": {
          boxShadow: (theme.vars || theme).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (theme.vars || theme).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (theme.vars || theme).shadows[8]
        },
        [`&.${buttonClasses_default.focusVisible}`]: {
          boxShadow: (theme.vars || theme).shadows[6]
        },
        [`&.${buttonClasses_default.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled,
          boxShadow: (theme.vars || theme).shadows[0],
          backgroundColor: (theme.vars || theme).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: `var(--variant-outlinedBorder, currentColor)`,
        backgroundColor: `var(--variant-outlinedBg)`,
        color: `var(--variant-outlinedColor)`,
        [`&.${buttonClasses_default.disabled}`]: {
          border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: `var(--variant-textColor)`,
        backgroundColor: `var(--variant-textBg)`
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color
      },
      style: {
        "--variant-textColor": (theme.vars || theme).palette[color].main,
        "--variant-outlinedColor": (theme.vars || theme).palette[color].main,
        "--variant-outlinedBorder": theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)` : alpha(theme.palette[color].main, 0.5),
        "--variant-containedColor": (theme.vars || theme).palette[color].contrastText,
        "--variant-containedBg": (theme.vars || theme).palette[color].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (theme.vars || theme).palette[color].dark,
            "--variant-textBg": theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (theme.vars || theme).palette[color].main,
            "--variant-outlinedBg": theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
            "--variant-textBg": theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
            "--variant-outlinedBg": theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: true
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${buttonClasses_default.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${buttonClasses_default.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: true
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: theme.transitions.duration.short
        }),
        [`&.${buttonClasses_default.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
}));
var ButtonStartIcon = styled_default("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.startIcon, ownerState.loading && styles4.startIconLoadingStart, styles4[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: true
    },
    style: {
      transition: theme.transitions.create(["opacity"], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: true,
      fullWidth: true
    },
    style: {
      marginRight: -8
    }
  }, ...commonIconStyles]
}));
var ButtonEndIcon = styled_default("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.endIcon, ownerState.loading && styles4.endIconLoadingEnd, styles4[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: true
    },
    style: {
      transition: theme.transitions.create(["opacity"], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: true,
      fullWidth: true
    },
    style: {
      marginLeft: -8
    }
  }, ...commonIconStyles]
}));
var ButtonLoadingIndicator = styled_default("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (theme.vars || theme).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: true
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: true
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
}));
var ButtonLoadingIconPlaceholder = styled_default("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
});
var Button = React94.forwardRef(function Button2(inProps, ref) {
  const contextProps = React94.useContext(ButtonGroupContext_default);
  const buttonGroupButtonContextPositionClassName = React94.useContext(ButtonGroupButtonContext_default);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useDefaultProps2({
    props: resolvedProps,
    name: "MuiButton"
  });
  const {
    children: children2,
    color = "primary",
    component = "button",
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = "center",
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text",
    ...other
  } = props;
  const loadingId = useId_default(idProp);
  const loadingIndicator = loadingIndicatorProp ?? (0, import_jsx_runtime50.jsx)(CircularProgress_default, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    loading,
    loadingIndicator,
    loadingPosition,
    size,
    type,
    variant
  };
  const classes = useUtilityClasses32(ownerState);
  const startIcon = (startIconProp || loading && loadingPosition === "start") && (0, import_jsx_runtime50.jsx)(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp || (0, import_jsx_runtime50.jsx)(ButtonLoadingIconPlaceholder, {
      className: classes.loadingIconPlaceholder,
      ownerState
    })
  });
  const endIcon = (endIconProp || loading && loadingPosition === "end") && (0, import_jsx_runtime50.jsx)(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp || (0, import_jsx_runtime50.jsx)(ButtonLoadingIconPlaceholder, {
      className: classes.loadingIconPlaceholder,
      ownerState
    })
  });
  const positionClassName = buttonGroupButtonContextPositionClassName || "";
  const loader = typeof loading === "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    (0, import_jsx_runtime50.jsx)("span", {
      className: classes.loadingWrapper,
      style: {
        display: "contents"
      },
      children: loading && (0, import_jsx_runtime50.jsx)(ButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState,
        children: loadingIndicator
      })
    })
  ) : null;
  return (0, import_jsx_runtime50.jsxs)(ButtonRoot, {
    ownerState,
    className: clsx_default(contextProps.className, classes.root, className, positionClassName),
    component,
    disabled: disabled || loading,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx_default(classes.focusVisible, focusVisibleClassName),
    ref,
    type,
    id: loading ? loadingId : idProp,
    ...other,
    classes,
    children: [startIcon, loadingPosition !== "end" && loader, children2, loadingPosition === "end" && loader, endIcon]
  });
});
true ? Button.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types52.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types52.default.object,
  /**
   * @ignore
   */
  className: import_prop_types52.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types52.default.oneOfType([import_prop_types52.default.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), import_prop_types52.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types52.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types52.default.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: import_prop_types52.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types52.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types52.default.bool,
  /**
   * Element placed after the children.
   */
  endIcon: import_prop_types52.default.node,
  /**
   * @ignore
   */
  focusVisibleClassName: import_prop_types52.default.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types52.default.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: import_prop_types52.default.string,
  /**
   * @ignore
   */
  id: import_prop_types52.default.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: import_prop_types52.default.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: import_prop_types52.default.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: import_prop_types52.default.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: import_prop_types52.default.oneOfType([import_prop_types52.default.oneOf(["small", "medium", "large"]), import_prop_types52.default.string]),
  /**
   * Element placed before the children.
   */
  startIcon: import_prop_types52.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types52.default.oneOfType([import_prop_types52.default.arrayOf(import_prop_types52.default.oneOfType([import_prop_types52.default.func, import_prop_types52.default.object, import_prop_types52.default.bool])), import_prop_types52.default.func, import_prop_types52.default.object]),
  /**
   * @ignore
   */
  type: import_prop_types52.default.oneOfType([import_prop_types52.default.oneOf(["button", "reset", "submit"]), import_prop_types52.default.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: import_prop_types52.default.oneOfType([import_prop_types52.default.oneOf(["contained", "outlined", "text"]), import_prop_types52.default.string])
} : void 0;
var Button_default = Button;

// node_modules/@mui/x-date-pickers/esm/internals/components/pickersToolbarClasses.js
function getPickersToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbar", slot);
}
var pickersToolbarClasses = generateUtilityClasses("MuiPickersToolbar", ["root", "title", "content"]);

// node_modules/@mui/x-date-pickers/esm/internals/components/PickersToolbarButton.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var _excluded12 = ["align", "className", "classes", "selected", "typographyClassName", "value", "variant", "width"];
var useUtilityClasses33 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarButtonRoot = styled_default(Button_default, {
  name: "MuiPickersToolbarButton",
  slot: "Root"
})({
  padding: 0,
  minWidth: 16,
  textTransform: "none"
});
var PickersToolbarButton = React95.forwardRef(function PickersToolbarButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarButton"
  });
  const {
    align,
    className,
    classes: classesProp,
    selected,
    typographyClassName,
    value,
    variant,
    width
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const classes = useUtilityClasses33(classesProp);
  return (0, import_jsx_runtime51.jsx)(PickersToolbarButtonRoot, _extends({
    variant: "text",
    ref,
    className: clsx_default(classes.root, className),
    ownerState: props
  }, width ? {
    sx: {
      width
    }
  } : {}, other, {
    children: (0, import_jsx_runtime51.jsx)(PickersToolbarText, {
      align,
      className: typographyClassName,
      variant,
      value,
      selected
    })
  }));
});
if (true) PickersToolbarButton.displayName = "PickersToolbarButton";

// node_modules/@mui/x-date-pickers/esm/internals/components/PickersToolbar.js
var React97 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useToolbarOwnerState.js
var React96 = __toESM(require_react(), 1);
function useToolbarOwnerState() {
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const isRtl = useRtl();
  return React96.useMemo(() => _extends({}, pickerOwnerState, {
    toolbarDirection: isRtl ? "rtl" : "ltr"
  }), [pickerOwnerState, isRtl]);
}

// node_modules/@mui/x-date-pickers/esm/internals/components/PickersToolbar.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var _excluded13 = ["children", "className", "classes", "toolbarTitle", "hidden", "titleId", "classes", "landscapeDirection"];
var useUtilityClasses34 = (classes) => {
  const slots = {
    root: ["root"],
    title: ["title"],
    content: ["content"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarRoot = styled_default("div", {
  name: "MuiPickersToolbar",
  slot: "Root"
})(({
  theme
}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: theme.spacing(2, 3),
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      height: "auto",
      maxWidth: 160,
      padding: 16,
      justifyContent: "flex-start",
      flexWrap: "wrap"
    }
  }]
}));
var PickersToolbarContent = styled_default("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "landscapeDirection"
})({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column"
    }
  }, {
    props: {
      pickerOrientation: "landscape",
      landscapeDirection: "row"
    },
    style: {
      flexDirection: "row"
    }
  }]
});
var PickersToolbar = React97.forwardRef(function PickersToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbar"
  });
  const {
    children: children2,
    className,
    classes: classesProp,
    toolbarTitle,
    hidden,
    titleId,
    landscapeDirection
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const ownerState = useToolbarOwnerState();
  const classes = useUtilityClasses34(classesProp);
  if (hidden) {
    return null;
  }
  return (0, import_jsx_runtime52.jsxs)(PickersToolbarRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime52.jsx)(Typography_default, {
      color: "text.secondary",
      variant: "overline",
      id: titleId,
      className: classes.title,
      children: toolbarTitle
    }), (0, import_jsx_runtime52.jsx)(PickersToolbarContent, {
      className: classes.content,
      ownerState,
      landscapeDirection,
      children: children2
    })]
  }));
});
if (true) PickersToolbar.displayName = "PickersToolbar";

// node_modules/@mui/x-date-pickers/esm/internals/hooks/date-helpers-hooks.js
var React98 = __toESM(require_react(), 1);
function useMeridiemMode(date, ampm, onChange, selectionState) {
  const utils = useUtils();
  const cleanDate = React98.useMemo(() => !utils.isValid(date) ? null : date, [utils, date]);
  const meridiemMode = getMeridiem(cleanDate, utils);
  const handleMeridiemChange = React98.useCallback((mode) => {
    const timeWithMeridiem = cleanDate == null ? null : convertToMeridiem(cleanDate, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, selectionState ?? "partial");
  }, [ampm, cleanDate, onChange, selectionState, utils]);
  return {
    meridiemMode,
    handleMeridiemChange
  };
}

// node_modules/@mui/x-date-pickers/esm/TimePicker/timePickerToolbarClasses.js
function getTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiTimePickerToolbar", slot);
}
var timePickerToolbarClasses = generateUtilityClasses("MuiTimePickerToolbar", ["root", "separator", "hourMinuteLabel", "hourMinuteLabelLandscape", "hourMinuteLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]);

// node_modules/@mui/x-date-pickers/esm/TimePicker/TimePickerToolbar.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var _excluded14 = ["ampm", "ampmInClock", "className", "classes"];
var useUtilityClasses35 = (classes, ownerState) => {
  const {
    pickerOrientation,
    toolbarDirection
  } = ownerState;
  const slots = {
    root: ["root"],
    separator: ["separator"],
    hourMinuteLabel: ["hourMinuteLabel", pickerOrientation === "landscape" && "hourMinuteLabelLandscape", toolbarDirection === "rtl" && "hourMinuteLabelReverse"],
    ampmSelection: ["ampmSelection", pickerOrientation === "landscape" && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return composeClasses(slots, getTimePickerToolbarUtilityClass, classes);
};
var TimePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiTimePickerToolbar",
  slot: "Root"
})({});
var TimePickerToolbarSeparator = styled_default(PickersToolbarText, {
  name: "MuiTimePickerToolbar",
  slot: "Separator"
})({
  outline: 0,
  margin: "0 4px 0 2px",
  cursor: "default"
});
var TimePickerToolbarHourMinuteLabel = styled_default("div", {
  name: "MuiTimePickerToolbar",
  slot: "HourMinuteLabel",
  overridesResolver: (props, styles4) => [{
    [`&.${timePickerToolbarClasses.hourMinuteLabelLandscape}`]: styles4.hourMinuteLabelLandscape,
    [`&.${timePickerToolbarClasses.hourMinuteLabelReverse}`]: styles4.hourMinuteLabelReverse
  }, styles4.hourMinuteLabel]
})({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  variants: [{
    props: {
      toolbarDirection: "rtl"
    },
    style: {
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      marginTop: "auto"
    }
  }]
});
var TimePickerToolbarAmPmSelection = styled_default("div", {
  name: "MuiTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (props, styles4) => [{
    [`.${timePickerToolbarClasses.ampmLabel}`]: styles4.ampmLabel
  }, {
    [`&.${timePickerToolbarClasses.ampmLandscape}`]: styles4.ampmLandscape
  }, styles4.ampmSelection]
})({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12,
  [`& .${timePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  },
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      margin: "4px 0 auto",
      flexDirection: "row",
      justifyContent: "space-around",
      flexBasis: "100%"
    }
  }]
});
function TimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePickerToolbar"
  });
  const {
    ampm,
    ampmInClock,
    className,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const utils = useUtils();
  const translations = usePickerTranslations();
  const ownerState = useToolbarOwnerState();
  const classes = useUtilityClasses35(classesProp, ownerState);
  const {
    value,
    setValue,
    disabled,
    readOnly,
    view,
    setView,
    views
  } = usePickerContext();
  const showAmPmControl = Boolean(ampm && !ampmInClock && views.includes("hours"));
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(value, ampm, (newValue) => setValue(newValue, {
    changeImportance: "set"
  }));
  const formatSection = (format) => {
    if (!utils.isValid(value)) {
      return "--";
    }
    return utils.format(value, format);
  };
  const separator = (0, import_jsx_runtime53.jsx)(TimePickerToolbarSeparator, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return (0, import_jsx_runtime53.jsxs)(TimePickerToolbarRoot, _extends({
    landscapeDirection: "row",
    toolbarTitle: translations.timePickerToolbarTitle,
    ownerState,
    className: clsx_default(classes.root, className)
  }, other, {
    children: [(0, import_jsx_runtime53.jsxs)(TimePickerToolbarHourMinuteLabel, {
      className: classes.hourMinuteLabel,
      ownerState,
      children: [arrayIncludes(views, "hours") && (0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setView("hours"),
        selected: view === "hours",
        value: formatSection(ampm ? "hours12h" : "hours24h")
      }), arrayIncludes(views, ["hours", "minutes"]) && separator, arrayIncludes(views, "minutes") && (0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => setView("minutes"),
        selected: view === "minutes",
        value: formatSection("minutes")
      }), arrayIncludes(views, ["minutes", "seconds"]) && separator, arrayIncludes(views, "seconds") && (0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
        variant: "h3",
        onClick: () => setView("seconds"),
        selected: view === "seconds",
        value: formatSection("seconds")
      })]
    }), showAmPmControl && (0, import_jsx_runtime53.jsxs)(TimePickerToolbarAmPmSelection, {
      className: classes.ampmSelection,
      ownerState,
      children: [(0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "am",
        typographyClassName: classes.ampmLabel,
        value: formatMeridiem(utils, "am"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled
      }), (0, import_jsx_runtime53.jsx)(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "pm",
        typographyClassName: classes.ampmLabel,
        value: formatMeridiem(utils, "pm"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        disabled
      })]
    })]
  }));
}
true ? TimePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  ampm: import_prop_types53.default.bool,
  ampmInClock: import_prop_types53.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types53.default.object,
  className: import_prop_types53.default.string,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: import_prop_types53.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types53.default.oneOfType([import_prop_types53.default.arrayOf(import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object, import_prop_types53.default.bool])), import_prop_types53.default.func, import_prop_types53.default.object]),
  titleId: import_prop_types53.default.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: import_prop_types53.default.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: import_prop_types53.default.node
} : void 0;

// node_modules/@mui/x-date-pickers/esm/TimePicker/shared.js
function useTimePickerDefaultizedProps(props, name) {
  var _a;
  const utils = useUtils();
  const themeProps = useThemeProps({
    props,
    name
  });
  const validationProps = useApplyDefaultValuesToTimeValidationProps(themeProps);
  const ampm = themeProps.ampm ?? utils.is12HourCycleInCurrentLocale();
  const localeText = React100.useMemo(() => {
    var _a2;
    if (((_a2 = themeProps.localeText) == null ? void 0 : _a2.toolbarTitle) == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      timePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  return _extends({}, themeProps, validationProps, {
    ampm,
    localeText
  }, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["hours", "minutes"],
    defaultOpenTo: "hours"
  }), {
    slots: _extends({
      toolbar: TimePickerToolbar
    }, themeProps.slots),
    slotProps: _extends({}, themeProps.slotProps, {
      toolbar: _extends({
        ampm,
        ampmInClock: themeProps.ampmInClock
      }, (_a = themeProps.slotProps) == null ? void 0 : _a.toolbar)
    })
  });
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useMobilePicker/useMobilePicker.js
var React119 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/internals/components/PickersModalDialog.js
var React104 = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/DialogContent/DialogContent.js
var React101 = __toESM(require_react(), 1);
var import_prop_types54 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/DialogContent/dialogContentClasses.js
function getDialogContentUtilityClass(slot) {
  return generateUtilityClass("MuiDialogContent", slot);
}
var dialogContentClasses = generateUtilityClasses("MuiDialogContent", ["root", "dividers"]);

// node_modules/@mui/material/esm/DialogTitle/dialogTitleClasses.js
var dialogTitleClasses = generateUtilityClasses("MuiDialogTitle", ["root"]);
var dialogTitleClasses_default = dialogTitleClasses;

// node_modules/@mui/material/esm/DialogContent/DialogContent.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses36 = (ownerState) => {
  const {
    classes,
    dividers
  } = ownerState;
  const slots = {
    root: ["root", dividers && "dividers"]
  };
  return composeClasses(slots, getDialogContentUtilityClass, classes);
};
var DialogContentRoot = styled_default("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.dividers && styles4.dividers];
  }
})(memoTheme_default(({
  theme
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.dividers,
    style: {
      [`.${dialogTitleClasses_default.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
})));
var DialogContent = React101.forwardRef(function DialogContent2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiDialogContent"
  });
  const {
    className,
    dividers = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    dividers
  };
  const classes = useUtilityClasses36(ownerState);
  return (0, import_jsx_runtime54.jsx)(DialogContentRoot, {
    className: clsx_default(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
true ? DialogContent.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types54.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types54.default.object,
  /**
   * @ignore
   */
  className: import_prop_types54.default.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: import_prop_types54.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types54.default.oneOfType([import_prop_types54.default.arrayOf(import_prop_types54.default.oneOfType([import_prop_types54.default.func, import_prop_types54.default.object, import_prop_types54.default.bool])), import_prop_types54.default.func, import_prop_types54.default.object])
} : void 0;
var DialogContent_default = DialogContent;

// node_modules/@mui/material/esm/Dialog/Dialog.js
var React103 = __toESM(require_react(), 1);
var import_prop_types55 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Dialog/dialogClasses.js
function getDialogUtilityClass(slot) {
  return generateUtilityClass("MuiDialog", slot);
}
var dialogClasses = generateUtilityClasses("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
var dialogClasses_default = dialogClasses;

// node_modules/@mui/material/esm/Dialog/DialogContext.js
var React102 = __toESM(require_react(), 1);
var DialogContext = React102.createContext({});
if (true) {
  DialogContext.displayName = "DialogContext";
}
var DialogContext_default = DialogContext;

// node_modules/@mui/material/esm/Dialog/Dialog.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var DialogBackdrop = styled_default(Backdrop_default, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (props, styles4) => styles4.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
});
var useUtilityClasses37 = (ownerState) => {
  const {
    classes,
    scroll,
    maxWidth,
    fullWidth,
    fullScreen
  } = ownerState;
  const slots = {
    root: ["root"],
    container: ["container", `scroll${capitalize_default(scroll)}`],
    paper: ["paper", `paperScroll${capitalize_default(scroll)}`, `paperWidth${capitalize_default(String(maxWidth))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen"]
  };
  return composeClasses(slots, getDialogUtilityClass, classes);
};
var DialogRoot = styled_default(Modal_default, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
});
var DialogContainer = styled_default("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.container, styles4[`scroll${capitalize_default(ownerState.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
});
var DialogPaper = styled_default(Paper_default, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.paper, styles4[`scrollPaper${capitalize_default(ownerState.scroll)}`], styles4[`paperWidth${capitalize_default(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles4.paperFullWidth, ownerState.fullScreen && styles4.paperFullScreen];
  }
})(memoTheme_default(({
  theme
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
      [`&.${dialogClasses_default.paperScrollBody}`]: {
        [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(theme.breakpoints.values).filter((maxWidth) => maxWidth !== "xs").map((maxWidth) => ({
    props: {
      maxWidth
    },
    style: {
      maxWidth: `${theme.breakpoints.values[maxWidth]}${theme.breakpoints.unit}`,
      [`&.${dialogClasses_default.paperScrollBody}`]: {
        [theme.breakpoints.down(theme.breakpoints.values[maxWidth] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${dialogClasses_default.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
})));
var Dialog = React103.forwardRef(function Dialog2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiDialog"
  });
  const theme = useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledbyProp,
    "aria-modal": ariaModal = true,
    BackdropComponent,
    BackdropProps,
    children: children2,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = false,
    maxWidth = "sm",
    onClick,
    onClose,
    open,
    PaperComponent = Paper_default,
    PaperProps = {},
    scroll = "paper",
    slots = {},
    slotProps = {},
    TransitionComponent = Fade_default,
    transitionDuration = defaultTransitionDuration,
    TransitionProps,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll
  };
  const classes = useUtilityClasses37(ownerState);
  const backdropClick = React103.useRef();
  const handleMouseDown = (event) => {
    backdropClick.current = event.target === event.currentTarget;
  };
  const handleBackdropClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (!backdropClick.current) {
      return;
    }
    backdropClick.current = null;
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const ariaLabelledby = useId(ariaLabelledbyProp);
  const dialogContextValue = React103.useMemo(() => {
    return {
      titleId: ariaLabelledby
    };
  }, [ariaLabelledby]);
  const backwardCompatibleSlots = {
    transition: TransitionComponent,
    ...slots
  };
  const backwardCompatibleSlotProps = {
    transition: TransitionProps,
    paper: PaperProps,
    backdrop: BackdropProps,
    ...slotProps
  };
  const externalForwardedProps = {
    slots: backwardCompatibleSlots,
    slotProps: backwardCompatibleSlotProps
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    elementType: DialogRoot,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState,
    className: clsx_default(classes.root, className),
    ref
  });
  const [BackdropSlot, backdropSlotProps] = useSlot("backdrop", {
    elementType: DialogBackdrop,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState
  });
  const [PaperSlot, paperSlotProps] = useSlot("paper", {
    elementType: DialogPaper,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState,
    className: clsx_default(classes.paper, PaperProps.className)
  });
  const [ContainerSlot, containerSlotProps] = useSlot("container", {
    elementType: DialogContainer,
    externalForwardedProps,
    ownerState,
    className: classes.container
  });
  const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
    elementType: Fade_default,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      appear: true,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }
  });
  return (0, import_jsx_runtime55.jsx)(RootSlot, {
    closeAfterTransition: true,
    slots: {
      backdrop: BackdropSlot
    },
    slotProps: {
      backdrop: {
        transitionDuration,
        as: BackdropComponent,
        ...backdropSlotProps
      }
    },
    disableEscapeKeyDown,
    onClose,
    open,
    onClick: handleBackdropClick,
    ...rootSlotProps,
    ...other,
    children: (0, import_jsx_runtime55.jsx)(TransitionSlot, {
      ...transitionSlotProps,
      children: (0, import_jsx_runtime55.jsx)(ContainerSlot, {
        onMouseDown: handleMouseDown,
        ...containerSlotProps,
        children: (0, import_jsx_runtime55.jsx)(PaperSlot, {
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby,
          "aria-modal": ariaModal,
          ...paperSlotProps,
          children: (0, import_jsx_runtime55.jsx)(DialogContext_default.Provider, {
            value: dialogContextValue,
            children: children2
          })
        })
      })
    })
  });
});
true ? Dialog.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": import_prop_types55.default.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": import_prop_types55.default.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": import_prop_types55.default.oneOfType([import_prop_types55.default.oneOf(["false", "true"]), import_prop_types55.default.bool]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: import_prop_types55.default.elementType,
  /**
   * @ignore
   */
  BackdropProps: import_prop_types55.default.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: import_prop_types55.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types55.default.object,
  /**
   * @ignore
   */
  className: import_prop_types55.default.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types55.default.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: import_prop_types55.default.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: import_prop_types55.default.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: import_prop_types55.default.oneOfType([import_prop_types55.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types55.default.string]),
  /**
   * @ignore
   */
  onClick: import_prop_types55.default.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types55.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types55.default.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: import_prop_types55.default.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: import_prop_types55.default.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: import_prop_types55.default.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types55.default.shape({
    backdrop: import_prop_types55.default.oneOfType([import_prop_types55.default.func, import_prop_types55.default.object]),
    container: import_prop_types55.default.oneOfType([import_prop_types55.default.func, import_prop_types55.default.object]),
    paper: import_prop_types55.default.oneOfType([import_prop_types55.default.func, import_prop_types55.default.object]),
    root: import_prop_types55.default.oneOfType([import_prop_types55.default.func, import_prop_types55.default.object]),
    transition: import_prop_types55.default.oneOfType([import_prop_types55.default.func, import_prop_types55.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types55.default.shape({
    backdrop: import_prop_types55.default.elementType,
    container: import_prop_types55.default.elementType,
    paper: import_prop_types55.default.elementType,
    root: import_prop_types55.default.elementType,
    transition: import_prop_types55.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types55.default.oneOfType([import_prop_types55.default.arrayOf(import_prop_types55.default.oneOfType([import_prop_types55.default.func, import_prop_types55.default.object, import_prop_types55.default.bool])), import_prop_types55.default.func, import_prop_types55.default.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: import_prop_types55.default.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: import_prop_types55.default.oneOfType([import_prop_types55.default.number, import_prop_types55.default.shape({
    appear: import_prop_types55.default.number,
    enter: import_prop_types55.default.number,
    exit: import_prop_types55.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: import_prop_types55.default.object
} : void 0;
var Dialog_default = Dialog;

// node_modules/@mui/x-date-pickers/esm/internals/constants/dimensions.js
var DIALOG_WIDTH = 320;
var VIEW_HEIGHT = 336;
var DIGITAL_CLOCK_VIEW_HEIGHT = 232;
var MULTI_SECTION_CLOCK_SECTION_WIDTH = 48;

// node_modules/@mui/x-date-pickers/esm/internals/components/PickersModalDialog.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var PickersModalDialogRoot = styled_default(Dialog_default)({
  [`& .${dialogClasses_default.container}`]: {
    outline: 0
  },
  [`& .${dialogClasses_default.paper}`]: {
    outline: 0,
    minWidth: DIALOG_WIDTH
  }
});
var PickersModalDialogContent = styled_default(DialogContent_default)({
  "&:first-of-type": {
    padding: 0
  }
});
function PickersModalDialog(props) {
  const {
    children: children2,
    slots,
    slotProps
  } = props;
  const {
    open
  } = usePickerContext();
  const {
    dismissViews,
    onPopperExited
  } = usePickerPrivateContext();
  const Dialog3 = (slots == null ? void 0 : slots.dialog) ?? PickersModalDialogRoot;
  const Transition2 = (slots == null ? void 0 : slots.mobileTransition) ?? Fade_default;
  return (0, import_jsx_runtime56.jsx)(Dialog3, _extends({
    open,
    onClose: () => {
      dismissViews();
      onPopperExited == null ? void 0 : onPopperExited();
    }
  }, slotProps == null ? void 0 : slotProps.dialog, {
    TransitionComponent: Transition2,
    TransitionProps: slotProps == null ? void 0 : slotProps.mobileTransition,
    PaperComponent: slots == null ? void 0 : slots.mobilePaper,
    PaperProps: slotProps == null ? void 0 : slotProps.mobilePaper,
    children: (0, import_jsx_runtime56.jsx)(PickersModalDialogContent, {
      children: children2
    })
  }));
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/usePicker/usePicker.js
var React108 = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/useMediaQuery/index.js
var useMediaQuery = unstable_createUseMediaQuery({
  themeId: identifier_default
});
var useMediaQuery_default = useMediaQuery;

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useReduceAnimations.js
var PREFERS_REDUCED_MOTION = "@media (prefers-reduced-motion: reduce)";
var mobileVersionMatches = typeof navigator !== "undefined" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i);
var androidVersion = mobileVersionMatches && mobileVersionMatches[1] ? parseInt(mobileVersionMatches[1], 10) : null;
var iOSVersion = mobileVersionMatches && mobileVersionMatches[2] ? parseInt(mobileVersionMatches[2], 10) : null;
var slowAnimationDevices = androidVersion && androidVersion < 10 || iOSVersion && iOSVersion < 13 || false;
function useReduceAnimations(customReduceAnimations) {
  const prefersReduced = useMediaQuery_default(PREFERS_REDUCED_MOTION, {
    defaultMatches: false
  });
  if (customReduceAnimations != null) {
    return customReduceAnimations;
  }
  return prefersReduced || slowAnimationDevices;
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useViews.js
var React105 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/internals/utils/createStepNavigation.js
var DEFAULT_STEP_NAVIGATION = {
  hasNextStep: false,
  hasSeveralSteps: false,
  goToNextStep: () => {
  },
  areViewsInSameStep: () => true
};
function createStepNavigation(parameters) {
  const {
    steps,
    isViewMatchingStep,
    onStepChange
  } = parameters;
  return (parametersBis) => {
    if (steps == null) {
      return DEFAULT_STEP_NAVIGATION;
    }
    const currentStepIndex = steps.findIndex((step) => isViewMatchingStep(parametersBis.view, step));
    const nextStep = currentStepIndex === -1 || currentStepIndex === steps.length - 1 ? null : steps[currentStepIndex + 1];
    return {
      hasNextStep: nextStep != null,
      hasSeveralSteps: steps.length > 1,
      goToNextStep: () => {
        if (nextStep == null) {
          return;
        }
        onStepChange(_extends({}, parametersBis, {
          step: nextStep
        }));
      },
      areViewsInSameStep: (viewA, viewB) => {
        const stepA = steps.find((step) => isViewMatchingStep(viewA, step));
        const stepB = steps.find((step) => isViewMatchingStep(viewB, step));
        return stepA === stepB;
      }
    };
  };
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useViews.js
var warnedOnceNotValidView = false;
function useViews({
  onChange,
  onViewChange,
  openTo,
  view: inView,
  views,
  autoFocus,
  focusedView: inFocusedView,
  onFocusedViewChange,
  getStepNavigation
}) {
  if (true) {
    if (!warnedOnceNotValidView) {
      if (inView != null && !views.includes(inView)) {
        console.warn(`MUI X: \`view="${inView}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join('", "')}"]\`.`);
        warnedOnceNotValidView = true;
      }
      if (inView == null && openTo != null && !views.includes(openTo)) {
        console.warn(`MUI X: \`openTo="${openTo}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join('", "')}"]\`.`);
        warnedOnceNotValidView = true;
      }
    }
  }
  const previousOpenTo = React105.useRef(openTo);
  const previousViews = React105.useRef(views);
  const defaultView = React105.useRef(views.includes(openTo) ? openTo : views[0]);
  const [view, setView] = useControlled({
    name: "useViews",
    state: "view",
    controlled: inView,
    default: defaultView.current
  });
  const defaultFocusedView = React105.useRef(autoFocus ? view : null);
  const [focusedView, setFocusedView] = useControlled({
    name: "useViews",
    state: "focusedView",
    controlled: inFocusedView,
    default: defaultFocusedView.current
  });
  const stepNavigation = getStepNavigation ? getStepNavigation({
    setView,
    view,
    defaultView: defaultView.current,
    views
  }) : DEFAULT_STEP_NAVIGATION;
  React105.useEffect(() => {
    if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some((previousView2) => !views.includes(previousView2))) {
      setView(views.includes(openTo) ? openTo : views[0]);
      previousViews.current = views;
      previousOpenTo.current = openTo;
    }
  }, [openTo, setView, view, views]);
  const viewIndex = views.indexOf(view);
  const previousView = views[viewIndex - 1] ?? null;
  const nextView = views[viewIndex + 1] ?? null;
  const handleFocusedViewChange = useEventCallback_default((viewToFocus, hasFocus) => {
    if (hasFocus) {
      setFocusedView(viewToFocus);
    } else {
      setFocusedView(
        (prevFocusedView) => viewToFocus === prevFocusedView ? null : prevFocusedView
        // If false the blur is due to view switching
      );
    }
    onFocusedViewChange == null ? void 0 : onFocusedViewChange(viewToFocus, hasFocus);
  });
  const handleChangeView = useEventCallback_default((newView) => {
    handleFocusedViewChange(newView, true);
    if (newView === view) {
      return;
    }
    setView(newView);
    if (onViewChange) {
      onViewChange(newView);
    }
  });
  const goToNextView = useEventCallback_default(() => {
    if (nextView) {
      handleChangeView(nextView);
    }
  });
  const setValueAndGoToNextView = useEventCallback_default((value, currentViewSelectionState, selectedView) => {
    const isSelectionFinishedOnCurrentView = currentViewSelectionState === "finish";
    const hasMoreViews = selectedView ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but when it's not the final view given all `views` -> overall selection state should be `partial`.
      views.indexOf(selectedView) < views.length - 1
    ) : Boolean(nextView);
    const globalSelectionState = isSelectionFinishedOnCurrentView && hasMoreViews ? "partial" : currentViewSelectionState;
    onChange(value, globalSelectionState, selectedView);
    let currentView = null;
    if (selectedView != null && selectedView !== view) {
      currentView = selectedView;
    } else if (isSelectionFinishedOnCurrentView) {
      currentView = view;
    }
    if (currentView == null) {
      return;
    }
    const viewToNavigateTo = views[views.indexOf(currentView) + 1];
    if (viewToNavigateTo == null || !stepNavigation.areViewsInSameStep(currentView, viewToNavigateTo)) {
      return;
    }
    handleChangeView(viewToNavigateTo);
  });
  return _extends({}, stepNavigation, {
    view,
    setView: handleChangeView,
    focusedView,
    setFocusedView: handleFocusedViewChange,
    nextView,
    previousView,
    // Always return up-to-date default view instead of the initial one (i.e. defaultView.current)
    defaultView: views.includes(openTo) ? openTo : views[0],
    goToNextView,
    setValueAndGoToNextView
  });
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/usePicker/hooks/useOrientation.js
var React106 = __toESM(require_react(), 1);
function getOrientation() {
  if (typeof window === "undefined") {
    return "portrait";
  }
  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait";
  }
  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
  }
  return "portrait";
}
function useOrientation(views, customOrientation) {
  const [orientation, setOrientation] = React106.useState(getOrientation);
  useEnhancedEffect_default(() => {
    const eventHandler = () => {
      setOrientation(getOrientation());
    };
    window.addEventListener("orientationchange", eventHandler);
    return () => {
      window.removeEventListener("orientationchange", eventHandler);
    };
  }, []);
  if (arrayIncludes(views, ["hours", "minutes", "seconds"])) {
    return "portrait";
  }
  return customOrientation ?? orientation;
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/usePicker/hooks/useValueAndOpenStates.js
var React107 = __toESM(require_react(), 1);
function useValueAndOpenStates(parameters) {
  const {
    props,
    valueManager,
    validator: validator2
  } = parameters;
  const {
    value: valueProp,
    defaultValue: defaultValueProp,
    onChange,
    referenceDate,
    timezone: timezoneProp,
    onAccept,
    closeOnSelect,
    open: openProp,
    onOpen,
    onClose
  } = props;
  const {
    current: defaultValue
  } = React107.useRef(defaultValueProp);
  const {
    current: isValueControlled
  } = React107.useRef(valueProp !== void 0);
  const {
    current: isOpenControlled
  } = React107.useRef(openProp !== void 0);
  const utils = useUtils();
  if (true) {
    if (props.renderInput != null) {
      warnOnce(["MUI X: The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]);
    }
  }
  if (true) {
    React107.useEffect(() => {
      if (isValueControlled !== (valueProp !== void 0)) {
        console.error([`MUI X: A component is changing the ${isValueControlled ? "" : "un"}controlled value of a Picker to be ${isValueControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled valuefor the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [valueProp]);
    React107.useEffect(() => {
      if (!isValueControlled && defaultValue !== defaultValueProp) {
        console.error([`MUI X: A component is changing the defaultValue of an uncontrolled Picker after being initialized. To suppress this warning opt to use a controlled value.`].join("\n"));
      }
    }, [JSON.stringify(defaultValue)]);
  }
  const {
    timezone,
    value,
    handleValueChange
  } = useControlledValue({
    name: "a picker component",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate,
    onChange,
    valueManager
  });
  const [state, setState] = React107.useState(() => ({
    open: false,
    lastExternalValue: value,
    clockShallowValue: void 0,
    lastCommittedValue: value,
    hasBeenModifiedSinceMount: false
  }));
  const {
    getValidationErrorForNewValue
  } = useValidation({
    props,
    validator: validator2,
    timezone,
    value,
    onError: props.onError
  });
  const setOpen = useEventCallback_default((action) => {
    const newOpen = typeof action === "function" ? action(state.open) : action;
    if (!isOpenControlled) {
      setState((prevState) => _extends({}, prevState, {
        open: newOpen
      }));
    }
    if (newOpen && onOpen) {
      onOpen();
    }
    if (!newOpen) {
      onClose == null ? void 0 : onClose();
    }
  });
  const setValue = useEventCallback_default((newValue, options) => {
    const {
      changeImportance = "accept",
      skipPublicationIfPristine = false,
      validationError,
      shortcut,
      shouldClose = changeImportance === "accept"
    } = options ?? {};
    let shouldFireOnChange;
    let shouldFireOnAccept;
    if (!skipPublicationIfPristine && !isValueControlled && !state.hasBeenModifiedSinceMount) {
      shouldFireOnChange = true;
      shouldFireOnAccept = changeImportance === "accept";
    } else {
      shouldFireOnChange = !valueManager.areValuesEqual(utils, newValue, value);
      shouldFireOnAccept = changeImportance === "accept" && !valueManager.areValuesEqual(utils, newValue, state.lastCommittedValue);
    }
    setState((prevState) => _extends({}, prevState, {
      // We reset the shallow value whenever we fire onChange.
      clockShallowValue: shouldFireOnChange ? void 0 : prevState.clockShallowValue,
      lastCommittedValue: shouldFireOnAccept ? value : prevState.lastCommittedValue,
      hasBeenModifiedSinceMount: true
    }));
    let cachedContext = null;
    const getContext = () => {
      if (!cachedContext) {
        cachedContext = {
          validationError: validationError == null ? getValidationErrorForNewValue(newValue) : validationError
        };
        if (shortcut) {
          cachedContext.shortcut = shortcut;
        }
      }
      return cachedContext;
    };
    if (shouldFireOnChange) {
      handleValueChange(newValue, getContext());
    }
    if (shouldFireOnAccept && onAccept) {
      onAccept(newValue, getContext());
    }
    if (shouldClose) {
      setOpen(false);
    }
  });
  if (value !== state.lastExternalValue) {
    setState((prevState) => _extends({}, prevState, {
      lastExternalValue: value,
      clockShallowValue: void 0,
      hasBeenModifiedSinceMount: true
    }));
  }
  const setValueFromView = useEventCallback_default((newValue, selectionState = "partial") => {
    if (selectionState === "shallow") {
      setState((prev) => _extends({}, prev, {
        clockShallowValue: newValue,
        hasBeenModifiedSinceMount: true
      }));
      return;
    }
    setValue(newValue, {
      changeImportance: selectionState === "finish" && closeOnSelect ? "accept" : "set"
    });
  });
  React107.useEffect(() => {
    if (isOpenControlled) {
      if (openProp === void 0) {
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      }
      setState((prevState) => _extends({}, prevState, {
        open: openProp
      }));
    }
  }, [isOpenControlled, openProp]);
  const viewValue = React107.useMemo(() => valueManager.cleanValue(utils, state.clockShallowValue === void 0 ? value : state.clockShallowValue), [utils, valueManager, state.clockShallowValue, value]);
  return {
    timezone,
    state,
    setValue,
    setValueFromView,
    setOpen,
    value,
    viewValue
  };
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/usePicker/usePicker.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var _excluded15 = ["className", "sx"];
var usePicker = ({
  ref,
  props,
  valueManager,
  valueType,
  variant,
  validator: validator2,
  onPopperExited,
  autoFocusView,
  rendererInterceptor: RendererInterceptor,
  localeText,
  viewContainerRole,
  getStepNavigation
}) => {
  const {
    // View props
    views,
    view: viewProp,
    openTo,
    onViewChange,
    viewRenderers,
    reduceAnimations: reduceAnimationsProp,
    orientation: orientationProp,
    disableOpenPicker,
    closeOnSelect,
    // Form props
    disabled,
    readOnly,
    // Field props
    formatDensity,
    enableAccessibleFieldDOMStructure,
    selectedSections,
    onSelectedSectionsChange,
    format,
    label,
    // Other props
    autoFocus,
    name
  } = props;
  const {
    className,
    sx
  } = props, propsToForwardToView = _objectWithoutPropertiesLoose(props, _excluded15);
  const labelId = useId();
  const utils = useUtils();
  const adapter = useLocalizationContext();
  const reduceAnimations = useReduceAnimations(reduceAnimationsProp);
  const orientation = useOrientation(views, orientationProp);
  const {
    current: initialView
  } = React108.useRef(openTo ?? null);
  const [triggerElement, triggerRef] = React108.useState(null);
  const popupRef = React108.useRef(null);
  const fieldRef = React108.useRef(null);
  const rootRefObject = React108.useRef(null);
  const rootRef = useForkRef(ref, rootRefObject);
  const {
    timezone,
    state,
    setOpen,
    setValue,
    setValueFromView,
    value,
    viewValue
  } = useValueAndOpenStates({
    props,
    valueManager,
    validator: validator2
  });
  const {
    view,
    setView,
    defaultView,
    focusedView,
    setFocusedView,
    setValueAndGoToNextView,
    goToNextStep,
    hasNextStep,
    hasSeveralSteps
  } = useViews({
    view: viewProp,
    views,
    openTo,
    onChange: setValueFromView,
    onViewChange,
    autoFocus: autoFocusView,
    getStepNavigation
  });
  const clearValue = useEventCallback_default(() => setValue(valueManager.emptyValue));
  const setValueToToday = useEventCallback_default(() => setValue(valueManager.getTodayValue(utils, timezone, valueType)));
  const acceptValueChanges = useEventCallback_default(() => setValue(value));
  const cancelValueChanges = useEventCallback_default(() => setValue(state.lastCommittedValue, {
    skipPublicationIfPristine: true
  }));
  const dismissViews = useEventCallback_default(() => {
    setValue(value, {
      skipPublicationIfPristine: true
    });
  });
  const {
    hasUIView,
    viewModeLookup,
    timeViewsCount
  } = React108.useMemo(() => views.reduce((acc, viewForReduce) => {
    const viewMode = viewRenderers[viewForReduce] == null ? "field" : "UI";
    acc.viewModeLookup[viewForReduce] = viewMode;
    if (viewMode === "UI") {
      acc.hasUIView = true;
      if (isTimeView(viewForReduce)) {
        acc.timeViewsCount += 1;
      }
    }
    return acc;
  }, {
    hasUIView: false,
    viewModeLookup: {},
    timeViewsCount: 0
  }), [viewRenderers, views]);
  const currentViewMode = viewModeLookup[view];
  const getCurrentViewMode = useEventCallback_default(() => currentViewMode);
  const [popperView, setPopperView] = React108.useState(currentViewMode === "UI" ? view : null);
  if (popperView !== view && viewModeLookup[view] === "UI") {
    setPopperView(view);
  }
  useEnhancedEffect_default(() => {
    if (currentViewMode === "field" && state.open) {
      setOpen(false);
      setTimeout(() => {
        var _a, _b;
        (_a = fieldRef == null ? void 0 : fieldRef.current) == null ? void 0 : _a.setSelectedSections(view);
        (_b = fieldRef == null ? void 0 : fieldRef.current) == null ? void 0 : _b.focusField(view);
      });
    }
  }, [view]);
  useEnhancedEffect_default(() => {
    if (!state.open) {
      return;
    }
    let newView = view;
    if (currentViewMode === "field" && popperView != null) {
      newView = popperView;
    }
    if (newView !== defaultView && viewModeLookup[newView] === "UI" && viewModeLookup[defaultView] === "UI") {
      newView = defaultView;
    }
    if (newView !== view) {
      setView(newView);
    }
    setFocusedView(newView, true);
  }, [state.open]);
  const ownerState = React108.useMemo(() => ({
    isPickerValueEmpty: valueManager.areValuesEqual(utils, value, valueManager.emptyValue),
    isPickerOpen: state.open,
    isPickerDisabled: props.disabled ?? false,
    isPickerReadOnly: props.readOnly ?? false,
    pickerOrientation: orientation,
    pickerVariant: variant
  }), [utils, valueManager, value, state.open, orientation, variant, props.disabled, props.readOnly]);
  const triggerStatus = React108.useMemo(() => {
    if (disableOpenPicker || !hasUIView) {
      return "hidden";
    }
    if (disabled || readOnly) {
      return "disabled";
    }
    return "enabled";
  }, [disableOpenPicker, hasUIView, disabled, readOnly]);
  const wrappedGoToNextStep = useEventCallback_default(goToNextStep);
  const defaultActionBarActions = React108.useMemo(() => {
    if (closeOnSelect && !hasSeveralSteps) {
      return [];
    }
    return ["cancel", "nextOrAccept"];
  }, [closeOnSelect, hasSeveralSteps]);
  const actionsContextValue = React108.useMemo(() => ({
    setValue,
    setOpen,
    clearValue,
    setValueToToday,
    acceptValueChanges,
    cancelValueChanges,
    setView,
    goToNextStep: wrappedGoToNextStep
  }), [setValue, setOpen, clearValue, setValueToToday, acceptValueChanges, cancelValueChanges, setView, wrappedGoToNextStep]);
  const contextValue = React108.useMemo(() => _extends({}, actionsContextValue, {
    value,
    timezone,
    open: state.open,
    views,
    view: popperView,
    initialView,
    disabled: disabled ?? false,
    readOnly: readOnly ?? false,
    autoFocus: autoFocus ?? false,
    variant,
    orientation,
    popupRef,
    reduceAnimations,
    triggerRef,
    triggerStatus,
    hasNextStep,
    fieldFormat: format ?? "",
    name,
    label,
    rootSx: sx,
    rootRef,
    rootClassName: className
  }), [actionsContextValue, value, rootRef, variant, orientation, reduceAnimations, disabled, readOnly, format, className, name, label, sx, triggerStatus, hasNextStep, timezone, state.open, popperView, views, initialView, autoFocus]);
  const privateContextValue = React108.useMemo(() => ({
    dismissViews,
    ownerState,
    hasUIView,
    getCurrentViewMode,
    rootRefObject,
    labelId,
    triggerElement,
    viewContainerRole,
    defaultActionBarActions,
    onPopperExited
  }), [dismissViews, ownerState, hasUIView, getCurrentViewMode, labelId, triggerElement, viewContainerRole, defaultActionBarActions, onPopperExited]);
  const fieldPrivateContextValue = React108.useMemo(() => ({
    formatDensity,
    enableAccessibleFieldDOMStructure,
    selectedSections,
    onSelectedSectionsChange,
    fieldRef
  }), [formatDensity, enableAccessibleFieldDOMStructure, selectedSections, onSelectedSectionsChange, fieldRef]);
  const isValidContextValue = (testedValue) => {
    const error = validator2({
      adapter,
      value: testedValue,
      timezone,
      props
    });
    return !valueManager.hasError(error);
  };
  const renderCurrentView = () => {
    if (popperView == null) {
      return null;
    }
    const renderer = viewRenderers[popperView];
    if (renderer == null) {
      return null;
    }
    const rendererProps = _extends({}, propsToForwardToView, {
      views,
      timezone,
      value: viewValue,
      onChange: setValueAndGoToNextView,
      view: popperView,
      onViewChange: setView,
      showViewSwitcher: timeViewsCount > 1,
      timeViewsCount
    }, viewContainerRole === "tooltip" ? {
      focusedView: null,
      onFocusedViewChange: () => {
      }
    } : {
      focusedView,
      onFocusedViewChange: setFocusedView
    });
    if (RendererInterceptor) {
      return (0, import_jsx_runtime57.jsx)(RendererInterceptor, {
        viewRenderers,
        popperView,
        rendererProps
      });
    }
    return renderer(rendererProps);
  };
  return {
    providerProps: {
      localeText,
      contextValue,
      privateContextValue,
      actionsContextValue,
      fieldPrivateContextValue,
      isValidContextValue
    },
    renderCurrentView,
    ownerState
  };
};

// node_modules/@mui/x-date-pickers/esm/PickersLayout/PickersLayout.js
var React118 = __toESM(require_react(), 1);
var import_prop_types63 = __toESM(require_prop_types(), 1);

// node_modules/@mui/x-date-pickers/esm/PickersLayout/pickersLayoutClasses.js
function getPickersLayoutUtilityClass(slot) {
  return generateUtilityClass("MuiPickersLayout", slot);
}
var pickersLayoutClasses = generateUtilityClasses("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "tabs", "shortcuts"]);

// node_modules/@mui/x-date-pickers/esm/PickersLayout/usePickerLayout.js
var React117 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/PickersActionBar/PickersActionBar.js
var React110 = __toESM(require_react(), 1);
var import_prop_types57 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/DialogActions/DialogActions.js
var React109 = __toESM(require_react(), 1);
var import_prop_types56 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/DialogActions/dialogActionsClasses.js
function getDialogActionsUtilityClass(slot) {
  return generateUtilityClass("MuiDialogActions", slot);
}
var dialogActionsClasses = generateUtilityClasses("MuiDialogActions", ["root", "spacing"]);

// node_modules/@mui/material/esm/DialogActions/DialogActions.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses38 = (ownerState) => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ["root", !disableSpacing && "spacing"]
  };
  return composeClasses(slots, getDialogActionsUtilityClass, classes);
};
var DialogActionsRoot = styled_default("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, !ownerState.disableSpacing && styles4.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
});
var DialogActions = React109.forwardRef(function DialogActions2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiDialogActions"
  });
  const {
    className,
    disableSpacing = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableSpacing
  };
  const classes = useUtilityClasses38(ownerState);
  return (0, import_jsx_runtime58.jsx)(DialogActionsRoot, {
    className: clsx_default(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
true ? DialogActions.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types56.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types56.default.object,
  /**
   * @ignore
   */
  className: import_prop_types56.default.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: import_prop_types56.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types56.default.oneOfType([import_prop_types56.default.arrayOf(import_prop_types56.default.oneOfType([import_prop_types56.default.func, import_prop_types56.default.object, import_prop_types56.default.bool])), import_prop_types56.default.func, import_prop_types56.default.object])
} : void 0;
var DialogActions_default = DialogActions;

// node_modules/@mui/x-date-pickers/esm/PickersActionBar/PickersActionBar.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var _excluded16 = ["actions"];
var PickersActionBarRoot = styled_default(DialogActions_default, {
  name: "MuiPickersLayout",
  slot: "ActionBar"
})({});
function PickersActionBarComponent(props) {
  const {
    actions
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
  const translations = usePickerTranslations();
  const {
    clearValue,
    setValueToToday,
    acceptValueChanges,
    cancelValueChanges,
    goToNextStep,
    hasNextStep
  } = usePickerContext();
  if (actions == null || actions.length === 0) {
    return null;
  }
  const buttons = actions == null ? void 0 : actions.map((actionType) => {
    switch (actionType) {
      case "clear":
        return (0, import_jsx_runtime59.jsx)(Button_default, {
          onClick: clearValue,
          children: translations.clearButtonLabel
        }, actionType);
      case "cancel":
        return (0, import_jsx_runtime59.jsx)(Button_default, {
          onClick: cancelValueChanges,
          children: translations.cancelButtonLabel
        }, actionType);
      case "accept":
        return (0, import_jsx_runtime59.jsx)(Button_default, {
          onClick: acceptValueChanges,
          children: translations.okButtonLabel
        }, actionType);
      case "today":
        return (0, import_jsx_runtime59.jsx)(Button_default, {
          onClick: setValueToToday,
          children: translations.todayButtonLabel
        }, actionType);
      case "next":
        return (0, import_jsx_runtime59.jsx)(Button_default, {
          onClick: goToNextStep,
          children: translations.nextStepButtonLabel
        }, actionType);
      case "nextOrAccept":
        if (hasNextStep) {
          return (0, import_jsx_runtime59.jsx)(Button_default, {
            onClick: goToNextStep,
            children: translations.nextStepButtonLabel
          }, actionType);
        }
        return (0, import_jsx_runtime59.jsx)(Button_default, {
          onClick: acceptValueChanges,
          children: translations.okButtonLabel
        }, actionType);
      default:
        return null;
    }
  });
  return (0, import_jsx_runtime59.jsx)(PickersActionBarRoot, _extends({}, other, {
    children: buttons
  }));
}
true ? PickersActionBarComponent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default
   * - `[]` for Desktop Date Picker and Desktop Date Range Picker
   * - `['cancel', 'accept']` for all other Pickers
   */
  actions: import_prop_types57.default.arrayOf(import_prop_types57.default.oneOf(["accept", "cancel", "clear", "next", "nextOrAccept", "today"]).isRequired),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: import_prop_types57.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types57.default.oneOfType([import_prop_types57.default.arrayOf(import_prop_types57.default.oneOfType([import_prop_types57.default.func, import_prop_types57.default.object, import_prop_types57.default.bool])), import_prop_types57.default.func, import_prop_types57.default.object])
} : void 0;
var PickersActionBar = React110.memo(PickersActionBarComponent);
if (true) PickersActionBar.displayName = "PickersActionBar";

// node_modules/@mui/x-date-pickers/esm/PickersShortcuts/PickersShortcuts.js
var React116 = __toESM(require_react(), 1);
var import_prop_types62 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/ListItem/ListItem.js
var React113 = __toESM(require_react(), 1);
var import_prop_types60 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/ListItem/listItemClasses.js
function getListItemUtilityClass(slot) {
  return generateUtilityClass("MuiListItem", slot);
}
var listItemClasses = generateUtilityClasses("MuiListItem", ["root", "container", "dense", "alignItemsFlexStart", "divider", "gutters", "padding", "secondaryAction"]);

// node_modules/@mui/material/esm/ListItemButton/ListItemButton.js
var React111 = __toESM(require_react(), 1);
var import_prop_types58 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/ListItemButton/listItemButtonClasses.js
function getListItemButtonUtilityClass(slot) {
  return generateUtilityClass("MuiListItemButton", slot);
}
var listItemButtonClasses = generateUtilityClasses("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]);
var listItemButtonClasses_default = listItemButtonClasses;

// node_modules/@mui/material/esm/ListItemButton/ListItemButton.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var overridesResolver2 = (props, styles4) => {
  const {
    ownerState
  } = props;
  return [styles4.root, ownerState.dense && styles4.dense, ownerState.alignItems === "flex-start" && styles4.alignItemsFlexStart, ownerState.divider && styles4.divider, !ownerState.disableGutters && styles4.gutters];
};
var useUtilityClasses39 = (ownerState) => {
  const {
    alignItems,
    classes,
    dense,
    disabled,
    disableGutters,
    divider,
    selected
  } = ownerState;
  const slots = {
    root: ["root", dense && "dense", !disableGutters && "gutters", divider && "divider", disabled && "disabled", alignItems === "flex-start" && "alignItemsFlexStart", selected && "selected"]
  };
  const composedClasses = composeClasses(slots, getListItemButtonUtilityClass, classes);
  return {
    ...classes,
    ...composedClasses
  };
};
var ListItemButtonRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: overridesResolver2
})(memoTheme_default(({
  theme
}) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minWidth: 0,
  boxSizing: "border-box",
  textAlign: "left",
  paddingTop: 8,
  paddingBottom: 8,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${listItemButtonClasses_default.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${listItemButtonClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${listItemButtonClasses_default.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${listItemButtonClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${listItemButtonClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.divider,
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: {
      alignItems: "flex-start"
    },
    style: {
      alignItems: "flex-start"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.dense,
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }]
})));
var ListItemButton = React111.forwardRef(function ListItemButton2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiListItemButton"
  });
  const {
    alignItems = "center",
    autoFocus = false,
    component = "div",
    children: children2,
    dense = false,
    disableGutters = false,
    divider = false,
    focusVisibleClassName,
    selected = false,
    className,
    ...other
  } = props;
  const context = React111.useContext(ListContext_default);
  const childContext = React111.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = React111.useRef(null);
  useEnhancedEffect_default2(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (true) {
        console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered.");
      }
    }
  }, [autoFocus]);
  const ownerState = {
    ...props,
    alignItems,
    dense: childContext.dense,
    disableGutters,
    divider,
    selected
  };
  const classes = useUtilityClasses39(ownerState);
  const handleRef = useForkRef_default(listItemRef, ref);
  return (0, import_jsx_runtime60.jsx)(ListContext_default.Provider, {
    value: childContext,
    children: (0, import_jsx_runtime60.jsx)(ListItemButtonRoot, {
      ref: handleRef,
      href: other.href || other.to,
      component: (other.href || other.to) && component === "div" ? "button" : component,
      focusVisibleClassName: clsx_default(classes.focusVisible, focusVisibleClassName),
      ownerState,
      className: clsx_default(classes.root, className),
      ...other,
      classes,
      children: children2
    })
  });
});
true ? ListItemButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: import_prop_types58.default.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: import_prop_types58.default.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: import_prop_types58.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types58.default.object,
  /**
   * @ignore
   */
  className: import_prop_types58.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types58.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: import_prop_types58.default.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types58.default.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: import_prop_types58.default.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: import_prop_types58.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types58.default.string,
  /**
   * @ignore
   */
  href: import_prop_types58.default.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: import_prop_types58.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types58.default.oneOfType([import_prop_types58.default.arrayOf(import_prop_types58.default.oneOfType([import_prop_types58.default.func, import_prop_types58.default.object, import_prop_types58.default.bool])), import_prop_types58.default.func, import_prop_types58.default.object])
} : void 0;

// node_modules/@mui/material/esm/ListItemSecondaryAction/ListItemSecondaryAction.js
var React112 = __toESM(require_react(), 1);
var import_prop_types59 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/ListItemSecondaryAction/listItemSecondaryActionClasses.js
function getListItemSecondaryActionClassesUtilityClass(slot) {
  return generateUtilityClass("MuiListItemSecondaryAction", slot);
}
var listItemSecondaryActionClasses = generateUtilityClasses("MuiListItemSecondaryAction", ["root", "disableGutters"]);

// node_modules/@mui/material/esm/ListItemSecondaryAction/ListItemSecondaryAction.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses40 = (ownerState) => {
  const {
    disableGutters,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disableGutters && "disableGutters"]
  };
  return composeClasses(slots, getListItemSecondaryActionClassesUtilityClass, classes);
};
var ListItemSecondaryActionRoot = styled_default("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.disableGutters && styles4.disableGutters];
  }
})({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.disableGutters,
    style: {
      right: 0
    }
  }]
});
var ListItemSecondaryAction = React112.forwardRef(function ListItemSecondaryAction2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiListItemSecondaryAction"
  });
  const {
    className,
    ...other
  } = props;
  const context = React112.useContext(ListContext_default);
  const ownerState = {
    ...props,
    disableGutters: context.disableGutters
  };
  const classes = useUtilityClasses40(ownerState);
  return (0, import_jsx_runtime61.jsx)(ListItemSecondaryActionRoot, {
    className: clsx_default(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
true ? ListItemSecondaryAction.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: import_prop_types59.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types59.default.object,
  /**
   * @ignore
   */
  className: import_prop_types59.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types59.default.oneOfType([import_prop_types59.default.arrayOf(import_prop_types59.default.oneOfType([import_prop_types59.default.func, import_prop_types59.default.object, import_prop_types59.default.bool])), import_prop_types59.default.func, import_prop_types59.default.object])
} : void 0;
ListItemSecondaryAction.muiName = "ListItemSecondaryAction";
var ListItemSecondaryAction_default = ListItemSecondaryAction;

// node_modules/@mui/material/esm/ListItem/ListItem.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var overridesResolver3 = (props, styles4) => {
  const {
    ownerState
  } = props;
  return [styles4.root, ownerState.dense && styles4.dense, ownerState.alignItems === "flex-start" && styles4.alignItemsFlexStart, ownerState.divider && styles4.divider, !ownerState.disableGutters && styles4.gutters, !ownerState.disablePadding && styles4.padding, ownerState.hasSecondaryAction && styles4.secondaryAction];
};
var useUtilityClasses41 = (ownerState) => {
  const {
    alignItems,
    classes,
    dense,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction
  } = ownerState;
  const slots = {
    root: ["root", dense && "dense", !disableGutters && "gutters", !disablePadding && "padding", divider && "divider", alignItems === "flex-start" && "alignItemsFlexStart", hasSecondaryAction && "secondaryAction"],
    container: ["container"]
  };
  return composeClasses(slots, getListItemUtilityClass, classes);
};
var ListItemRoot = styled_default("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: overridesResolver3
})(memoTheme_default(({
  theme
}) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disablePadding && ownerState.dense,
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disablePadding && !ownerState.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disablePadding && !!ownerState.secondaryAction,
    style: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.secondaryAction,
    style: {
      [`& > .${listItemButtonClasses_default.root}`]: {
        paddingRight: 48
      }
    }
  }, {
    props: {
      alignItems: "flex-start"
    },
    style: {
      alignItems: "flex-start"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.divider,
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.button,
    style: {
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (theme.vars || theme).palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hasSecondaryAction,
    style: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    }
  }]
})));
var ListItemContainer = styled_default("li", {
  name: "MuiListItem",
  slot: "Container"
})({
  position: "relative"
});
var ListItem = React113.forwardRef(function ListItem2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiListItem"
  });
  const {
    alignItems = "center",
    children: childrenProp,
    className,
    component: componentProp,
    components = {},
    componentsProps = {},
    ContainerComponent = "li",
    ContainerProps: {
      className: ContainerClassName,
      ...ContainerProps
    } = {},
    dense = false,
    disableGutters = false,
    disablePadding = false,
    divider = false,
    secondaryAction,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const context = React113.useContext(ListContext_default);
  const childContext = React113.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = React113.useRef(null);
  const children2 = React113.Children.toArray(childrenProp);
  const hasSecondaryAction = children2.length && isMuiElement_default(children2[children2.length - 1], ["ListItemSecondaryAction"]);
  const ownerState = {
    ...props,
    alignItems,
    dense: childContext.dense,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction
  };
  const classes = useUtilityClasses41(ownerState);
  const handleRef = useForkRef_default(listItemRef, ref);
  const Root = slots.root || components.Root || ListItemRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const componentProps = {
    className: clsx_default(classes.root, rootProps.className, className),
    ...other
  };
  let Component = componentProp || "li";
  if (hasSecondaryAction) {
    Component = !componentProps.component && !componentProp ? "div" : Component;
    if (ContainerComponent === "li") {
      if (Component === "li") {
        Component = "div";
      } else if (componentProps.component === "li") {
        componentProps.component = "div";
      }
    }
    return (0, import_jsx_runtime62.jsx)(ListContext_default.Provider, {
      value: childContext,
      children: (0, import_jsx_runtime62.jsxs)(ListItemContainer, {
        as: ContainerComponent,
        className: clsx_default(classes.container, ContainerClassName),
        ref: handleRef,
        ownerState,
        ...ContainerProps,
        children: [(0, import_jsx_runtime62.jsx)(Root, {
          ...rootProps,
          ...!isHostComponent_default(Root) && {
            as: Component,
            ownerState: {
              ...ownerState,
              ...rootProps.ownerState
            }
          },
          ...componentProps,
          children: children2
        }), children2.pop()]
      })
    });
  }
  return (0, import_jsx_runtime62.jsx)(ListContext_default.Provider, {
    value: childContext,
    children: (0, import_jsx_runtime62.jsxs)(Root, {
      ...rootProps,
      as: Component,
      ref: handleRef,
      ...!isHostComponent_default(Root) && {
        ownerState: {
          ...ownerState,
          ...rootProps.ownerState
        }
      },
      ...componentProps,
      children: [children2, secondaryAction && (0, import_jsx_runtime62.jsx)(ListItemSecondaryAction_default, {
        children: secondaryAction
      })]
    })
  });
});
true ? ListItem.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: import_prop_types60.default.oneOf(["center", "flex-start"]),
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: chainPropTypes(import_prop_types60.default.node, (props) => {
    const children2 = React113.Children.toArray(props.children);
    let secondaryActionIndex = -1;
    for (let i = children2.length - 1; i >= 0; i -= 1) {
      const child = children2[i];
      if (isMuiElement_default(child, ["ListItemSecondaryAction"])) {
        secondaryActionIndex = i;
        break;
      }
    }
    if (secondaryActionIndex !== -1 && secondaryActionIndex !== children2.length - 1) {
      return new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.");
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types60.default.object,
  /**
   * @ignore
   */
  className: import_prop_types60.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types60.default.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  components: import_prop_types60.default.shape({
    Root: import_prop_types60.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  componentsProps: import_prop_types60.default.shape({
    root: import_prop_types60.default.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated Use the `component` or `slots.root` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ContainerComponent: elementTypeAcceptingRef_default,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated Use the `slotProps.root` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ContainerProps: import_prop_types60.default.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: import_prop_types60.default.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: import_prop_types60.default.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: import_prop_types60.default.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: import_prop_types60.default.bool,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: import_prop_types60.default.node,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: import_prop_types60.default.shape({
    root: import_prop_types60.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: import_prop_types60.default.shape({
    root: import_prop_types60.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types60.default.oneOfType([import_prop_types60.default.arrayOf(import_prop_types60.default.oneOfType([import_prop_types60.default.func, import_prop_types60.default.object, import_prop_types60.default.bool])), import_prop_types60.default.func, import_prop_types60.default.object])
} : void 0;
var ListItem_default = ListItem;

// node_modules/@mui/material/esm/Chip/Chip.js
var React115 = __toESM(require_react(), 1);
var import_prop_types61 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/internal/svg-icons/Cancel.js
var React114 = __toESM(require_react(), 1);
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var Cancel_default = createSvgIcon((0, import_jsx_runtime63.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");

// node_modules/@mui/material/esm/Chip/chipClasses.js
function getChipUtilityClass(slot) {
  return generateUtilityClass("MuiChip", slot);
}
var chipClasses = generateUtilityClasses("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]);
var chipClasses_default = chipClasses;

// node_modules/@mui/material/esm/Chip/Chip.js
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses42 = (ownerState) => {
  const {
    classes,
    disabled,
    size,
    color,
    iconColor,
    onDelete,
    clickable,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant, disabled && "disabled", `size${capitalize_default(size)}`, `color${capitalize_default(color)}`, clickable && "clickable", clickable && `clickableColor${capitalize_default(color)}`, onDelete && "deletable", onDelete && `deletableColor${capitalize_default(color)}`, `${variant}${capitalize_default(color)}`],
    label: ["label", `label${capitalize_default(size)}`],
    avatar: ["avatar", `avatar${capitalize_default(size)}`, `avatarColor${capitalize_default(color)}`],
    icon: ["icon", `icon${capitalize_default(size)}`, `iconColor${capitalize_default(iconColor)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${capitalize_default(size)}`, `deleteIconColor${capitalize_default(color)}`, `deleteIcon${capitalize_default(variant)}Color${capitalize_default(color)}`]
  };
  return composeClasses(slots, getChipUtilityClass, classes);
};
var ChipRoot = styled_default("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    const {
      color,
      iconColor,
      clickable,
      onDelete,
      size,
      variant
    } = ownerState;
    return [{
      [`& .${chipClasses_default.avatar}`]: styles4.avatar
    }, {
      [`& .${chipClasses_default.avatar}`]: styles4[`avatar${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.avatar}`]: styles4[`avatarColor${capitalize_default(color)}`]
    }, {
      [`& .${chipClasses_default.icon}`]: styles4.icon
    }, {
      [`& .${chipClasses_default.icon}`]: styles4[`icon${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.icon}`]: styles4[`iconColor${capitalize_default(iconColor)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles4.deleteIcon
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles4[`deleteIcon${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles4[`deleteIconColor${capitalize_default(color)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles4[`deleteIcon${capitalize_default(variant)}Color${capitalize_default(color)}`]
    }, styles4.root, styles4[`size${capitalize_default(size)}`], styles4[`color${capitalize_default(color)}`], clickable && styles4.clickable, clickable && color !== "default" && styles4[`clickableColor${capitalize_default(color)})`], onDelete && styles4.deletable, onDelete && color !== "default" && styles4[`deletableColor${capitalize_default(color)}`], styles4[variant], styles4[`${variant}${capitalize_default(color)}`]];
  }
})(memoTheme_default(({
  theme
}) => {
  const textColor = theme.palette.mode === "light" ? theme.palette.grey[700] : theme.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (theme.vars || theme).palette.text.primary,
    backgroundColor: (theme.vars || theme).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${chipClasses_default.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${chipClasses_default.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
      fontSize: theme.typography.pxToRem(12)
    },
    [`& .${chipClasses_default.avatarColorPrimary}`]: {
      color: (theme.vars || theme).palette.primary.contrastText,
      backgroundColor: (theme.vars || theme).palette.primary.dark
    },
    [`& .${chipClasses_default.avatarColorSecondary}`]: {
      color: (theme.vars || theme).palette.secondary.contrastText,
      backgroundColor: (theme.vars || theme).palette.secondary.dark
    },
    [`& .${chipClasses_default.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: theme.typography.pxToRem(10)
    },
    [`& .${chipClasses_default.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${chipClasses_default.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.26)` : alpha(theme.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.4)` : alpha(theme.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${chipClasses_default.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${chipClasses_default.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["contrastText"])).map(([color]) => {
      return {
        props: {
          color
        },
        style: {
          backgroundColor: (theme.vars || theme).palette[color].main,
          color: (theme.vars || theme).palette[color].contrastText,
          [`& .${chipClasses_default.deleteIcon}`]: {
            color: theme.vars ? `rgba(${theme.vars.palette[color].contrastTextChannel} / 0.7)` : alpha(theme.palette[color].contrastText, 0.7),
            "&:hover, &:active": {
              color: (theme.vars || theme).palette[color].contrastText
            }
          }
        }
      };
    }), {
      props: (props) => props.iconColor === props.color,
      style: {
        [`& .${chipClasses_default.icon}`]: {
          color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
        }
      }
    }, {
      props: (props) => props.iconColor === props.color && props.color !== "default",
      style: {
        [`& .${chipClasses_default.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: true
      },
      style: {
        [`&.${chipClasses_default.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => {
      return {
        props: {
          color,
          onDelete: true
        },
        style: {
          [`&.${chipClasses_default.focusVisible}`]: {
            background: (theme.vars || theme).palette[color].dark
          }
        }
      };
    }), {
      props: {
        clickable: true
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
        },
        [`&.${chipClasses_default.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (theme.vars || theme).shadows[1]
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => ({
      props: {
        color,
        clickable: true
      },
      style: {
        [`&:hover, &.${chipClasses_default.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette[color].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[700]}`,
        [`&.${chipClasses_default.clickable}:hover`]: {
          backgroundColor: (theme.vars || theme).palette.action.hover
        },
        [`&.${chipClasses_default.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette.action.focus
        },
        [`& .${chipClasses_default.avatar}`]: {
          marginLeft: 4
        },
        [`& .${chipClasses_default.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${chipClasses_default.icon}`]: {
          marginLeft: 4
        },
        [`& .${chipClasses_default.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${chipClasses_default.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${chipClasses_default.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        variant: "outlined",
        color
      },
      style: {
        color: (theme.vars || theme).palette[color].main,
        border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.7)` : alpha(theme.palette[color].main, 0.7)}`,
        [`&.${chipClasses_default.clickable}:hover`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
        },
        [`&.${chipClasses_default.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette[color].main, theme.palette.action.focusOpacity)
        },
        [`& .${chipClasses_default.deleteIcon}`]: {
          color: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.7)` : alpha(theme.palette[color].main, 0.7),
          "&:hover, &:active": {
            color: (theme.vars || theme).palette[color].main
          }
        }
      }
    }))]
  };
}));
var ChipLabel = styled_default("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    const {
      size
    } = ownerState;
    return [styles4.label, styles4[`label${capitalize_default(size)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}
var Chip = React115.forwardRef(function Chip2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiChip"
  });
  const {
    avatar: avatarProp,
    className,
    clickable: clickableProp,
    color = "default",
    component: ComponentProp,
    deleteIcon: deleteIconProp,
    disabled = false,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    onKeyDown,
    onKeyUp,
    size = "medium",
    variant = "filled",
    tabIndex,
    skipFocusWhenDisabled = false,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const chipRef = React115.useRef(null);
  const handleRef = useForkRef_default(chipRef, ref);
  const handleDeleteIconClick = (event) => {
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };
  const handleKeyDown = (event) => {
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleKeyUp = (event) => {
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      }
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
  };
  const clickable = clickableProp !== false && onClick ? true : clickableProp;
  const component = clickable || onDelete ? ButtonBase_default : ComponentProp || "div";
  const ownerState = {
    ...props,
    component,
    disabled,
    size,
    color,
    iconColor: React115.isValidElement(iconProp) ? iconProp.props.color || color : color,
    onDelete: !!onDelete,
    clickable,
    variant
  };
  const classes = useUtilityClasses42(ownerState);
  const moreProps = component === ButtonBase_default ? {
    component: ComponentProp || "div",
    focusVisibleClassName: classes.focusVisible,
    ...onDelete && {
      disableRipple: true
    }
  } : {};
  let deleteIcon = null;
  if (onDelete) {
    deleteIcon = deleteIconProp && React115.isValidElement(deleteIconProp) ? React115.cloneElement(deleteIconProp, {
      className: clsx_default(deleteIconProp.props.className, classes.deleteIcon),
      onClick: handleDeleteIconClick
    }) : (0, import_jsx_runtime64.jsx)(Cancel_default, {
      className: classes.deleteIcon,
      onClick: handleDeleteIconClick
    });
  }
  let avatar = null;
  if (avatarProp && React115.isValidElement(avatarProp)) {
    avatar = React115.cloneElement(avatarProp, {
      className: clsx_default(classes.avatar, avatarProp.props.className)
    });
  }
  let icon = null;
  if (iconProp && React115.isValidElement(iconProp)) {
    icon = React115.cloneElement(iconProp, {
      className: clsx_default(classes.icon, iconProp.props.className)
    });
  }
  if (true) {
    if (avatar && icon) {
      console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one.");
    }
  }
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: ChipRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: true,
    ref: handleRef,
    className: clsx_default(classes.root, className),
    additionalProps: {
      disabled: clickable && disabled ? true : void 0,
      tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
      ...moreProps
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onClick: (event) => {
        var _a;
        (_a = handlers.onClick) == null ? void 0 : _a.call(handlers, event);
        onClick(event);
      },
      onKeyDown: (event) => {
        var _a;
        (_a = handlers.onKeyDown) == null ? void 0 : _a.call(handlers, event);
        handleKeyDown(event);
      },
      onKeyUp: (event) => {
        var _a;
        (_a = handlers.onKeyUp) == null ? void 0 : _a.call(handlers, event);
        handleKeyUp(event);
      }
    })
  });
  const [LabelSlot, labelProps] = useSlot("label", {
    elementType: ChipLabel,
    externalForwardedProps,
    ownerState,
    className: classes.label
  });
  return (0, import_jsx_runtime64.jsxs)(RootSlot, {
    as: component,
    ...rootProps,
    children: [avatar || icon, (0, import_jsx_runtime64.jsx)(LabelSlot, {
      ...labelProps,
      children: label
    }), deleteIcon]
  });
});
true ? Chip.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: import_prop_types61.default.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp_default,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types61.default.object,
  /**
   * @ignore
   */
  className: import_prop_types61.default.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: import_prop_types61.default.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: import_prop_types61.default.oneOfType([import_prop_types61.default.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types61.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types61.default.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: import_prop_types61.default.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types61.default.bool,
  /**
   * Icon element.
   */
  icon: import_prop_types61.default.element,
  /**
   * The content of the component.
   */
  label: import_prop_types61.default.node,
  /**
   * @ignore
   */
  onClick: import_prop_types61.default.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: import_prop_types61.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types61.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types61.default.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types61.default.oneOfType([import_prop_types61.default.oneOf(["medium", "small"]), import_prop_types61.default.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: import_prop_types61.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types61.default.shape({
    label: import_prop_types61.default.oneOfType([import_prop_types61.default.func, import_prop_types61.default.object]),
    root: import_prop_types61.default.oneOfType([import_prop_types61.default.func, import_prop_types61.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types61.default.shape({
    label: import_prop_types61.default.elementType,
    root: import_prop_types61.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types61.default.oneOfType([import_prop_types61.default.arrayOf(import_prop_types61.default.oneOfType([import_prop_types61.default.func, import_prop_types61.default.object, import_prop_types61.default.bool])), import_prop_types61.default.func, import_prop_types61.default.object]),
  /**
   * @ignore
   */
  tabIndex: import_prop_types61.default.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: import_prop_types61.default.oneOfType([import_prop_types61.default.oneOf(["filled", "outlined"]), import_prop_types61.default.string])
} : void 0;
var Chip_default = Chip;

// node_modules/@mui/x-date-pickers/esm/PickersShortcuts/PickersShortcuts.js
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var _excluded17 = ["items", "changeImportance"];
var _excluded23 = ["getValue"];
var PickersShortcutsRoot = styled_default(List_default, {
  name: "MuiPickersLayout",
  slot: "Shortcuts"
})({});
function PickersShortcuts(props) {
  const {
    items,
    changeImportance = "accept"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
  const {
    setValue
  } = usePickerActionsContext();
  const isValidValue = useIsValidValue();
  if (items == null || items.length === 0) {
    return null;
  }
  const resolvedItems = items.map((_ref) => {
    let {
      getValue
    } = _ref, item = _objectWithoutPropertiesLoose(_ref, _excluded23);
    const newValue = getValue({
      isValid: isValidValue
    });
    return _extends({}, item, {
      label: item.label,
      onClick: () => {
        setValue(newValue, {
          changeImportance,
          shortcut: item
        });
      },
      disabled: !isValidValue(newValue)
    });
  });
  return (0, import_jsx_runtime65.jsx)(PickersShortcutsRoot, _extends({
    dense: true,
    sx: [{
      maxHeight: VIEW_HEIGHT,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(other.sx) ? other.sx : [other.sx]]
  }, other, {
    children: resolvedItems.map((item) => {
      return (0, import_jsx_runtime65.jsx)(ListItem_default, {
        children: (0, import_jsx_runtime65.jsx)(Chip_default, _extends({}, item))
      }, item.id ?? item.label);
    })
  }));
}
true ? PickersShortcuts.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Importance of the change when picking a shortcut:
   * - "accept": fires `onChange`, fires `onAccept` and closes the Picker.
   * - "set": fires `onChange` but do not fire `onAccept` and does not close the Picker.
   * @default "accept"
   */
  changeImportance: import_prop_types62.default.oneOf(["accept", "set"]),
  className: import_prop_types62.default.string,
  component: import_prop_types62.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: import_prop_types62.default.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: import_prop_types62.default.bool,
  /**
   * Ordered array of shortcuts to display.
   * If empty, does not display the shortcuts.
   * @default []
   */
  items: import_prop_types62.default.arrayOf(import_prop_types62.default.shape({
    getValue: import_prop_types62.default.func.isRequired,
    id: import_prop_types62.default.string,
    label: import_prop_types62.default.string.isRequired
  })),
  style: import_prop_types62.default.object,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: import_prop_types62.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types62.default.oneOfType([import_prop_types62.default.arrayOf(import_prop_types62.default.oneOfType([import_prop_types62.default.func, import_prop_types62.default.object, import_prop_types62.default.bool])), import_prop_types62.default.func, import_prop_types62.default.object])
} : void 0;

// node_modules/@mui/x-date-pickers/esm/PickersLayout/usePickerLayout.js
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var _excluded18 = ["ownerState"];
function toolbarHasView(toolbarProps) {
  return toolbarProps.view !== null;
}
var useUtilityClasses43 = (classes, ownerState) => {
  const {
    pickerOrientation
  } = ownerState;
  const slots = {
    root: ["root", pickerOrientation === "landscape" && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
var usePickerLayout = (props) => {
  const {
    ownerState: pickerOwnerState,
    defaultActionBarActions
  } = usePickerPrivateContext();
  const {
    view
  } = usePickerContext();
  const isRtl = useRtl();
  const {
    children: children2,
    slots,
    slotProps,
    classes: classesProp
  } = props;
  const ownerState = React117.useMemo(() => _extends({}, pickerOwnerState, {
    layoutDirection: isRtl ? "rtl" : "ltr"
  }), [pickerOwnerState, isRtl]);
  const classes = useUtilityClasses43(classesProp, ownerState);
  const ActionBar = (slots == null ? void 0 : slots.actionBar) ?? PickersActionBar;
  const _useSlotProps = useSlotProps_default({
    elementType: ActionBar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.actionBar,
    additionalProps: {
      actions: defaultActionBarActions
    },
    className: classes.actionBar,
    ownerState
  }), actionBarProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded18);
  const actionBar = (0, import_jsx_runtime66.jsx)(ActionBar, _extends({}, actionBarProps));
  const Toolbar = slots == null ? void 0 : slots.toolbar;
  const toolbarProps = useSlotProps_default({
    elementType: Toolbar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.toolbar,
    className: classes.toolbar,
    ownerState
  });
  const toolbar = toolbarHasView(toolbarProps) && !!Toolbar ? (0, import_jsx_runtime66.jsx)(Toolbar, _extends({}, toolbarProps)) : null;
  const content = children2;
  const Tabs = slots == null ? void 0 : slots.tabs;
  const tabs = view && Tabs ? (0, import_jsx_runtime66.jsx)(Tabs, _extends({
    className: classes.tabs
  }, slotProps == null ? void 0 : slotProps.tabs)) : null;
  const Shortcuts = (slots == null ? void 0 : slots.shortcuts) ?? PickersShortcuts;
  const shortcutsProps = useSlotProps_default({
    elementType: Shortcuts,
    externalSlotProps: slotProps == null ? void 0 : slotProps.shortcuts,
    className: classes.shortcuts,
    ownerState
  });
  const shortcuts = view && !!Shortcuts ? (0, import_jsx_runtime66.jsx)(Shortcuts, _extends({}, shortcutsProps)) : null;
  return {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts,
    ownerState
  };
};
var usePickerLayout_default = usePickerLayout;

// node_modules/@mui/x-date-pickers/esm/PickersLayout/PickersLayout.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses44 = (classes, ownerState) => {
  const {
    pickerOrientation
  } = ownerState;
  const slots = {
    root: ["root", pickerOrientation === "landscape" && "landscape"],
    contentWrapper: ["contentWrapper"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
var PickersLayoutRoot = styled_default("div", {
  name: "MuiPickersLayout",
  slot: "Root"
})({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${pickersLayoutClasses.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  },
  variants: [{
    props: {
      pickerOrientation: "landscape"
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: 1,
        gridRow: "2 / 3"
      },
      [`.${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: "2 / 4",
        gridRow: 1
      }
    }
  }, {
    props: {
      pickerOrientation: "landscape",
      layoutDirection: "rtl"
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: 3
      }
    }
  }, {
    props: {
      pickerOrientation: "portrait"
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: "2 / 4",
        gridRow: 1
      },
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 1,
        gridRow: "2 / 3"
      }
    }
  }, {
    props: {
      pickerOrientation: "portrait",
      layoutDirection: "rtl"
    },
    style: {
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 3
      }
    }
  }]
});
var PickersLayoutContentWrapper = styled_default("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper"
})({
  gridColumn: "2 / 4",
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
});
var PickersLayout = React118.forwardRef(function PickersLayout2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersLayout"
  });
  const {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts,
    ownerState
  } = usePickerLayout_default(props);
  const {
    orientation,
    variant
  } = usePickerContext();
  const {
    sx,
    className,
    classes: classesProp
  } = props;
  const classes = useUtilityClasses44(classesProp, ownerState);
  return (0, import_jsx_runtime67.jsxs)(PickersLayoutRoot, {
    ref,
    sx,
    className: clsx_default(classes.root, className),
    ownerState,
    children: [orientation === "landscape" ? shortcuts : toolbar, orientation === "landscape" ? toolbar : shortcuts, (0, import_jsx_runtime67.jsx)(PickersLayoutContentWrapper, {
      className: classes.contentWrapper,
      ownerState,
      children: variant === "desktop" ? (0, import_jsx_runtime67.jsxs)(React118.Fragment, {
        children: [content, tabs]
      }) : (0, import_jsx_runtime67.jsxs)(React118.Fragment, {
        children: [tabs, content]
      })
    }), actionBar]
  });
});
if (true) PickersLayout.displayName = "PickersLayout";
true ? PickersLayout.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types63.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types63.default.object,
  className: import_prop_types63.default.string,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types63.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types63.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types63.default.oneOfType([import_prop_types63.default.arrayOf(import_prop_types63.default.oneOfType([import_prop_types63.default.func, import_prop_types63.default.object, import_prop_types63.default.bool])), import_prop_types63.default.func, import_prop_types63.default.object])
} : void 0;

// node_modules/@mui/x-date-pickers/esm/internals/utils/createNonRangePickerStepNavigation.js
function createNonRangePickerStepNavigation(parameters) {
  const {
    steps
  } = parameters;
  return createStepNavigation({
    steps,
    isViewMatchingStep: (view, step) => {
      return step.views == null || step.views.includes(view);
    },
    onStepChange: ({
      step,
      defaultView,
      setView,
      view,
      views
    }) => {
      const targetView = step.views == null ? defaultView : step.views.find((viewBis) => views.includes(viewBis));
      if (targetView !== view) {
        setView(targetView);
      }
    }
  });
}

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useMobilePicker/useMobilePicker.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
var _excluded19 = ["props", "steps"];
var _excluded24 = ["ownerState"];
var useMobilePicker = (_ref) => {
  var _a;
  let {
    props,
    steps
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded19);
  const {
    slots,
    slotProps: innerSlotProps,
    label,
    inputRef,
    localeText
  } = props;
  const getStepNavigation = createNonRangePickerStepNavigation({
    steps
  });
  const {
    providerProps,
    renderCurrentView,
    ownerState
  } = usePicker(_extends({}, pickerParams, {
    props,
    localeText,
    autoFocusView: true,
    viewContainerRole: "dialog",
    variant: "mobile",
    getStepNavigation
  }));
  const labelId = providerProps.privateContextValue.labelId;
  const isToolbarHidden = ((_a = innerSlotProps == null ? void 0 : innerSlotProps.toolbar) == null ? void 0 : _a.hidden) ?? false;
  const Field = slots.field;
  const _useSlotProps = useSlotProps_default({
    elementType: Field,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.field,
    additionalProps: _extends({}, isToolbarHidden && {
      id: labelId
    }),
    ownerState
  }), fieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded24);
  const Layout = slots.layout ?? PickersLayout;
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps == null ? void 0 : innerSlotProps.toolbar, {
      titleId: labelId
    }),
    mobilePaper: _extends({
      "aria-labelledby": labelledById
    }, innerSlotProps == null ? void 0 : innerSlotProps.mobilePaper)
  });
  const renderPicker = () => (0, import_jsx_runtime68.jsx)(PickerProvider, _extends({}, providerProps, {
    children: (0, import_jsx_runtime68.jsxs)(PickerFieldUIContextProvider, {
      slots,
      slotProps,
      inputRef,
      children: [(0, import_jsx_runtime68.jsx)(Field, _extends({}, fieldProps)), (0, import_jsx_runtime68.jsx)(PickersModalDialog, {
        slots,
        slotProps,
        children: (0, import_jsx_runtime68.jsx)(Layout, _extends({}, slotProps == null ? void 0 : slotProps.layout, {
          slots,
          slotProps,
          children: renderCurrentView()
        }))
      })]
    })
  }));
  if (true) renderPicker.displayName = "renderPicker";
  return {
    renderPicker
  };
};

// node_modules/@mui/x-date-pickers/esm/timeViewRenderers/timeViewRenderers.js
var React134 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/TimeClock/TimeClock.js
var React126 = __toESM(require_react(), 1);
var import_prop_types64 = __toESM(require_prop_types(), 1);

// node_modules/@mui/x-date-pickers/esm/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js
var React120 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/internals/components/PickersArrowSwitcher/pickersArrowSwitcherClasses.js
function getPickersArrowSwitcherUtilityClass(slot) {
  return generateUtilityClass("MuiPickersArrowSwitcher", slot);
}
var pickersArrowSwitcherClasses = generateUtilityClasses("MuiPickersArrowSwitcher", ["root", "spacer", "button", "previousIconButton", "nextIconButton", "leftArrowIcon", "rightArrowIcon"]);

// node_modules/@mui/x-date-pickers/esm/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var _excluded20 = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel", "labelId", "classes"];
var _excluded25 = ["ownerState"];
var _excluded33 = ["ownerState"];
var PickersArrowSwitcherRoot = styled_default("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root"
})({
  display: "flex"
});
var PickersArrowSwitcherSpacer = styled_default("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer"
})(({
  theme
}) => ({
  width: theme.spacing(3)
}));
var PickersArrowSwitcherButton = styled_default(IconButton_default, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button"
})({
  variants: [{
    props: {
      isButtonHidden: true
    },
    style: {
      visibility: "hidden"
    }
  }]
});
var useUtilityClasses45 = (classes) => {
  const slots = {
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"],
    previousIconButton: ["previousIconButton"],
    nextIconButton: ["nextIconButton"],
    leftArrowIcon: ["leftArrowIcon"],
    rightArrowIcon: ["rightArrowIcon"]
  };
  return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
};
var PickersArrowSwitcher = React120.forwardRef(function PickersArrowSwitcher2(inProps, ref) {
  const isRtl = useRtl();
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersArrowSwitcher"
  });
  const {
    children: children2,
    className,
    slots,
    slotProps,
    isNextDisabled,
    isNextHidden,
    onGoToNext,
    nextLabel,
    isPreviousDisabled,
    isPreviousHidden,
    onGoToPrevious,
    previousLabel,
    labelId,
    classes: classesProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded20);
  const {
    ownerState
  } = usePickerPrivateContext();
  const classes = useUtilityClasses45(classesProp);
  const nextProps = {
    isDisabled: isNextDisabled,
    isHidden: isNextHidden,
    goTo: onGoToNext,
    label: nextLabel
  };
  const previousProps = {
    isDisabled: isPreviousDisabled,
    isHidden: isPreviousHidden,
    goTo: onGoToPrevious,
    label: previousLabel
  };
  const PreviousIconButton = (slots == null ? void 0 : slots.previousIconButton) ?? PickersArrowSwitcherButton;
  const previousIconButtonProps = useSlotProps_default({
    elementType: PreviousIconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.previousIconButton,
    additionalProps: {
      size: "medium",
      title: previousProps.label,
      "aria-label": previousProps.label,
      disabled: previousProps.isDisabled,
      edge: "end",
      onClick: previousProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      isButtonHidden: previousProps.isHidden ?? false
    }),
    className: clsx_default(classes.button, classes.previousIconButton)
  });
  const NextIconButton = (slots == null ? void 0 : slots.nextIconButton) ?? PickersArrowSwitcherButton;
  const nextIconButtonProps = useSlotProps_default({
    elementType: NextIconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.nextIconButton,
    additionalProps: {
      size: "medium",
      title: nextProps.label,
      "aria-label": nextProps.label,
      disabled: nextProps.isDisabled,
      edge: "start",
      onClick: nextProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      isButtonHidden: nextProps.isHidden ?? false
    }),
    className: clsx_default(classes.button, classes.nextIconButton)
  });
  const LeftArrowIcon = (slots == null ? void 0 : slots.leftArrowIcon) ?? ArrowLeftIcon;
  const _useSlotProps = useSlotProps_default({
    elementType: LeftArrowIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState,
    className: classes.leftArrowIcon
  }), leftArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded25);
  const RightArrowIcon = (slots == null ? void 0 : slots.rightArrowIcon) ?? ArrowRightIcon;
  const _useSlotProps2 = useSlotProps_default({
    elementType: RightArrowIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState,
    className: classes.rightArrowIcon
  }), rightArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded33);
  return (0, import_jsx_runtime69.jsxs)(PickersArrowSwitcherRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime69.jsx)(PreviousIconButton, _extends({}, previousIconButtonProps, {
      children: isRtl ? (0, import_jsx_runtime69.jsx)(RightArrowIcon, _extends({}, rightArrowIconProps)) : (0, import_jsx_runtime69.jsx)(LeftArrowIcon, _extends({}, leftArrowIconProps))
    })), children2 ? (0, import_jsx_runtime69.jsx)(Typography_default, {
      variant: "subtitle1",
      component: "span",
      id: labelId,
      children: children2
    }) : (0, import_jsx_runtime69.jsx)(PickersArrowSwitcherSpacer, {
      className: classes.spacer,
      ownerState
    }), (0, import_jsx_runtime69.jsx)(NextIconButton, _extends({}, nextIconButtonProps, {
      children: isRtl ? (0, import_jsx_runtime69.jsx)(LeftArrowIcon, _extends({}, leftArrowIconProps)) : (0, import_jsx_runtime69.jsx)(RightArrowIcon, _extends({}, rightArrowIconProps))
    }))]
  }));
});
if (true) PickersArrowSwitcher.displayName = "PickersArrowSwitcher";

// node_modules/@mui/x-date-pickers/esm/internals/components/PickerViewRoot/PickerViewRoot.js
var PickerViewRoot = styled_default("div")({
  overflow: "hidden",
  width: DIALOG_WIDTH,
  maxHeight: VIEW_HEIGHT,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
});

// node_modules/@mui/x-date-pickers/esm/TimeClock/timeClockClasses.js
function getTimeClockUtilityClass(slot) {
  return generateUtilityClass("MuiTimeClock", slot);
}
var timeClockClasses = generateUtilityClasses("MuiTimeClock", ["root", "arrowSwitcher"]);

// node_modules/@mui/x-date-pickers/esm/TimeClock/Clock.js
var React122 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/TimeClock/ClockPointer.js
var React121 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/TimeClock/shared.js
var CLOCK_WIDTH = 220;
var CLOCK_HOUR_WIDTH = 36;
var clockCenter = {
  x: CLOCK_WIDTH / 2,
  y: CLOCK_WIDTH / 2
};
var baseClockPoint = {
  x: clockCenter.x,
  y: 0
};
var cx = baseClockPoint.x - clockCenter.x;
var cy = baseClockPoint.y - clockCenter.y;
var rad2deg = (rad) => rad * (180 / Math.PI);
var getAngleValue = (step, offsetX, offsetY) => {
  const x = offsetX - clockCenter.x;
  const y = offsetY - clockCenter.y;
  const atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  let deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  const value = Math.floor(deg / step) || 0;
  const delta = x ** 2 + y ** 2;
  const distance = Math.sqrt(delta);
  return {
    value,
    distance
  };
};
var getMinutes = (offsetX, offsetY, step = 1) => {
  const angleStep = step * 6;
  let {
    value
  } = getAngleValue(angleStep, offsetX, offsetY);
  value = value * step % 60;
  return value;
};
var getHours = (offsetX, offsetY, ampm) => {
  const {
    value,
    distance
  } = getAngleValue(30, offsetX, offsetY);
  let hour = value || 12;
  if (!ampm) {
    if (distance < CLOCK_WIDTH / 2 - CLOCK_HOUR_WIDTH) {
      hour += 12;
      hour %= 24;
    }
  } else {
    hour %= 12;
  }
  return hour;
};

// node_modules/@mui/x-date-pickers/esm/TimeClock/clockPointerClasses.js
function getClockPointerUtilityClass(slot) {
  return generateUtilityClass("MuiClockPointer", slot);
}
var clockPointerClasses = generateUtilityClasses("MuiClockPointer", ["root", "thumb"]);

// node_modules/@mui/x-date-pickers/esm/TimeClock/ClockPointer.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
var _excluded21 = ["className", "classes", "isBetweenTwoClockValues", "isInner", "type", "viewValue"];
var useUtilityClasses46 = (classes) => {
  const slots = {
    root: ["root"],
    thumb: ["thumb"]
  };
  return composeClasses(slots, getClockPointerUtilityClass, classes);
};
var ClockPointerRoot = styled_default("div", {
  name: "MuiClockPointer",
  slot: "Root"
})(({
  theme
}) => ({
  width: 2,
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: "absolute",
  left: "calc(50% - 1px)",
  bottom: "50%",
  transformOrigin: "center bottom 0px",
  variants: [{
    props: {
      isClockPointerAnimated: true
    },
    style: {
      transition: theme.transitions.create(["transform", "height"])
    }
  }]
}));
var ClockPointerThumb = styled_default("div", {
  name: "MuiClockPointer",
  slot: "Thumb"
})(({
  theme
}) => ({
  width: 4,
  height: 4,
  backgroundColor: (theme.vars || theme).palette.primary.contrastText,
  borderRadius: "50%",
  position: "absolute",
  top: -21,
  left: `calc(50% - ${CLOCK_HOUR_WIDTH / 2}px)`,
  border: `${(CLOCK_HOUR_WIDTH - 4) / 2}px solid ${(theme.vars || theme).palette.primary.main}`,
  boxSizing: "content-box",
  variants: [{
    props: {
      isClockPointerBetweenTwoValues: false
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main
    }
  }]
}));
function ClockPointer(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClockPointer"
  });
  const {
    className,
    classes: classesProp,
    isBetweenTwoClockValues,
    isInner,
    type,
    viewValue
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded21);
  const previousType = React121.useRef(type);
  React121.useEffect(() => {
    previousType.current = type;
  }, [type]);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isClockPointerAnimated: previousType.current !== type,
    isClockPointerBetweenTwoValues: isBetweenTwoClockValues
  });
  const classes = useUtilityClasses46(classesProp);
  const getAngleStyle = () => {
    const max = type === "hours" ? 12 : 60;
    let angle = 360 / max * viewValue;
    if (type === "hours" && viewValue > 12) {
      angle -= 360;
    }
    return {
      height: Math.round((isInner ? 0.26 : 0.4) * CLOCK_WIDTH),
      transform: `rotateZ(${angle}deg)`
    };
  };
  return (0, import_jsx_runtime70.jsx)(ClockPointerRoot, _extends({
    style: getAngleStyle(),
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: (0, import_jsx_runtime70.jsx)(ClockPointerThumb, {
      ownerState,
      className: classes.thumb
    })
  }));
}

// node_modules/@mui/x-date-pickers/esm/TimeClock/clockClasses.js
function getClockUtilityClass(slot) {
  return generateUtilityClass("MuiClock", slot);
}
var clockClasses = generateUtilityClasses("MuiClock", ["root", "clock", "wrapper", "squareMask", "pin", "amButton", "pmButton", "meridiemText", "selected"]);

// node_modules/@mui/x-date-pickers/esm/TimeClock/Clock.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses47 = (classes, ownerState) => {
  const slots = {
    root: ["root"],
    clock: ["clock"],
    wrapper: ["wrapper"],
    squareMask: ["squareMask"],
    pin: ["pin"],
    amButton: ["amButton", ownerState.clockMeridiemMode === "am" && "selected"],
    pmButton: ["pmButton", ownerState.clockMeridiemMode === "pm" && "selected"],
    meridiemText: ["meridiemText"]
  };
  return composeClasses(slots, getClockUtilityClass, classes);
};
var ClockRoot = styled_default("div", {
  name: "MuiClock",
  slot: "Root"
})(({
  theme
}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(2)
}));
var ClockClock = styled_default("div", {
  name: "MuiClock",
  slot: "Clock"
})({
  backgroundColor: "rgba(0,0,0,.07)",
  borderRadius: "50%",
  height: 220,
  width: 220,
  flexShrink: 0,
  position: "relative",
  pointerEvents: "none"
});
var ClockWrapper = styled_default("div", {
  name: "MuiClock",
  slot: "Wrapper"
})({
  "&:focus": {
    outline: "none"
  }
});
var ClockSquareMask = styled_default("div", {
  name: "MuiClock",
  slot: "SquareMask"
})({
  width: "100%",
  height: "100%",
  position: "absolute",
  pointerEvents: "auto",
  outline: 0,
  // Disable scroll capabilities.
  touchAction: "none",
  userSelect: "none",
  variants: [{
    props: {
      isClockDisabled: false
    },
    style: {
      "@media (pointer: fine)": {
        cursor: "pointer",
        borderRadius: "50%"
      },
      "&:active": {
        cursor: "move"
      }
    }
  }]
});
var ClockPin = styled_default("div", {
  name: "MuiClock",
  slot: "Pin"
})(({
  theme
}) => ({
  width: 6,
  height: 6,
  borderRadius: "50%",
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}));
var meridiemButtonCommonStyles = (theme, clockMeridiemMode) => ({
  zIndex: 1,
  bottom: 8,
  paddingLeft: 4,
  paddingRight: 4,
  width: CLOCK_HOUR_WIDTH,
  variants: [{
    props: {
      clockMeridiemMode
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main,
      color: (theme.vars || theme).palette.primary.contrastText,
      "&:hover": {
        backgroundColor: (theme.vars || theme).palette.primary.light
      }
    }
  }]
});
var ClockAmButton = styled_default(IconButton_default, {
  name: "MuiClock",
  slot: "AmButton"
})(({
  theme
}) => _extends({}, meridiemButtonCommonStyles(theme, "am"), {
  // keeping it here to make TS happy
  position: "absolute",
  left: 8
}));
var ClockPmButton = styled_default(IconButton_default, {
  name: "MuiClock",
  slot: "PmButton"
})(({
  theme
}) => _extends({}, meridiemButtonCommonStyles(theme, "pm"), {
  // keeping it here to make TS happy
  position: "absolute",
  right: 8
}));
var ClockMeridiemText = styled_default(Typography_default, {
  name: "MuiClock",
  slot: "MeridiemText"
})({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
});
function Clock(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClock"
  });
  const {
    ampm,
    ampmInClock,
    autoFocus,
    children: children2,
    value,
    handleMeridiemChange,
    isTimeDisabled,
    meridiemMode,
    minutesStep = 1,
    onChange,
    selectedId,
    type,
    viewValue,
    viewRange: [minViewValue, maxViewValue],
    disabled = false,
    readOnly,
    className,
    classes: classesProp
  } = props;
  const utils = useUtils();
  const translations = usePickerTranslations();
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isClockDisabled: disabled,
    clockMeridiemMode: meridiemMode
  });
  const isMoving = React122.useRef(false);
  const classes = useUtilityClasses47(classesProp, ownerState);
  const isSelectedTimeDisabled = isTimeDisabled(viewValue, type);
  const isPointerInner = !ampm && type === "hours" && (viewValue < 1 || viewValue > 12);
  const handleValueChange = (newValue, isFinish) => {
    if (disabled || readOnly) {
      return;
    }
    if (isTimeDisabled(newValue, type)) {
      return;
    }
    onChange(newValue, isFinish);
  };
  const setTime = (event, isFinish) => {
    let {
      offsetX,
      offsetY
    } = event;
    if (offsetX === void 0) {
      const rect = event.target.getBoundingClientRect();
      offsetX = event.changedTouches[0].clientX - rect.left;
      offsetY = event.changedTouches[0].clientY - rect.top;
    }
    const newSelectedValue = type === "seconds" || type === "minutes" ? getMinutes(offsetX, offsetY, minutesStep) : getHours(offsetX, offsetY, Boolean(ampm));
    handleValueChange(newSelectedValue, isFinish);
  };
  const handleTouchSelection = (event) => {
    isMoving.current = true;
    setTime(event, "shallow");
  };
  const handleTouchEnd = (event) => {
    if (isMoving.current) {
      setTime(event, "finish");
      isMoving.current = false;
    }
    event.preventDefault();
  };
  const handleMouseMove = (event) => {
    if (event.buttons > 0) {
      setTime(event.nativeEvent, "shallow");
    }
  };
  const handleMouseUp = (event) => {
    if (isMoving.current) {
      isMoving.current = false;
    }
    setTime(event.nativeEvent, "finish");
  };
  const isPointerBetweenTwoClockValues = type === "hours" ? false : viewValue % 5 !== 0;
  const keyboardControlStep = type === "minutes" ? minutesStep : 1;
  const listboxRef = React122.useRef(null);
  useEnhancedEffect_default(() => {
    if (autoFocus) {
      listboxRef.current.focus();
    }
  }, [autoFocus]);
  const clampValue = (newValue) => Math.max(minViewValue, Math.min(maxViewValue, newValue));
  const circleValue = (newValue) => (newValue + (maxViewValue + 1)) % (maxViewValue + 1);
  const handleKeyDown = (event) => {
    if (isMoving.current) {
      return;
    }
    switch (event.key) {
      case "Home":
        handleValueChange(minViewValue, "partial");
        event.preventDefault();
        break;
      case "End":
        handleValueChange(maxViewValue, "partial");
        event.preventDefault();
        break;
      case "ArrowUp":
        handleValueChange(circleValue(viewValue + keyboardControlStep), "partial");
        event.preventDefault();
        break;
      case "ArrowDown":
        handleValueChange(circleValue(viewValue - keyboardControlStep), "partial");
        event.preventDefault();
        break;
      case "PageUp":
        handleValueChange(clampValue(viewValue + 5), "partial");
        event.preventDefault();
        break;
      case "PageDown":
        handleValueChange(clampValue(viewValue - 5), "partial");
        event.preventDefault();
        break;
      case "Enter":
      case " ":
        handleValueChange(viewValue, "finish");
        event.preventDefault();
        break;
      default:
    }
  };
  return (0, import_jsx_runtime71.jsxs)(ClockRoot, {
    className: clsx_default(classes.root, className),
    children: [(0, import_jsx_runtime71.jsxs)(ClockClock, {
      className: classes.clock,
      children: [(0, import_jsx_runtime71.jsx)(ClockSquareMask, {
        onTouchMove: handleTouchSelection,
        onTouchStart: handleTouchSelection,
        onTouchEnd: handleTouchEnd,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
        ownerState,
        className: classes.squareMask
      }), !isSelectedTimeDisabled && (0, import_jsx_runtime71.jsxs)(React122.Fragment, {
        children: [(0, import_jsx_runtime71.jsx)(ClockPin, {
          className: classes.pin
        }), value != null && (0, import_jsx_runtime71.jsx)(ClockPointer, {
          type,
          viewValue,
          isInner: isPointerInner,
          isBetweenTwoClockValues: isPointerBetweenTwoClockValues
        })]
      }), (0, import_jsx_runtime71.jsx)(ClockWrapper, {
        "aria-activedescendant": selectedId,
        "aria-label": translations.clockLabelText(type, value == null ? null : utils.format(value, ampm ? "fullTime12h" : "fullTime24h")),
        ref: listboxRef,
        role: "listbox",
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        className: classes.wrapper,
        children: children2
      })]
    }), ampm && ampmInClock && (0, import_jsx_runtime71.jsxs)(React122.Fragment, {
      children: [(0, import_jsx_runtime71.jsx)(ClockAmButton, {
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled: disabled || meridiemMode === null,
        ownerState,
        className: classes.amButton,
        title: formatMeridiem(utils, "am"),
        children: (0, import_jsx_runtime71.jsx)(ClockMeridiemText, {
          variant: "caption",
          className: classes.meridiemText,
          children: formatMeridiem(utils, "am")
        })
      }), (0, import_jsx_runtime71.jsx)(ClockPmButton, {
        disabled: disabled || meridiemMode === null,
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        ownerState,
        className: classes.pmButton,
        title: formatMeridiem(utils, "pm"),
        children: (0, import_jsx_runtime71.jsx)(ClockMeridiemText, {
          variant: "caption",
          className: classes.meridiemText,
          children: formatMeridiem(utils, "pm")
        })
      })]
    })]
  });
}

// node_modules/@mui/x-date-pickers/esm/TimeClock/ClockNumbers.js
var React124 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/TimeClock/ClockNumber.js
var React123 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/TimeClock/clockNumberClasses.js
function getClockNumberUtilityClass(slot) {
  return generateUtilityClass("MuiClockNumber", slot);
}
var clockNumberClasses = generateUtilityClasses("MuiClockNumber", ["root", "selected", "disabled"]);

// node_modules/@mui/x-date-pickers/esm/TimeClock/ClockNumber.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var _excluded26 = ["className", "classes", "disabled", "index", "inner", "label", "selected"];
var useUtilityClasses48 = (classes, ownerState) => {
  const slots = {
    root: ["root", ownerState.isClockNumberSelected && "selected", ownerState.isClockNumberDisabled && "disabled"]
  };
  return composeClasses(slots, getClockNumberUtilityClass, classes);
};
var ClockNumberRoot = styled_default("span", {
  name: "MuiClockNumber",
  slot: "Root",
  overridesResolver: (_, styles4) => [styles4.root, {
    [`&.${clockNumberClasses.disabled}`]: styles4.disabled
  }, {
    [`&.${clockNumberClasses.selected}`]: styles4.selected
  }]
})(({
  theme
}) => ({
  height: CLOCK_HOUR_WIDTH,
  width: CLOCK_HOUR_WIDTH,
  position: "absolute",
  left: `calc((100% - ${CLOCK_HOUR_WIDTH}px) / 2)`,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  color: (theme.vars || theme).palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  "&:focused": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  [`&.${clockNumberClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText
  },
  [`&.${clockNumberClasses.disabled}`]: {
    pointerEvents: "none",
    color: (theme.vars || theme).palette.text.disabled
  },
  variants: [{
    props: {
      isClockNumberInInnerRing: true
    },
    style: _extends({}, theme.typography.body2, {
      color: (theme.vars || theme).palette.text.secondary
    })
  }]
}));
function ClockNumber(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClockNumber"
  });
  const {
    className,
    classes: classesProp,
    disabled,
    index,
    inner,
    label,
    selected
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded26);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    isClockNumberInInnerRing: inner,
    isClockNumberSelected: selected,
    isClockNumberDisabled: disabled
  });
  const classes = useUtilityClasses48(classesProp, ownerState);
  const angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
  const length = (CLOCK_WIDTH - CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
  const x = Math.round(Math.cos(angle) * length);
  const y = Math.round(Math.sin(angle) * length);
  return (0, import_jsx_runtime72.jsx)(ClockNumberRoot, _extends({
    className: clsx_default(classes.root, className),
    "aria-disabled": disabled ? true : void 0,
    "aria-selected": selected ? true : void 0,
    role: "option",
    style: {
      transform: `translate(${x}px, ${y + (CLOCK_WIDTH - CLOCK_HOUR_WIDTH) / 2}px`
    },
    ownerState
  }, other, {
    children: label
  }));
}

// node_modules/@mui/x-date-pickers/esm/TimeClock/ClockNumbers.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
var getHourNumbers = ({
  ampm,
  value,
  getClockNumberText,
  isDisabled,
  selectedId,
  utils
}) => {
  const currentHours = value ? utils.getHours(value) : null;
  const hourNumbers = [];
  const startHour = ampm ? 1 : 0;
  const endHour = ampm ? 12 : 23;
  const isSelected = (hour) => {
    if (currentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }
      return currentHours === hour || currentHours - 12 === hour;
    }
    return currentHours === hour;
  };
  for (let hour = startHour; hour <= endHour; hour += 1) {
    let label = hour.toString();
    if (hour === 0) {
      label = "00";
    }
    const inner = !ampm && (hour === 0 || hour > 12);
    label = utils.formatNumber(label);
    const selected = isSelected(hour);
    hourNumbers.push((0, import_jsx_runtime73.jsx)(ClockNumber, {
      id: selected ? selectedId : void 0,
      index: hour,
      inner,
      selected,
      disabled: isDisabled(hour),
      label,
      "aria-label": getClockNumberText(label)
    }, hour));
  }
  return hourNumbers;
};
var getMinutesNumbers = ({
  utils,
  value,
  isDisabled,
  getClockNumberText,
  selectedId
}) => {
  const f = utils.formatNumber;
  return [[5, f("05")], [10, f("10")], [15, f("15")], [20, f("20")], [25, f("25")], [30, f("30")], [35, f("35")], [40, f("40")], [45, f("45")], [50, f("50")], [55, f("55")], [0, f("00")]].map(([numberValue, label], index) => {
    const selected = numberValue === value;
    return (0, import_jsx_runtime73.jsx)(ClockNumber, {
      label,
      id: selected ? selectedId : void 0,
      index: index + 1,
      inner: false,
      disabled: isDisabled(numberValue),
      selected,
      "aria-label": getClockNumberText(label)
    }, numberValue);
  });
};

// node_modules/@mui/x-date-pickers/esm/internals/hooks/useClockReferenceDate.js
var React125 = __toESM(require_react(), 1);
var useClockReferenceDate = ({
  value,
  referenceDate: referenceDateProp,
  utils,
  props,
  timezone
}) => {
  const referenceDate = React125.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      utils,
      props,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.day,
      timezone,
      getTodayDate: () => getTodayDate(utils, timezone, "date")
    }),
    // We only want to compute the reference date on mount.
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  return value ?? referenceDate;
};

// node_modules/@mui/x-date-pickers/esm/TimeClock/TimeClock.js
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var _excluded27 = ["ampm", "ampmInClock", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "showViewSwitcher", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "classes", "disabled", "readOnly", "timezone"];
var useUtilityClasses49 = (classes) => {
  const slots = {
    root: ["root"],
    arrowSwitcher: ["arrowSwitcher"]
  };
  return composeClasses(slots, getTimeClockUtilityClass, classes);
};
var TimeClockRoot = styled_default(PickerViewRoot, {
  name: "MuiTimeClock",
  slot: "Root"
})({
  display: "flex",
  flexDirection: "column",
  position: "relative"
});
var TimeClockArrowSwitcher = styled_default(PickersArrowSwitcher, {
  name: "MuiTimeClock",
  slot: "ArrowSwitcher"
})({
  position: "absolute",
  right: 12,
  top: 15
});
var TIME_CLOCK_DEFAULT_VIEWS = ["hours", "minutes"];
var TimeClock = React126.forwardRef(function TimeClock2(inProps, ref) {
  const utils = useUtils();
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimeClock"
  });
  const {
    ampm = utils.is12HourCycleInCurrentLocale(),
    ampmInClock = false,
    autoFocus,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableTime,
    showViewSwitcher,
    onChange,
    view: inView,
    views = TIME_CLOCK_DEFAULT_VIEWS,
    openTo,
    onViewChange,
    focusedView,
    onFocusedViewChange,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded27);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValue({
    name: "TimeClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    utils,
    props,
    timezone
  });
  const translations = usePickerTranslations();
  const now = useNow(timezone);
  const selectedId = useId();
  const {
    ownerState
  } = usePickerPrivateContext();
  const {
    view,
    setView,
    previousView,
    nextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(valueOrReferenceDate, ampm, setValueAndGoToNextView);
  const isTimeDisabled = React126.useCallback((rawValue, viewType) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
    const shouldCheckPastEnd = viewType === "hours" || viewType === "minutes" && views.includes("seconds");
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case "hours":
            return !shouldDisableTime(utils.setHours(valueOrReferenceDate, timeValue), "hours");
          case "minutes":
            return !shouldDisableTime(utils.setMinutes(valueOrReferenceDate, timeValue), "minutes");
          case "seconds":
            return !shouldDisableTime(utils.setSeconds(valueOrReferenceDate, timeValue), "seconds");
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case "hours": {
        const valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
        const dateWithNewHours = utils.setHours(valueOrReferenceDate, valueWithMeridiem);
        if (utils.getHours(dateWithNewHours) !== valueWithMeridiem) {
          return true;
        }
        const start = utils.setSeconds(utils.setMinutes(dateWithNewHours, 0), 0);
        const end = utils.setSeconds(utils.setMinutes(dateWithNewHours, 59), 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(valueWithMeridiem);
      }
      case "minutes": {
        const dateWithNewMinutes = utils.setMinutes(valueOrReferenceDate, rawValue);
        const start = utils.setSeconds(dateWithNewMinutes, 0);
        const end = utils.setSeconds(dateWithNewMinutes, 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue, minutesStep);
      }
      case "seconds": {
        const dateWithNewSeconds = utils.setSeconds(valueOrReferenceDate, rawValue);
        const start = dateWithNewSeconds;
        const end = dateWithNewSeconds;
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue);
      }
      default:
        throw new Error("not supported");
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableTime, utils, disableFuture, disablePast, now, views]);
  const viewProps = React126.useMemo(() => {
    switch (view) {
      case "hours": {
        const handleHoursChange = (hourValue, isFinish) => {
          const valueWithMeridiem = convertValueToMeridiem(hourValue, meridiemMode, ampm);
          setValueAndGoToNextView(utils.setHours(valueOrReferenceDate, valueWithMeridiem), isFinish, "hours");
        };
        const viewValue = utils.getHours(valueOrReferenceDate);
        let viewRange;
        if (ampm) {
          if (viewValue > 12) {
            viewRange = [12, 23];
          } else {
            viewRange = [0, 11];
          }
        } else {
          viewRange = [0, 23];
        }
        return {
          onChange: handleHoursChange,
          viewValue,
          children: getHourNumbers({
            value,
            utils,
            ampm,
            onChange: handleHoursChange,
            getClockNumberText: translations.hoursClockNumberText,
            isDisabled: (hourValue) => disabled || isTimeDisabled(hourValue, "hours"),
            selectedId
          }),
          viewRange
        };
      }
      case "minutes": {
        const minutesValue = utils.getMinutes(valueOrReferenceDate);
        const handleMinutesChange = (minuteValue, isFinish) => {
          setValueAndGoToNextView(utils.setMinutes(valueOrReferenceDate, minuteValue), isFinish, "minutes");
        };
        return {
          viewValue: minutesValue,
          onChange: handleMinutesChange,
          children: getMinutesNumbers({
            utils,
            value: minutesValue,
            onChange: handleMinutesChange,
            getClockNumberText: translations.minutesClockNumberText,
            isDisabled: (minuteValue) => disabled || isTimeDisabled(minuteValue, "minutes"),
            selectedId
          }),
          viewRange: [0, 59]
        };
      }
      case "seconds": {
        const secondsValue = utils.getSeconds(valueOrReferenceDate);
        const handleSecondsChange = (secondValue, isFinish) => {
          setValueAndGoToNextView(utils.setSeconds(valueOrReferenceDate, secondValue), isFinish, "seconds");
        };
        return {
          viewValue: secondsValue,
          onChange: handleSecondsChange,
          children: getMinutesNumbers({
            utils,
            value: secondsValue,
            onChange: handleSecondsChange,
            getClockNumberText: translations.secondsClockNumberText,
            isDisabled: (secondValue) => disabled || isTimeDisabled(secondValue, "seconds"),
            selectedId
          }),
          viewRange: [0, 59]
        };
      }
      default:
        throw new Error("You must provide the type for ClockView");
    }
  }, [view, utils, value, ampm, translations.hoursClockNumberText, translations.minutesClockNumberText, translations.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, valueOrReferenceDate, isTimeDisabled, selectedId, disabled]);
  const classes = useUtilityClasses49(classesProp);
  return (0, import_jsx_runtime74.jsxs)(TimeClockRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime74.jsx)(Clock, _extends({
      autoFocus: autoFocus ?? !!focusedView,
      ampmInClock: ampmInClock && views.includes("hours"),
      value,
      type: view,
      ampm,
      minutesStep,
      isTimeDisabled,
      meridiemMode,
      handleMeridiemChange,
      selectedId,
      disabled,
      readOnly
    }, viewProps)), showViewSwitcher && (0, import_jsx_runtime74.jsx)(TimeClockArrowSwitcher, {
      className: classes.arrowSwitcher,
      slots,
      slotProps,
      onGoToPrevious: () => setView(previousView),
      isPreviousDisabled: !previousView,
      previousLabel: translations.openPreviousView,
      onGoToNext: () => setView(nextView),
      isNextDisabled: !nextView,
      nextLabel: translations.openNextView,
      ownerState
    })]
  }));
});
if (true) TimeClock.displayName = "TimeClock";
true ? TimeClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types64.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: import_prop_types64.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types64.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types64.default.object,
  className: import_prop_types64.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types64.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types64.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types64.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types64.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types64.default.bool,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types64.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types64.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types64.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types64.default.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types64.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types64.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types64.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types64.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types64.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: import_prop_types64.default.object,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types64.default.func,
  showViewSwitcher: import_prop_types64.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types64.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types64.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types64.default.oneOfType([import_prop_types64.default.arrayOf(import_prop_types64.default.oneOfType([import_prop_types64.default.func, import_prop_types64.default.object, import_prop_types64.default.bool])), import_prop_types64.default.func, import_prop_types64.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types64.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types64.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types64.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Available views.
   * @default ['hours', 'minutes']
   */
  views: import_prop_types64.default.arrayOf(import_prop_types64.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
} : void 0;

// node_modules/@mui/x-date-pickers/esm/DigitalClock/DigitalClock.js
var React131 = __toESM(require_react(), 1);
var import_prop_types69 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/MenuItem/MenuItem.js
var React130 = __toESM(require_react(), 1);
var import_prop_types68 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Divider/Divider.js
var React127 = __toESM(require_react(), 1);
var import_prop_types65 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Divider/dividerClasses.js
function getDividerUtilityClass(slot) {
  return generateUtilityClass("MuiDivider", slot);
}
var dividerClasses = generateUtilityClasses("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
var dividerClasses_default = dividerClasses;

// node_modules/@mui/material/esm/Divider/Divider.js
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses50 = (ownerState) => {
  const {
    absolute,
    children: children2,
    classes,
    flexItem,
    light,
    orientation,
    textAlign,
    variant
  } = ownerState;
  const slots = {
    root: ["root", absolute && "absolute", variant, light && "light", orientation === "vertical" && "vertical", flexItem && "flexItem", children2 && "withChildren", children2 && orientation === "vertical" && "withChildrenVertical", textAlign === "right" && orientation !== "vertical" && "textAlignRight", textAlign === "left" && orientation !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", orientation === "vertical" && "wrapperVertical"]
  };
  return composeClasses(slots, getDividerUtilityClass, classes);
};
var DividerRoot = styled_default("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.absolute && styles4.absolute, styles4[ownerState.variant], ownerState.light && styles4.light, ownerState.orientation === "vertical" && styles4.vertical, ownerState.flexItem && styles4.flexItem, ownerState.children && styles4.withChildren, ownerState.children && ownerState.orientation === "vertical" && styles4.withChildrenVertical, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && styles4.textAlignRight, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && styles4.textAlignLeft];
  }
})(memoTheme_default(({
  theme
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (theme.vars || theme).palette.divider,
  borderBottomWidth: "thin",
  variants: [{
    props: {
      absolute: true
    },
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    }
  }, {
    props: {
      light: true
    },
    style: {
      borderColor: theme.vars ? `rgba(${theme.vars.palette.dividerChannel} / 0.08)` : alpha(theme.palette.divider, 0.08)
    }
  }, {
    props: {
      variant: "inset"
    },
    style: {
      marginLeft: 72
    }
  }, {
    props: {
      variant: "middle",
      orientation: "horizontal"
    },
    style: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }
  }, {
    props: {
      variant: "middle",
      orientation: "vertical"
    },
    style: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      borderBottomWidth: 0,
      borderRightWidth: "thin"
    }
  }, {
    props: {
      flexItem: true
    },
    style: {
      alignSelf: "stretch",
      height: "auto"
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.children,
    style: {
      display: "flex",
      textAlign: "center",
      border: 0,
      borderTopStyle: "solid",
      borderLeftStyle: "solid",
      "&::before, &::after": {
        content: '""',
        alignSelf: "center"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.children && ownerState.orientation !== "vertical",
    style: {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(theme.vars || theme).palette.divider}`,
        borderTopStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.orientation === "vertical" && ownerState.children,
    style: {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`,
        borderLeftStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.textAlign === "right" && ownerState.orientation !== "vertical",
    style: {
      "&::before": {
        width: "90%"
      },
      "&::after": {
        width: "10%"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.textAlign === "left" && ownerState.orientation !== "vertical",
    style: {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }
  }]
})));
var DividerWrapper = styled_default("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.wrapper, ownerState.orientation === "vertical" && styles4.wrapperVertical];
  }
})(memoTheme_default(({
  theme
}) => ({
  display: "inline-block",
  paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
  paddingRight: `calc(${theme.spacing(1)} * 1.2)`,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
    }
  }]
})));
var Divider = React127.forwardRef(function Divider2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiDivider"
  });
  const {
    absolute = false,
    children: children2,
    className,
    orientation = "horizontal",
    component = children2 || orientation === "vertical" ? "div" : "hr",
    flexItem = false,
    light = false,
    role = component !== "hr" ? "separator" : void 0,
    textAlign = "center",
    variant = "fullWidth",
    ...other
  } = props;
  const ownerState = {
    ...props,
    absolute,
    component,
    flexItem,
    light,
    orientation,
    role,
    textAlign,
    variant
  };
  const classes = useUtilityClasses50(ownerState);
  return (0, import_jsx_runtime75.jsx)(DividerRoot, {
    as: component,
    className: clsx_default(classes.root, className),
    role,
    ref,
    ownerState,
    "aria-orientation": role === "separator" && (component !== "hr" || orientation === "vertical") ? orientation : void 0,
    ...other,
    children: children2 ? (0, import_jsx_runtime75.jsx)(DividerWrapper, {
      className: classes.wrapper,
      ownerState,
      children: children2
    }) : null
  });
});
if (Divider) {
  Divider.muiSkipListHighlight = true;
}
true ? Divider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: import_prop_types65.default.bool,
  /**
   * The content of the component.
   */
  children: import_prop_types65.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types65.default.object,
  /**
   * @ignore
   */
  className: import_prop_types65.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types65.default.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: import_prop_types65.default.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   * @deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  light: import_prop_types65.default.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types65.default.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: import_prop_types65.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types65.default.oneOfType([import_prop_types65.default.arrayOf(import_prop_types65.default.oneOfType([import_prop_types65.default.func, import_prop_types65.default.object, import_prop_types65.default.bool])), import_prop_types65.default.func, import_prop_types65.default.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: import_prop_types65.default.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: import_prop_types65.default.oneOfType([import_prop_types65.default.oneOf(["fullWidth", "inset", "middle"]), import_prop_types65.default.string])
} : void 0;

// node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js
var React128 = __toESM(require_react(), 1);
var import_prop_types66 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/ListItemIcon/listItemIconClasses.js
function getListItemIconUtilityClass(slot) {
  return generateUtilityClass("MuiListItemIcon", slot);
}
var listItemIconClasses = generateUtilityClasses("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
var listItemIconClasses_default = listItemIconClasses;

// node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses51 = (ownerState) => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ["root", alignItems === "flex-start" && "alignItemsFlexStart"]
  };
  return composeClasses(slots, getListItemIconUtilityClass, classes);
};
var ListItemIconRoot = styled_default("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [styles4.root, ownerState.alignItems === "flex-start" && styles4.alignItemsFlexStart];
  }
})(memoTheme_default(({
  theme
}) => ({
  minWidth: 56,
  color: (theme.vars || theme).palette.action.active,
  flexShrink: 0,
  display: "inline-flex",
  variants: [{
    props: {
      alignItems: "flex-start"
    },
    style: {
      marginTop: 8
    }
  }]
})));
var ListItemIcon = React128.forwardRef(function ListItemIcon2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiListItemIcon"
  });
  const {
    className,
    ...other
  } = props;
  const context = React128.useContext(ListContext_default);
  const ownerState = {
    ...props,
    alignItems: context.alignItems
  };
  const classes = useUtilityClasses51(ownerState);
  return (0, import_jsx_runtime76.jsx)(ListItemIconRoot, {
    className: clsx_default(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
true ? ListItemIcon.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: import_prop_types66.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types66.default.object,
  /**
   * @ignore
   */
  className: import_prop_types66.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types66.default.oneOfType([import_prop_types66.default.arrayOf(import_prop_types66.default.oneOfType([import_prop_types66.default.func, import_prop_types66.default.object, import_prop_types66.default.bool])), import_prop_types66.default.func, import_prop_types66.default.object])
} : void 0;

// node_modules/@mui/material/esm/ListItemText/ListItemText.js
var React129 = __toESM(require_react(), 1);
var import_prop_types67 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/ListItemText/listItemTextClasses.js
function getListItemTextUtilityClass(slot) {
  return generateUtilityClass("MuiListItemText", slot);
}
var listItemTextClasses = generateUtilityClasses("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
var listItemTextClasses_default = listItemTextClasses;

// node_modules/@mui/material/esm/ListItemText/ListItemText.js
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses52 = (ownerState) => {
  const {
    classes,
    inset,
    primary,
    secondary,
    dense
  } = ownerState;
  const slots = {
    root: ["root", inset && "inset", dense && "dense", primary && secondary && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  };
  return composeClasses(slots, getListItemTextUtilityClass, classes);
};
var ListItemTextRoot = styled_default("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${listItemTextClasses_default.primary}`]: styles4.primary
    }, {
      [`& .${listItemTextClasses_default.secondary}`]: styles4.secondary
    }, styles4.root, ownerState.inset && styles4.inset, ownerState.primary && ownerState.secondary && styles4.multiline, ownerState.dense && styles4.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${typographyClasses_default.root}:where(& .${listItemTextClasses_default.primary})`]: {
    display: "block"
  },
  [`.${typographyClasses_default.root}:where(& .${listItemTextClasses_default.secondary})`]: {
    display: "block"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.primary && ownerState.secondary,
    style: {
      marginTop: 6,
      marginBottom: 6
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.inset,
    style: {
      paddingLeft: 56
    }
  }]
});
var ListItemText = React129.forwardRef(function ListItemText2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiListItemText"
  });
  const {
    children: children2,
    className,
    disableTypography = false,
    inset = false,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const {
    dense
  } = React129.useContext(ListContext_default);
  let primary = primaryProp != null ? primaryProp : children2;
  let secondary = secondaryProp;
  const ownerState = {
    ...props,
    disableTypography,
    inset,
    primary: !!primary,
    secondary: !!secondary,
    dense
  };
  const classes = useUtilityClasses52(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      primary: primaryTypographyProps,
      secondary: secondaryTypographyProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    className: clsx_default(classes.root, className),
    elementType: ListItemTextRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    ref
  });
  const [PrimarySlot, primarySlotProps] = useSlot("primary", {
    className: classes.primary,
    elementType: Typography_default,
    externalForwardedProps,
    ownerState
  });
  const [SecondarySlot, secondarySlotProps] = useSlot("secondary", {
    className: classes.secondary,
    elementType: Typography_default,
    externalForwardedProps,
    ownerState
  });
  if (primary != null && primary.type !== Typography_default && !disableTypography) {
    primary = (0, import_jsx_runtime77.jsx)(PrimarySlot, {
      variant: dense ? "body2" : "body1",
      component: (primarySlotProps == null ? void 0 : primarySlotProps.variant) ? void 0 : "span",
      ...primarySlotProps,
      children: primary
    });
  }
  if (secondary != null && secondary.type !== Typography_default && !disableTypography) {
    secondary = (0, import_jsx_runtime77.jsx)(SecondarySlot, {
      variant: "body2",
      color: "textSecondary",
      ...secondarySlotProps,
      children: secondary
    });
  }
  return (0, import_jsx_runtime77.jsxs)(RootSlot, {
    ...rootSlotProps,
    children: [primary, secondary]
  });
});
true ? ListItemText.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Alias for the `primary` prop.
   */
  children: import_prop_types67.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types67.default.object,
  /**
   * @ignore
   */
  className: import_prop_types67.default.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: import_prop_types67.default.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: import_prop_types67.default.bool,
  /**
   * The main content element.
   */
  primary: import_prop_types67.default.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   * @deprecated Use `slotProps.primary` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  primaryTypographyProps: import_prop_types67.default.object,
  /**
   * The secondary content element.
   */
  secondary: import_prop_types67.default.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   * @deprecated Use `slotProps.secondary` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  secondaryTypographyProps: import_prop_types67.default.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types67.default.shape({
    primary: import_prop_types67.default.oneOfType([import_prop_types67.default.func, import_prop_types67.default.object]),
    root: import_prop_types67.default.oneOfType([import_prop_types67.default.func, import_prop_types67.default.object]),
    secondary: import_prop_types67.default.oneOfType([import_prop_types67.default.func, import_prop_types67.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types67.default.shape({
    primary: import_prop_types67.default.elementType,
    root: import_prop_types67.default.elementType,
    secondary: import_prop_types67.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types67.default.oneOfType([import_prop_types67.default.arrayOf(import_prop_types67.default.oneOfType([import_prop_types67.default.func, import_prop_types67.default.object, import_prop_types67.default.bool])), import_prop_types67.default.func, import_prop_types67.default.object])
} : void 0;

// node_modules/@mui/material/esm/MenuItem/menuItemClasses.js
function getMenuItemUtilityClass(slot) {
  return generateUtilityClass("MuiMenuItem", slot);
}
var menuItemClasses = generateUtilityClasses("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
var menuItemClasses_default = menuItemClasses;

// node_modules/@mui/material/esm/MenuItem/MenuItem.js
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
var overridesResolver4 = (props, styles4) => {
  const {
    ownerState
  } = props;
  return [styles4.root, ownerState.dense && styles4.dense, ownerState.divider && styles4.divider, !ownerState.disableGutters && styles4.gutters];
};
var useUtilityClasses53 = (ownerState) => {
  const {
    disabled,
    dense,
    divider,
    disableGutters,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root", dense && "dense", disabled && "disabled", !disableGutters && "gutters", divider && "divider", selected && "selected"]
  };
  const composedClasses = composeClasses(slots, getMenuItemUtilityClass, classes);
  return {
    ...classes,
    ...composedClasses
  };
};
var MenuItemRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: overridesResolver4
})(memoTheme_default(({
  theme
}) => ({
  ...theme.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${menuItemClasses_default.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${menuItemClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${menuItemClasses_default.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${menuItemClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${menuItemClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  [`& + .${dividerClasses_default.root}`]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  [`& + .${dividerClasses_default.inset}`]: {
    marginLeft: 52
  },
  [`& .${listItemTextClasses_default.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${listItemTextClasses_default.inset}`]: {
    paddingLeft: 36
  },
  [`& .${listItemIconClasses_default.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.divider,
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.dense,
    style: {
      [theme.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...theme.typography.body2,
      [`& .${listItemIconClasses_default.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
})));
var MenuItem = React130.forwardRef(function MenuItem2(inProps, ref) {
  const props = useDefaultProps2({
    props: inProps,
    name: "MuiMenuItem"
  });
  const {
    autoFocus = false,
    component = "li",
    dense = false,
    divider = false,
    disableGutters = false,
    focusVisibleClassName,
    role = "menuitem",
    tabIndex: tabIndexProp,
    className,
    ...other
  } = props;
  const context = React130.useContext(ListContext_default);
  const childContext = React130.useMemo(() => ({
    dense: dense || context.dense || false,
    disableGutters
  }), [context.dense, dense, disableGutters]);
  const menuItemRef = React130.useRef(null);
  useEnhancedEffect_default2(() => {
    if (autoFocus) {
      if (menuItemRef.current) {
        menuItemRef.current.focus();
      } else if (true) {
        console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered.");
      }
    }
  }, [autoFocus]);
  const ownerState = {
    ...props,
    dense: childContext.dense,
    divider,
    disableGutters
  };
  const classes = useUtilityClasses53(props);
  const handleRef = useForkRef_default(menuItemRef, ref);
  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== void 0 ? tabIndexProp : -1;
  }
  return (0, import_jsx_runtime78.jsx)(ListContext_default.Provider, {
    value: childContext,
    children: (0, import_jsx_runtime78.jsx)(MenuItemRoot, {
      ref: handleRef,
      role,
      tabIndex,
      component,
      focusVisibleClassName: clsx_default(classes.focusVisible, focusVisibleClassName),
      className: clsx_default(classes.root, className),
      ...other,
      ownerState,
      classes
    })
  });
});
true ? MenuItem.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: import_prop_types68.default.bool,
  /**
   * The content of the component.
   */
  children: import_prop_types68.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types68.default.object,
  /**
   * @ignore
   */
  className: import_prop_types68.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types68.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: import_prop_types68.default.bool,
  /**
   * @ignore
   */
  disabled: import_prop_types68.default.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: import_prop_types68.default.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: import_prop_types68.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types68.default.string,
  /**
   * @ignore
   */
  role: import_prop_types68.default.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: import_prop_types68.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types68.default.oneOfType([import_prop_types68.default.arrayOf(import_prop_types68.default.oneOfType([import_prop_types68.default.func, import_prop_types68.default.object, import_prop_types68.default.bool])), import_prop_types68.default.func, import_prop_types68.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types68.default.number
} : void 0;
var MenuItem_default = MenuItem;

// node_modules/@mui/x-date-pickers/esm/DigitalClock/digitalClockClasses.js
function getDigitalClockUtilityClass(slot) {
  return generateUtilityClass("MuiDigitalClock", slot);
}
var digitalClockClasses = generateUtilityClasses("MuiDigitalClock", ["root", "list", "item"]);

// node_modules/@mui/x-date-pickers/esm/DigitalClock/DigitalClock.js
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
var _excluded28 = ["ampm", "timeStep", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "onChange", "view", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "classes", "disabled", "readOnly", "views", "skipDisabled", "timezone"];
var useUtilityClasses54 = (classes) => {
  const slots = {
    root: ["root"],
    list: ["list"],
    item: ["item"]
  };
  return composeClasses(slots, getDigitalClockUtilityClass, classes);
};
var DigitalClockRoot = styled_default(PickerViewRoot, {
  name: "MuiDigitalClock",
  slot: "Root"
})({
  overflowY: "auto",
  width: "100%",
  scrollbarWidth: "thin",
  "@media (prefers-reduced-motion: no-preference)": {
    scrollBehavior: "auto"
  },
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT,
  variants: [{
    props: {
      hasDigitalClockAlreadyBeenRendered: true
    },
    style: {
      "@media (prefers-reduced-motion: no-preference)": {
        scrollBehavior: "smooth"
      }
    }
  }]
});
var DigitalClockList = styled_default(MenuList_default, {
  name: "MuiDigitalClock",
  slot: "List"
})({
  padding: 0
});
var DigitalClockItem = styled_default(MenuItem_default, {
  name: "MuiDigitalClock",
  slot: "Item",
  shouldForwardProp: (prop) => prop !== "itemValue" && prop !== "formattedValue"
})(({
  theme
}) => ({
  padding: "8px 16px",
  margin: "2px 4px",
  "&:first-of-type": {
    marginTop: 4
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  "&.Mui-selected": {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    "&:focus-visible, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
var DigitalClock = React131.forwardRef(function DigitalClock2(inProps, ref) {
  const utils = useUtils();
  const containerRef = React131.useRef(null);
  const handleRef = useForkRef(ref, containerRef);
  const listRef = React131.useRef(null);
  const props = useThemeProps({
    props: inProps,
    name: "MuiDigitalClock"
  });
  const {
    ampm = utils.is12HourCycleInCurrentLocale(),
    timeStep = 30,
    autoFocus,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableTime,
    onChange,
    view: inView,
    openTo,
    onViewChange,
    focusedView,
    onFocusedViewChange,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    views = ["hours"],
    skipDisabled = false,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded28);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = useControlledValue({
    name: "DigitalClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const translations = usePickerTranslations();
  const now = useNow(timezone);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    hasDigitalClockAlreadyBeenRendered: !!containerRef.current
  });
  const classes = useUtilityClasses54(classesProp);
  const ClockItem = (slots == null ? void 0 : slots.digitalClockItem) ?? DigitalClockItem;
  const clockItemProps = useSlotProps_default({
    elementType: ClockItem,
    externalSlotProps: slotProps == null ? void 0 : slotProps.digitalClockItem,
    ownerState,
    className: classes.item
  });
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    utils,
    props,
    timezone
  });
  const handleValueChange = useEventCallback_default((newValue) => handleRawValueChange(newValue, "finish", "hours"));
  const {
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const handleItemSelect = useEventCallback_default((newValue) => {
    setValueAndGoToNextView(newValue, "finish");
  });
  useEnhancedEffect_default(() => {
    if (containerRef.current === null) {
      return;
    }
    const activeItem = containerRef.current.querySelector('[role="listbox"] [role="option"][tabindex="0"], [role="listbox"] [role="option"][aria-selected="true"]');
    if (!activeItem) {
      return;
    }
    const offsetTop = activeItem.offsetTop;
    if (autoFocus || !!focusedView) {
      activeItem.focus();
    }
    containerRef.current.scrollTop = offsetTop - 4;
  });
  const isTimeDisabled = React131.useCallback((valueToCheck) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
    const containsValidTime = () => {
      if (minTime && isAfter(minTime, valueToCheck)) {
        return false;
      }
      if (maxTime && isAfter(valueToCheck, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(valueToCheck, now)) {
        return false;
      }
      if (disablePast && isAfter(now, valueToCheck)) {
        return false;
      }
      return true;
    };
    const isValidValue = () => {
      if (utils.getMinutes(valueToCheck) % minutesStep !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        return !shouldDisableTime(valueToCheck, "hours");
      }
      return true;
    };
    return !containsValidTime() || !isValidValue();
  }, [disableIgnoringDatePartForTimeValidation, utils, minTime, maxTime, disableFuture, now, disablePast, minutesStep, shouldDisableTime]);
  const timeOptions = React131.useMemo(() => {
    const result = [];
    const startOfDay = utils.startOfDay(valueOrReferenceDate);
    let nextTimeStepOption = startOfDay;
    while (utils.isSameDay(valueOrReferenceDate, nextTimeStepOption)) {
      result.push(nextTimeStepOption);
      nextTimeStepOption = utils.addMinutes(nextTimeStepOption, timeStep);
    }
    return result;
  }, [valueOrReferenceDate, timeStep, utils]);
  const focusedOptionIndex = timeOptions.findIndex((option) => utils.isEqual(option, valueOrReferenceDate));
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "PageUp": {
        const newIndex = getFocusedListItemIndex(listRef.current) - 5;
        const children2 = listRef.current.children;
        const newFocusedIndex = Math.max(0, newIndex);
        const childToFocus = children2[newFocusedIndex];
        if (childToFocus) {
          childToFocus.focus();
        }
        event.preventDefault();
        break;
      }
      case "PageDown": {
        const newIndex = getFocusedListItemIndex(listRef.current) + 5;
        const children2 = listRef.current.children;
        const newFocusedIndex = Math.min(children2.length - 1, newIndex);
        const childToFocus = children2[newFocusedIndex];
        if (childToFocus) {
          childToFocus.focus();
        }
        event.preventDefault();
        break;
      }
      default:
    }
  };
  return (0, import_jsx_runtime79.jsx)(DigitalClockRoot, _extends({
    ref: handleRef,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: (0, import_jsx_runtime79.jsx)(DigitalClockList, {
      ref: listRef,
      role: "listbox",
      "aria-label": translations.timePickerToolbarTitle,
      className: classes.list,
      onKeyDown: handleKeyDown,
      children: timeOptions.map((option, index) => {
        const optionDisabled = isTimeDisabled(option);
        if (skipDisabled && optionDisabled) {
          return null;
        }
        const isSelected = utils.isEqual(option, value);
        const formattedValue = utils.format(option, ampm ? "fullTime12h" : "fullTime24h");
        const isFocused = focusedOptionIndex === index || focusedOptionIndex === -1 && index === 0;
        const tabIndex = isFocused ? 0 : -1;
        return (0, import_jsx_runtime79.jsx)(ClockItem, _extends({
          onClick: () => !readOnly && handleItemSelect(option),
          selected: isSelected,
          disabled: disabled || optionDisabled,
          disableRipple: readOnly,
          role: "option",
          "aria-disabled": readOnly,
          "aria-selected": isSelected,
          tabIndex,
          itemValue: option,
          formattedValue
        }, clockItemProps, {
          children: formattedValue
        }), `${option.valueOf()}-${formattedValue}`);
      })
    })
  }));
});
if (true) DigitalClock.displayName = "DigitalClock";
true ? DigitalClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types69.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types69.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types69.default.object,
  className: import_prop_types69.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types69.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types69.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types69.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types69.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types69.default.bool,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types69.default.oneOf(["hours"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types69.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types69.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types69.default.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types69.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types69.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types69.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types69.default.oneOf(["hours"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types69.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: import_prop_types69.default.object,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types69.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types69.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types69.default.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: import_prop_types69.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types69.default.oneOfType([import_prop_types69.default.arrayOf(import_prop_types69.default.oneOfType([import_prop_types69.default.func, import_prop_types69.default.object, import_prop_types69.default.bool])), import_prop_types69.default.func, import_prop_types69.default.object]),
  /**
   * The time steps between two time options.
   * For example, if `timeStep = 45`, then the available time options will be `[00:00, 00:45, 01:30, 02:15, 03:00, etc.]`.
   * @default 30
   */
  timeStep: import_prop_types69.default.number,
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types69.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types69.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types69.default.oneOf(["hours"]),
  /**
   * Available views.
   * @default ['hours']
   */
  views: import_prop_types69.default.arrayOf(import_prop_types69.default.oneOf(["hours"]))
} : void 0;

// node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/MultiSectionDigitalClock.js
var React133 = __toESM(require_react(), 1);
var import_prop_types70 = __toESM(require_prop_types(), 1);

// node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/multiSectionDigitalClockClasses.js
function getMultiSectionDigitalClockUtilityClass(slot) {
  return generateUtilityClass("MuiMultiSectionDigitalClock", slot);
}
var multiSectionDigitalClockClasses = generateUtilityClasses("MuiMultiSectionDigitalClock", ["root"]);

// node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/MultiSectionDigitalClockSection.js
var React132 = __toESM(require_react(), 1);

// node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/multiSectionDigitalClockSectionClasses.js
function getMultiSectionDigitalClockSectionUtilityClass(slot) {
  return generateUtilityClass("MuiMultiSectionDigitalClockSection", slot);
}
var multiSectionDigitalClockSectionClasses = generateUtilityClasses("MuiMultiSectionDigitalClockSection", ["root", "item"]);

// node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/MultiSectionDigitalClockSection.js
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var _excluded29 = ["autoFocus", "onChange", "className", "classes", "disabled", "readOnly", "items", "active", "slots", "slotProps", "skipDisabled"];
var useUtilityClasses55 = (classes) => {
  const slots = {
    root: ["root"],
    item: ["item"]
  };
  return composeClasses(slots, getMultiSectionDigitalClockSectionUtilityClass, classes);
};
var MultiSectionDigitalClockSectionRoot = styled_default(MenuList_default, {
  name: "MuiMultiSectionDigitalClockSection",
  slot: "Root"
})(({
  theme
}) => ({
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT,
  width: 56,
  padding: 0,
  overflow: "hidden",
  scrollbarWidth: "thin",
  "@media (prefers-reduced-motion: no-preference)": {
    scrollBehavior: "auto"
  },
  "@media (pointer: fine)": {
    "&:hover": {
      overflowY: "auto"
    }
  },
  "@media (pointer: none), (pointer: coarse)": {
    overflowY: "auto"
  },
  "&:not(:first-of-type)": {
    borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
  },
  "&::after": {
    display: "block",
    content: '""',
    // subtracting the height of one item, extra margin and borders to make sure the max height is correct
    height: "calc(100% - 40px - 6px)"
  },
  variants: [{
    props: {
      hasDigitalClockAlreadyBeenRendered: true
    },
    style: {
      "@media (prefers-reduced-motion: no-preference)": {
        scrollBehavior: "smooth"
      }
    }
  }]
}));
var MultiSectionDigitalClockSectionItem = styled_default(MenuItem_default, {
  name: "MuiMultiSectionDigitalClockSection",
  slot: "Item"
})(({
  theme
}) => ({
  padding: 8,
  margin: "2px 4px",
  width: MULTI_SECTION_CLOCK_SECTION_WIDTH,
  justifyContent: "center",
  "&:first-of-type": {
    marginTop: 4
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  "&.Mui-selected": {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    "&:focus-visible, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
var MultiSectionDigitalClockSection = React132.forwardRef(function MultiSectionDigitalClockSection2(inProps, ref) {
  const containerRef = React132.useRef(null);
  const handleRef = useForkRef(ref, containerRef);
  const previousActive = React132.useRef(null);
  const props = useThemeProps({
    props: inProps,
    name: "MuiMultiSectionDigitalClockSection"
  });
  const {
    autoFocus,
    onChange,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    items,
    active,
    slots,
    slotProps,
    skipDisabled
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded29);
  const {
    ownerState: pickerOwnerState
  } = usePickerPrivateContext();
  const ownerState = _extends({}, pickerOwnerState, {
    hasDigitalClockAlreadyBeenRendered: !!containerRef.current
  });
  const classes = useUtilityClasses55(classesProp);
  const DigitalClockSectionItem = (slots == null ? void 0 : slots.digitalClockSectionItem) ?? MultiSectionDigitalClockSectionItem;
  useEnhancedEffect_default(() => {
    if (containerRef.current === null) {
      return;
    }
    const activeItem = containerRef.current.querySelector('[role="option"][tabindex="0"], [role="option"][aria-selected="true"]');
    if (active && autoFocus && activeItem) {
      activeItem.focus();
    }
    if (!activeItem || previousActive.current === activeItem) {
      return;
    }
    previousActive.current = activeItem;
    const offsetTop = activeItem.offsetTop;
    containerRef.current.scrollTop = offsetTop - 4;
  });
  const focusedOptionIndex = items.findIndex((item) => item.isFocused(item.value));
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "PageUp": {
        const newIndex = getFocusedListItemIndex(containerRef.current) - 5;
        const children2 = containerRef.current.children;
        const newFocusedIndex = Math.max(0, newIndex);
        const childToFocus = children2[newFocusedIndex];
        if (childToFocus) {
          childToFocus.focus();
        }
        event.preventDefault();
        break;
      }
      case "PageDown": {
        const newIndex = getFocusedListItemIndex(containerRef.current) + 5;
        const children2 = containerRef.current.children;
        const newFocusedIndex = Math.min(children2.length - 1, newIndex);
        const childToFocus = children2[newFocusedIndex];
        if (childToFocus) {
          childToFocus.focus();
        }
        event.preventDefault();
        break;
      }
      default:
    }
  };
  return (0, import_jsx_runtime80.jsx)(MultiSectionDigitalClockSectionRoot, _extends({
    ref: handleRef,
    className: clsx_default(classes.root, className),
    ownerState,
    autoFocusItem: autoFocus && active,
    role: "listbox",
    onKeyDown: handleKeyDown
  }, other, {
    children: items.map((option, index) => {
      var _a;
      const isItemDisabled = (_a = option.isDisabled) == null ? void 0 : _a.call(option, option.value);
      const isDisabled = disabled || isItemDisabled;
      if (skipDisabled && isDisabled) {
        return null;
      }
      const isSelected = option.isSelected(option.value);
      const tabIndex = focusedOptionIndex === index || focusedOptionIndex === -1 && index === 0 ? 0 : -1;
      return (0, import_jsx_runtime80.jsx)(DigitalClockSectionItem, _extends({
        onClick: () => !readOnly && onChange(option.value),
        selected: isSelected,
        disabled: isDisabled,
        disableRipple: readOnly,
        role: "option",
        "aria-disabled": readOnly || isDisabled || void 0,
        "aria-label": option.ariaLabel,
        "aria-selected": isSelected,
        tabIndex,
        className: classes.item
      }, slotProps == null ? void 0 : slotProps.digitalClockSectionItem, {
        children: option.label
      }), option.label);
    })
  }));
});
if (true) MultiSectionDigitalClockSection.displayName = "MultiSectionDigitalClockSection";

// node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/MultiSectionDigitalClock.utils.js
var getHourSectionOptions = ({
  now,
  value,
  utils,
  ampm,
  isDisabled,
  resolveAriaLabel,
  timeStep,
  valueOrReferenceDate
}) => {
  const currentHours = value ? utils.getHours(value) : null;
  const result = [];
  const isSelected = (hour, overriddenCurrentHours) => {
    const resolvedCurrentHours = overriddenCurrentHours ?? currentHours;
    if (resolvedCurrentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return resolvedCurrentHours === 12 || resolvedCurrentHours === 0;
      }
      return resolvedCurrentHours === hour || resolvedCurrentHours - 12 === hour;
    }
    return resolvedCurrentHours === hour;
  };
  const isFocused = (hour) => {
    return isSelected(hour, utils.getHours(valueOrReferenceDate));
  };
  const endHour = ampm ? 11 : 23;
  for (let hour = 0; hour <= endHour; hour += timeStep) {
    let label = utils.format(utils.setHours(now, hour), ampm ? "hours12h" : "hours24h");
    const ariaLabel = resolveAriaLabel(parseInt(label, 10).toString());
    label = utils.formatNumber(label);
    result.push({
      value: hour,
      label,
      isSelected,
      isDisabled,
      isFocused,
      ariaLabel
    });
  }
  return result;
};
var getTimeSectionOptions = ({
  value,
  utils,
  isDisabled,
  timeStep,
  resolveLabel,
  resolveAriaLabel,
  hasValue: hasValue2 = true
}) => {
  const isSelected = (timeValue) => {
    if (value === null) {
      return false;
    }
    return hasValue2 && value === timeValue;
  };
  const isFocused = (timeValue) => {
    return value === timeValue;
  };
  return [...Array.from({
    length: Math.ceil(60 / timeStep)
  }, (_, index) => {
    const timeValue = timeStep * index;
    return {
      value: timeValue,
      label: utils.formatNumber(resolveLabel(timeValue)),
      isDisabled,
      isSelected,
      isFocused,
      ariaLabel: resolveAriaLabel(timeValue.toString())
    };
  })];
};

// node_modules/@mui/x-date-pickers/esm/MultiSectionDigitalClock/MultiSectionDigitalClock.js
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var _excluded30 = ["ampm", "timeSteps", "autoFocus", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableTime", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "classes", "disabled", "readOnly", "skipDisabled", "timezone"];
var useUtilityClasses56 = (classes) => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMultiSectionDigitalClockUtilityClass, classes);
};
var MultiSectionDigitalClockRoot = styled_default(PickerViewRoot, {
  name: "MuiMultiSectionDigitalClock",
  slot: "Root"
})(({
  theme
}) => ({
  flexDirection: "row",
  width: "100%",
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
}));
var MultiSectionDigitalClock = React133.forwardRef(function MultiSectionDigitalClock2(inProps, ref) {
  const utils = useUtils();
  const isRtl = useRtl();
  const props = useThemeProps({
    props: inProps,
    name: "MuiMultiSectionDigitalClock"
  });
  const {
    ampm = utils.is12HourCycleInCurrentLocale(),
    timeSteps: inTimeSteps,
    autoFocus,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableTime,
    onChange,
    view: inView,
    views: inViews = ["hours", "minutes"],
    openTo,
    onViewChange,
    focusedView: inFocusedView,
    onFocusedViewChange,
    className,
    classes: classesProp,
    disabled,
    readOnly,
    skipDisabled = false,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded30);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = useControlledValue({
    name: "MultiSectionDigitalClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const translations = usePickerTranslations();
  const now = useNow(timezone);
  const timeSteps = React133.useMemo(() => _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, inTimeSteps), [inTimeSteps]);
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    utils,
    props,
    timezone
  });
  const handleValueChange = useEventCallback_default((newValue, selectionState, selectedView) => handleRawValueChange(newValue, selectionState, selectedView));
  const views = React133.useMemo(() => {
    if (!ampm || !inViews.includes("hours")) {
      return inViews;
    }
    return inViews.includes("meridiem") ? inViews : [...inViews, "meridiem"];
  }, [ampm, inViews]);
  const {
    view,
    setValueAndGoToNextView,
    focusedView
  } = useViews({
    view: inView,
    views,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const handleMeridiemValueChange = useEventCallback_default((newValue) => {
    setValueAndGoToNextView(newValue, "finish", "meridiem");
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(valueOrReferenceDate, ampm, handleMeridiemValueChange, "finish");
  const isTimeDisabled = React133.useCallback((rawValue, viewType) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
    const shouldCheckPastEnd = viewType === "hours" || viewType === "minutes" && views.includes("seconds");
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case "hours":
            return !shouldDisableTime(utils.setHours(valueOrReferenceDate, timeValue), "hours");
          case "minutes":
            return !shouldDisableTime(utils.setMinutes(valueOrReferenceDate, timeValue), "minutes");
          case "seconds":
            return !shouldDisableTime(utils.setSeconds(valueOrReferenceDate, timeValue), "seconds");
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case "hours": {
        const valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
        const dateWithNewHours = utils.setHours(valueOrReferenceDate, valueWithMeridiem);
        if (utils.getHours(dateWithNewHours) !== valueWithMeridiem) {
          return true;
        }
        const start = utils.setSeconds(utils.setMinutes(dateWithNewHours, 0), 0);
        const end = utils.setSeconds(utils.setMinutes(dateWithNewHours, 59), 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(valueWithMeridiem);
      }
      case "minutes": {
        const dateWithNewMinutes = utils.setMinutes(valueOrReferenceDate, rawValue);
        const start = utils.setSeconds(dateWithNewMinutes, 0);
        const end = utils.setSeconds(dateWithNewMinutes, 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue, minutesStep);
      }
      case "seconds": {
        const dateWithNewSeconds = utils.setSeconds(valueOrReferenceDate, rawValue);
        const start = dateWithNewSeconds;
        const end = dateWithNewSeconds;
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue);
      }
      default:
        throw new Error("not supported");
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableTime, utils, disableFuture, disablePast, now, views]);
  const buildViewProps = React133.useCallback((viewToBuild) => {
    switch (viewToBuild) {
      case "hours": {
        return {
          onChange: (hours) => {
            const valueWithMeridiem = convertValueToMeridiem(hours, meridiemMode, ampm);
            setValueAndGoToNextView(utils.setHours(valueOrReferenceDate, valueWithMeridiem), "finish", "hours");
          },
          items: getHourSectionOptions({
            now,
            value,
            ampm,
            utils,
            isDisabled: (hours) => isTimeDisabled(hours, "hours"),
            timeStep: timeSteps.hours,
            resolveAriaLabel: translations.hoursClockNumberText,
            valueOrReferenceDate
          })
        };
      }
      case "minutes": {
        return {
          onChange: (minutes) => {
            setValueAndGoToNextView(utils.setMinutes(valueOrReferenceDate, minutes), "finish", "minutes");
          },
          items: getTimeSectionOptions({
            value: utils.getMinutes(valueOrReferenceDate),
            utils,
            isDisabled: (minutes) => isTimeDisabled(minutes, "minutes"),
            resolveLabel: (minutes) => utils.format(utils.setMinutes(now, minutes), "minutes"),
            timeStep: timeSteps.minutes,
            hasValue: !!value,
            resolveAriaLabel: translations.minutesClockNumberText
          })
        };
      }
      case "seconds": {
        return {
          onChange: (seconds) => {
            setValueAndGoToNextView(utils.setSeconds(valueOrReferenceDate, seconds), "finish", "seconds");
          },
          items: getTimeSectionOptions({
            value: utils.getSeconds(valueOrReferenceDate),
            utils,
            isDisabled: (seconds) => isTimeDisabled(seconds, "seconds"),
            resolveLabel: (seconds) => utils.format(utils.setSeconds(now, seconds), "seconds"),
            timeStep: timeSteps.seconds,
            hasValue: !!value,
            resolveAriaLabel: translations.secondsClockNumberText
          })
        };
      }
      case "meridiem": {
        const amLabel = formatMeridiem(utils, "am");
        const pmLabel = formatMeridiem(utils, "pm");
        return {
          onChange: handleMeridiemChange,
          items: [{
            value: "am",
            label: amLabel,
            isSelected: () => !!value && meridiemMode === "am",
            isFocused: () => !!valueOrReferenceDate && meridiemMode === "am",
            ariaLabel: amLabel
          }, {
            value: "pm",
            label: pmLabel,
            isSelected: () => !!value && meridiemMode === "pm",
            isFocused: () => !!valueOrReferenceDate && meridiemMode === "pm",
            ariaLabel: pmLabel
          }]
        };
      }
      default:
        throw new Error(`Unknown view: ${viewToBuild} found.`);
    }
  }, [now, value, ampm, utils, timeSteps.hours, timeSteps.minutes, timeSteps.seconds, translations.hoursClockNumberText, translations.minutesClockNumberText, translations.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, valueOrReferenceDate, isTimeDisabled, handleMeridiemChange]);
  const viewsToRender = React133.useMemo(() => {
    if (!isRtl) {
      return views;
    }
    const digitViews = views.filter((v) => v !== "meridiem");
    digitViews.reverse();
    if (views.includes("meridiem")) {
      digitViews.push("meridiem");
    }
    return digitViews;
  }, [isRtl, views]);
  const viewTimeOptions = React133.useMemo(() => {
    return views.reduce((result, currentView) => {
      return _extends({}, result, {
        [currentView]: buildViewProps(currentView)
      });
    }, {});
  }, [views, buildViewProps]);
  const {
    ownerState
  } = usePickerPrivateContext();
  const classes = useUtilityClasses56(classesProp);
  return (0, import_jsx_runtime81.jsx)(MultiSectionDigitalClockRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState,
    role: "group"
  }, other, {
    children: viewsToRender.map((timeView) => (0, import_jsx_runtime81.jsx)(MultiSectionDigitalClockSection, {
      items: viewTimeOptions[timeView].items,
      onChange: viewTimeOptions[timeView].onChange,
      active: view === timeView,
      autoFocus: autoFocus || focusedView === timeView,
      disabled,
      readOnly,
      slots,
      slotProps,
      skipDisabled,
      "aria-label": translations.selectViewText(timeView)
    }, timeView))
  }));
});
if (true) MultiSectionDigitalClock.displayName = "MultiSectionDigitalClock";
true ? MultiSectionDigitalClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types70.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types70.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types70.default.object,
  className: import_prop_types70.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types70.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types70.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types70.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types70.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types70.default.bool,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types70.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types70.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types70.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types70.default.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types70.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types70.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types70.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types70.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types70.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: import_prop_types70.default.object,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types70.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types70.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types70.default.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: import_prop_types70.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types70.default.oneOfType([import_prop_types70.default.arrayOf(import_prop_types70.default.oneOfType([import_prop_types70.default.func, import_prop_types70.default.object, import_prop_types70.default.bool])), import_prop_types70.default.func, import_prop_types70.default.object]),
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types70.default.shape({
    hours: import_prop_types70.default.number,
    minutes: import_prop_types70.default.number,
    seconds: import_prop_types70.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types70.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types70.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types70.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Available views.
   * @default ['hours', 'minutes']
   */
  views: import_prop_types70.default.arrayOf(import_prop_types70.default.oneOf(["hours", "meridiem", "minutes", "seconds"]).isRequired)
} : void 0;

// node_modules/@mui/x-date-pickers/esm/timeViewRenderers/timeViewRenderers.js
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
var renderTimeViewClock = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  ampmInClock,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
  timezone
}) => (0, import_jsx_runtime82.jsx)(TimeClock, {
  view,
  onViewChange,
  focusedView: focusedView && isTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  views: views.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  ampmInClock,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
  timezone
});
if (true) renderTimeViewClock.displayName = "renderTimeViewClock";
var renderDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => (0, import_jsx_runtime82.jsx)(DigitalClock, {
  view,
  onViewChange,
  focusedView: focusedView && isTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  views: views.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeStep: timeSteps == null ? void 0 : timeSteps.minutes,
  skipDisabled,
  timezone
});
if (true) renderDigitalClockTimeView.displayName = "renderDigitalClockTimeView";
var renderMultiSectionDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => (0, import_jsx_runtime82.jsx)(MultiSectionDigitalClock, {
  view,
  onViewChange,
  focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  views: views.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
});
if (true) renderMultiSectionDigitalClockTimeView.displayName = "renderMultiSectionDigitalClockTimeView";

// node_modules/@mui/x-date-pickers/esm/MobileTimePicker/MobileTimePicker.js
var MobileTimePicker = React135.forwardRef(function MobileTimePicker2(inProps, ref) {
  var _a;
  const utils = useUtils();
  const defaultizedProps = useTimePickerDefaultizedProps(inProps, "MuiMobileTimePicker");
  const viewRenderers = _extends({
    hours: renderTimeViewClock,
    minutes: renderTimeViewClock,
    seconds: renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const ampmInClock = defaultizedProps.ampmInClock ?? false;
  const props = _extends({}, defaultizedProps, {
    ampmInClock,
    viewRenderers,
    format: resolveTimeFormat(utils, defaultizedProps),
    slots: _extends({
      field: TimeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _a2;
        return _extends({}, resolveComponentProps_default((_a2 = defaultizedProps.slotProps) == null ? void 0 : _a2.field, ownerState), extractValidationProps(defaultizedProps));
      },
      toolbar: _extends({
        hidden: false,
        ampmInClock
      }, (_a = defaultizedProps.slotProps) == null ? void 0 : _a.toolbar)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    ref,
    props,
    valueManager: singleItemValueManager,
    valueType: "time",
    validator: validateTime,
    steps: null
  });
  return renderPicker();
});
if (true) MobileTimePicker.displayName = "MobileTimePicker";
MobileTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default utils.is12HourCycleInCurrentLocale()
   */
  ampm: import_prop_types71.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types71.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types71.default.bool,
  className: import_prop_types71.default.string,
  /**
   * If `true`, the Picker will close after submitting the full date.
   * @default false
   */
  closeOnSelect: import_prop_types71.default.bool,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types71.default.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: import_prop_types71.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types71.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types71.default.bool,
  /**
   * If `true`, the button to open the Picker will not be rendered (it will only render the field).
   * @deprecated Use the [field component](https://mui.com/x/react-date-pickers/fields/) instead.
   * @default false
   */
  disableOpenPicker: import_prop_types71.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types71.default.bool,
  /**
   * @default true
   */
  enableAccessibleFieldDOMStructure: import_prop_types71.default.any,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types71.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types71.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types71.default.node,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types71.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types71.default.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types71.default.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types71.default.number,
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: import_prop_types71.default.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: import_prop_types71.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types71.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types71.default.func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: import_prop_types71.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types71.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types71.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types71.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types71.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types71.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types71.default.oneOf(["landscape", "portrait"]),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: import_prop_types71.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types71.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types71.default.object,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types71.default.oneOfType([import_prop_types71.default.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types71.default.number]),
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types71.default.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types71.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types71.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types71.default.oneOfType([import_prop_types71.default.arrayOf(import_prop_types71.default.oneOfType([import_prop_types71.default.func, import_prop_types71.default.object, import_prop_types71.default.bool])), import_prop_types71.default.func, import_prop_types71.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types71.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types71.default.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types71.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: import_prop_types71.default.shape({
    hours: import_prop_types71.default.func,
    minutes: import_prop_types71.default.func,
    seconds: import_prop_types71.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types71.default.arrayOf(import_prop_types71.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
};
export {
  MobileTimePicker
};
//# sourceMappingURL=@mui_x-date-pickers_MobileTimePicker.js.map
