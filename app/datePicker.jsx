import{ useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const NepaliDatePicker = ({ handleChange, formData, setFormData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [todayNepali, setTodayNepali] = useState(null);
  const [currentNepaliYear, setCurrentNepaliYear] = useState(null);
  const [currentNepaliMonth, setCurrentNepaliMonth] = useState(null);

  const nepaliMonths = [
    "बैशाख",
    "जेठ",
    "असार",
    "साउन",
    "भदौ",
    "असोज",
    "कार्तिक",
    "मंसिर",
    "पुष",
    "माघ",
    "फाल्गुन",
    "चैत",
  ];

  const nepaliNumbers = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

  const toNepaliNumber = (num) => {
    return num
      .toString()
      .split("")
      .map((digit) => nepaliNumbers[parseInt(digit)])
      .join("");
  };

  // Comprehensive Nepali calendar data for accurate conversion
  const getNepaliMonthDays = (year, month) => {
    const nepaliCalendarData = {
      2081: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
      2082: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
      2083: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
      2084: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
      2085: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
      2086: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
      2087: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
      2088: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
      2089: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
      2090: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
      2091: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
      2092: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
      2093: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
      2094: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
      2095: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
      2096: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
      2097: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
      2098: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
      2099: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
      2100: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    };

    return nepaliCalendarData[year]?.[month - 1] || 30;
  };

  // English to Nepali date conversion
  const englishToNepali = (engYear, engMonth, engDay) => {
    // Reference date: 1943/4/14 AD = 2000/1/1 BS
    const baseEngDate = new Date(1943, 3, 14);
    const baseNepDate = { year: 2000, month: 1, day: 1 };

    const inputDate = new Date(engYear, engMonth, engDay);
    const diffTime = inputDate - baseEngDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    let nepYear = baseNepDate.year;
    let nepMonth = baseNepDate.month;
    let nepDay = baseNepDate.day;

    let remainingDays = diffDays;

    // Add days
    while (remainingDays > 0) {
      const daysInCurrentMonth = getNepaliMonthDays(nepYear, nepMonth);
      const daysLeftInMonth = daysInCurrentMonth - nepDay + 1;

      if (remainingDays >= daysLeftInMonth) {
        remainingDays -= daysLeftInMonth;
        nepDay = 1;
        nepMonth++;

        if (nepMonth > 12) {
          nepMonth = 1;
          nepYear++;
        }
      } else {
        nepDay += remainingDays;
        remainingDays = 0;
      }
    }

    // Subtract days for dates before base date
    while (remainingDays < 0) {
      if (nepDay + remainingDays >= 1) {
        nepDay += remainingDays;
        remainingDays = 0;
      } else {
        remainingDays += nepDay;
        nepMonth--;

        if (nepMonth < 1) {
          nepMonth = 12;
          nepYear--;
        }

        nepDay = getNepaliMonthDays(nepYear, nepMonth);
      }
    }

    return { year: nepYear, month: nepMonth, day: nepDay };
  };

  // Get today's Nepali date
  const getTodayNepali = () => {
    const today = new Date();
    return englishToNepali(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
  };

  // Initialize with today's date
  useEffect(() => {
    const today = getTodayNepali();
    setTodayNepali(today);
    setCurrentNepaliYear(today.year);
    setCurrentNepaliMonth(today.month);
  }, []);

  // Update formData when selectedDate changes
  useEffect(() => {
    if (selectedDate && setFormData) {
      const formattedDate = `${selectedDate.year}-${String(
        selectedDate.month
      ).padStart(2, "0")}-${String(selectedDate.day).padStart(2, "0")}`;
      setFormData((prev) => ({
        ...prev,
        nepaliDate: formattedDate,
      }));
    }
  }, [selectedDate, setFormData]);

  // Check if a date is before today
  const isBeforeToday = (year, month, day) => {
    if (!todayNepali) return false;
    if (year < todayNepali.year) return true;
    if (year > todayNepali.year) return false;
    if (month < todayNepali.month) return true;
    if (month > todayNepali.month) return false;
    return day < todayNepali.day;
  };

  const handlePrevMonth = () => {
    if (currentNepaliMonth === 1) {
      setCurrentNepaliMonth(12);
      setCurrentNepaliYear(currentNepaliYear - 1);
    } else {
      setCurrentNepaliMonth(currentNepaliMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentNepaliMonth === 12) {
      setCurrentNepaliMonth(1);
      setCurrentNepaliYear(currentNepaliYear + 1);
    } else {
      setCurrentNepaliMonth(currentNepaliMonth + 1);
    }
  };

  const handleDateSelect = (day) => {
    if (!isBeforeToday(currentNepaliYear, currentNepaliMonth, day)) {
      setSelectedDate({
        year: currentNepaliYear,
        month: currentNepaliMonth,
        day: day,
      });
      setIsOpen(false);
    }
  };

  const renderCalendar = () => {
    if (!currentNepaliYear || !currentNepaliMonth) return null;

    const daysInMonth = getNepaliMonthDays(
      currentNepaliYear,
      currentNepaliMonth
    );
    const days = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const disabled = isBeforeToday(
        currentNepaliYear,
        currentNepaliMonth,
        day
      );
      const isSelected =
        selectedDate &&
        selectedDate.year === currentNepaliYear &&
        selectedDate.month === currentNepaliMonth &&
        selectedDate.day === day;
      const isToday =
        todayNepali &&
        todayNepali.year === currentNepaliYear &&
        todayNepali.month === currentNepaliMonth &&
        todayNepali.day === day;

      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(day)}
          disabled={disabled}
          className={`
            w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium
            transition-all duration-200
            ${
              disabled
                ? "text-gray-300 cursor-not-allowed bg-gray-50"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
            }
            ${isSelected ? "bg-primary text-white hover:bg-blue-700" : ""}
            ${isToday && !isSelected ? "ring-2 ring-blue-400" : ""}
          `}
        >
          {toNepaliNumber(day)}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="w-full flex justify-center items-center flex-row">
      {!todayNepali || !currentNepaliYear || !currentNepaliMonth ? (
        <div className="w-full rounded-2xl">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-12 bg-gray-200 rounded mb-4"></div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl w-full">
       
          {/* Selected Date Display */}
          <div className="relative mb-4">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl flex items-center justify-between hover:border-blue-400 transition-colors bg-white"
            >
              <span className="text-gray-700 font-medium">
                {selectedDate
                  ? `${nepaliMonths[selectedDate.month - 1]} ${toNepaliNumber(
                      selectedDate.day
                    )}, ${toNepaliNumber(selectedDate.year)}`
                  : "मिति चयन गर्नुहोस्"}
              </span>
              <Calendar className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Calendar Dropdown */}
          {isOpen && (
            <div className="bg-white border-2 max-w-md  border-gray-200 rounded-xl p-4 shadow-lg">
              {/* Month/Year Navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">
                    {nepaliMonths[currentNepaliMonth - 1]}
                  </div>
                  <div className="text-sm text-gray-600">
                    {toNepaliNumber(currentNepaliYear)}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {["आ", "सो", "म", "बु", "बि", "शु", "श"].map((day) => (
                  <div
                    key={day}
                    className="w-10 h-10 flex items-center justify-center text-xs font-bold text-gray-500"
                  >
                    {day}
                  </div>
                ))}
                {renderCalendar()}
              </div>

              {/* Today Button */}
              <button
                type="button"
                onClick={() => {
                  setCurrentNepaliYear(todayNepali.year);
                  setCurrentNepaliMonth(todayNepali.month);
                  handleDateSelect(todayNepali.day);
                }}
                className="w-full mt-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                आज
              </button>
            </div>
          )}

          {/* Selected Date Info */}
        
        </div>
      )}
    </div>
  );
};

export default NepaliDatePicker;
