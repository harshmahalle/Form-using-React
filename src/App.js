import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
   <div className="flex flex-col items-center mt-2">
   <form onSubmit={submitHandler}>

    <label htmlFor="firstName" >First name</label>
    <br/>
    <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="Harsh"
      value={formData.firstName}
      onChange={changeHandler}
      className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-2"
    />

    <br/>
    <label htmlFor="lastName">Last name</label>
    <br/>
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Mahalle"
      value={formData.lastName}
      onChange={changeHandler}
      className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-2"
    />

    <br/>
    <label htmlFor="email">Email Address</label>
    <br/>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="harsh@abcd.com"
      value={formData.email}
      onChange={changeHandler}
      className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-2"
    />

    <br/>
    <label htmlFor="country">Country</label>
    <br/>
    <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-2"
      >

      <option>India</option>
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
    </select>

    <br/>
    <label htmlFor="streetAddress">Street Address</label>
    <br/>
    <input
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="B-25C"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-2"
    />

    <br/>
    <label htmlFor="city">City</label>
    <br/>
    <input
      type="text"
      name="city"
      id="city"
      placeholder="B-25C"
      value={formData.city}
      onChange={changeHandler}
      className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-2"
    />

  <br/>
    <label htmlFor="state">State / Province</label>
    <br/>
    <input
      type="text"
      name="state"
      id="state"
      placeholder="Bihar"
      value={formData.state}
      onChange={changeHandler}
      className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-2"
    />

    <br/>
    <label htmlFor="postalCode">Postal Code</label>
    <br/>
    <input
      type="text"
      name="postalCode"
      id="postalCode"
      placeholder="110077"
      value={formData.postalCode}
      onChange={changeHandler}
      className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-2"
    />

    <br/>
    <br/>

  <fieldset class="border p-4 rounded-md shadow-md">

  <legend class="text-lg font-semibold">By Email</legend>

   <div class="flex items-center mt-4">
    <input
      id="comments"
      name="comments"
      type="checkbox"
      checked={formData.comments}
      onChange={changeHandler}
      class="form-checkbox text-blue-500 focus:outline-none focus:ring focus:border-blue-300"
    />
    <div class="ml-2">
      <label for="comments" class="text-gray-700 font-medium">Comments</label>
      <p class="text-gray-500">Get notified when someone posts a comment on a posting.</p>
    </div>
   </div>

    <div class="flex items-center mt-4">
      <input
      id="candidates"
      name="candidates"
      type="checkbox"
      checked={formData.candidates}
      onChange={changeHandler}
      class="form-checkbox text-blue-500 focus:outline-none focus:ring focus:border-blue-300"
      />
      <div class="ml-2">
      <label for="candidates" class="text-gray-700 font-medium">Candidates</label>
      <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
      </div>
    </div>

    <div class="flex items-center mt-4">
     <input
      id="offers"
      name="offers"
      type="checkbox"
      checked={formData.offers}
      onChange={changeHandler}
      class="form-checkbox text-blue-500 focus:outline-none focus:ring focus:border-blue-300"
     />
     <div class="ml-2">
      <label for="offers" class="text-gray-700 font-medium">Offers</label>
      <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
     </div>
    </div>
   </fieldset>

    <br/>
    <br/>
    
  <fieldset class="border p-4 rounded-md shadow-md mb-4">
  <legend class="text-lg font-semibold">Push Notifications</legend>
  <p class="text-gray-500">These are delivered via SMS to your mobile phone.</p>

  <div class="mt-4">
    <input
      type="radio"
      id="pushEverything"
      name="pushNotifications"
      value="Everything"
      onChange={changeHandler}
      class="form-radio text-blue-500 focus:outline-none focus:ring focus:border-blue-300"
    />
    <label for="pushEverything" class="ml-2 text-gray-700">Everything</label>
  </div>

  <div class="mt-2">
    <input
      type="radio"
      id="pushEmail"
      name="pushNotifications"
      value="Same as email"
      onChange={changeHandler}
      class="form-radio text-blue-500 focus:outline-none focus:ring focus:border-blue-300"
    />
    <label for="pushEmail" class="ml-2 text-gray-700">Same as email</label>
  </div>

  <div class="mt-2">
    <input
      type="radio"
      id="pushNothing"
      name="pushNotifications"
      value="No Push Notifications"
      onChange={changeHandler}
      class="form-radio text-blue-500 focus:outline-none focus:ring focus:border-blue-300"
    />
    <label for="pushNothing" class="ml-2 text-gray-700">No Push Notifications</label>
  </div>
 </fieldset>

  <button class="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>


   </form>

   </div>
  );
}

export default App;
