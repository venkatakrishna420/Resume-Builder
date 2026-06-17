import { getInputType } from "../utils/commonFunctions/forms";

const Input = ({ item, inputChange, subsectionKey, error }) => {

    const inputType = getInputType(item);

    const handleChange = (value) => {
        console.log(value, item, 'value and item')
        inputChange(value, item, subsectionKey);
    };

    const borderClass = error
        ? "border-red-500 focus:border-red-500 hover:border-red-500"
        : "border-gray-300 hover:border-purple-600 focus:border-purple-600";

    if (item.element === "select") {
        return (
            <div>
                <select
                    value={item.answer || ""}
                    onChange={(e) => handleChange(e.target.value)}
                    className={`w-full px-4 py-2.5 bg-gray-50 border-2 rounded-lg text-black ${borderClass}`}
                >
                    <option value="" disabled>
                        -- Select --
                    </option>

                    {item.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
        );
    }

    if (inputType === "textarea") {
        return (
            <div>
                <textarea
                    value={item.answer || ""}
                    onChange={(e) => handleChange(e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${borderClass}`}
                    rows="4"
                />
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
        );
    }

    return (
        <div>
            <input
                type={inputType}
                value={item.answer || ""}
                onChange={(e) => handleChange(e.target.value)}
                className={`w-full px-4 py-2.5 bg-gray-50 border-2 rounded-lg text-black ${borderClass}`}
                maxLength={item.maxLength}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
};

export default Input;