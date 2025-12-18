import { useState } from "react";

function Wizard() {
  const [formData, setFormData] = useState({ email: "", password: "", confirmPwd: "" });
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear the error box as soon as user types again
    if (showError) setShowError(false);
  };

  const isEmailValid = formData.email.includes("@");
  const isPwdValid = formData.password.length > 8;
  const isMatch = formData.password === formData.confirmPwd && formData.password !== "";

  const isFormValid = isEmailValid && isPwdValid && isMatch;

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault(); // Always prevent reload first

    if (!isFormValid) {
      setShowError(true);
    } else {
      alert("Form Submitted!");
    }
  };

  return (
    <div className="p-10 flex flex-col gap-4 max-w-md mx-auto">

      {/* ERROR BOX */}
      {showError && (
        <div className="bg-red-600 text-white font-bold p-4 border-4 border-red-900">
          DOOFUS: Fix errors
          {!isEmailValid && <div>- Invalid Email</div>}
          {!isPwdValid && <div>- Password too short</div>}
          {!isMatch && <div>- Passwords do not match</div>}
        </div>
      )}

      <form className="flex flex-col gap-2 border p-4 bg-gray-100">
        <label>Email</label>
        <input
          name="email" // MATCHES STATE KEY
          value={formData.email}
          type="email"
          onChange={handleChange}
          className="border p-1"
        />

        <label>Password</label>
        <input
          name="password" // MATCHES STATE KEY
          value={formData.password}
          type="password"
          onChange={handleChange}
          className="border p-1"
        />

        <label>Confirm Password</label>
        <input
          name="confirmPwd" // MATCHES STATE KEY
          value={formData.confirmPwd}
          type="password"
          onChange={handleChange}
          className={`border p-1 ${!isMatch && formData.confirmPwd ? "bg-red-100" : ""}`}
        />

        {/* We disable the button using derived state.
           Note: If you disable the button, onClick won't fire, 
           so 'showError' logic only works if you enable the button 
           but block the logic inside handleSubmit. 
           
           For this challenge, I'll leave it enabled so you can see the "DOOFUS" box.
        */}
        <button
          type="submit"
          className={`mt-4 p-2 font-bold text-white ${isFormValid ? "bg-green-600" : "bg-gray-400"}`}
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
export default Wizard;
