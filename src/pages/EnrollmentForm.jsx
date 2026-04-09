// // // import React, { useState } from "react";

// // // // ─── Cashfree JS SDK Loader ─────────────────────────────────────────────────
// // // const loadCashfreeSDK = () =>
// // //   new Promise((resolve) => {
// // //     if (window.Cashfree) return resolve(true);
// // //     const script = document.createElement("script");
// // //     // PRODUCTION SDK
// // //     script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
// // //     script.onload = () => resolve(true);
// // //     script.onerror = () => resolve(false);
// // //     document.body.appendChild(script);
// // //   });

// // // // ─── Styles ─────────────────────────────────────────────────────────────────
// // // const styles = {
// // //   page: {
// // //     background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0f9ff 100%)",
// // //     minHeight: "100vh",
// // //     padding: "2.5rem 1rem",
// // //     fontFamily: "'Segoe UI', system-ui, sans-serif",
// // //   },
// // //   wrap: { maxWidth: "700px", margin: "0 auto" },

// // //   // Header
// // //   topHeader: { textAlign: "center", marginBottom: "2.5rem" },
// // //   badge: {
// // //     display: "inline-block", background: "#EEF2FF", color: "#4F46E5",
// // //     fontSize: "11px", fontWeight: "600", padding: "4px 12px", borderRadius: "20px",
// // //     letterSpacing: "0.5px", marginBottom: "12px", textTransform: "uppercase",
// // //   },
// // //   topTitle: {
// // //     fontSize: "28px", fontWeight: "700", color: "#111827",
// // //     marginBottom: "6px", letterSpacing: "-0.5px",
// // //   },
// // //   topSub: { fontSize: "14px", color: "#6b7280" },

// // //   // Steps
// // //   stepsRow: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" },
// // //   stepWrap: { display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" },
// // //   stepNum: (active, done) => ({
// // //     width: "32px", height: "32px", borderRadius: "50%",
// // //     display: "flex", alignItems: "center", justifyContent: "center",
// // //     fontSize: done ? "13px" : "12px", fontWeight: "600",
// // //     background: done ? "#10B981" : active ? "#4F46E5" : "#e5e7eb",
// // //     color: (active || done) ? "#fff" : "#9ca3af",
// // //     boxShadow: active && !done ? "0 0 0 4px #EEF2FF" : "none",
// // //     transition: "all 0.2s",
// // //   }),
// // //   stepLabel: (active) => ({
// // //     fontSize: "11px", fontWeight: "500",
// // //     color: active ? "#4F46E5" : "#9ca3af",
// // //   }),
// // //   connector: { width: "52px", height: "2px", background: "#e5e7eb", marginBottom: "20px", marginTop: "0" },

// // //   // Cards
// // //   card: {
// // //     background: "#ffffff", border: "1px solid #E5E7EB",
// // //     borderRadius: "16px", padding: "1.5rem", marginBottom: "1rem",
// // //     boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
// // //   },
// // //   secHead: {
// // //     display: "flex", alignItems: "center", gap: "12px",
// // //     marginBottom: "1.25rem", paddingBottom: "12px",
// // //     borderBottom: "1px solid #F3F4F6",
// // //   },
// // //   secIcon: (bg) => ({
// // //     width: "36px", height: "36px", borderRadius: "10px", background: bg,
// // //     display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
// // //   }),
// // //   secTitle: { fontSize: "14px", fontWeight: "700", color: "#111827", letterSpacing: "-0.2px" },
// // //   secDesc: { fontSize: "12px", color: "#9ca3af", marginTop: "1px" },

// // //   // Grid
// // //   grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" },

// // //   // Fields
// // //   field: { display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" },
// // //   fieldNoMargin: { display: "flex", flexDirection: "column", gap: "6px" },
// // //   label: { fontSize: "12px", color: "#374151", fontWeight: "600" },
// // //   req: { color: "#EF4444" },

// // //   input: {
// // //     background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: "10px",
// // //     padding: "10px 14px", fontSize: "14px", color: "#111827",
// // //     outline: "none", width: "100%", fontFamily: "inherit",
// // //     transition: "border-color 0.15s, box-shadow 0.15s", boxSizing: "border-box",
// // //   },
// // //   textarea: {
// // //     background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: "10px",
// // //     padding: "10px 14px", fontSize: "14px", color: "#111827",
// // //     outline: "none", width: "100%", fontFamily: "inherit",
// // //     resize: "vertical", minHeight: "80px", boxSizing: "border-box",
// // //   },
// // //   select: {
// // //     background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: "10px",
// // //     padding: "10px 14px", fontSize: "14px", color: "#111827",
// // //     outline: "none", width: "100%", fontFamily: "inherit",
// // //     appearance: "none", cursor: "pointer", boxSizing: "border-box",
// // //   },

// // //   // Payment Cards
// // //   paymentGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },
// // //   payCard: (selected) => ({
// // //     border: selected ? "2px solid #4F46E5" : "2px solid #E5E7EB",
// // //     borderRadius: "12px", padding: "16px", cursor: "pointer",
// // //     background: selected ? "#EEF2FF" : "#F9FAFB",
// // //     transition: "all 0.2s", position: "relative",
// // //     textAlign: "center",
// // //   }),
// // //   payCardBadge: {
// // //     position: "absolute", top: "-1px", right: "-1px",
// // //     background: "#10B981", color: "#fff", fontSize: "9px", fontWeight: "700",
// // //     padding: "3px 8px", borderRadius: "0 10px 0 8px", letterSpacing: "0.5px",
// // //     textTransform: "uppercase",
// // //   },
// // //   payCardAmount: (selected) => ({
// // //     fontSize: "22px", fontWeight: "800",
// // //     color: selected ? "#4F46E5" : "#111827",
// // //     letterSpacing: "-0.5px",
// // //   }),
// // //   payCardLabel: { fontSize: "12px", color: "#6b7280", marginTop: "2px" },
// // //   payCardType: (selected) => ({
// // //     fontSize: "11px", fontWeight: "600",
// // //     color: selected ? "#4F46E5" : "#9ca3af",
// // //     marginTop: "6px", textTransform: "uppercase", letterSpacing: "0.5px",
// // //   }),

// // //   // Success
// // //   successBanner: {
// // //     background: "linear-gradient(135deg, #F0FDF4, #ECFDF5)",
// // //     border: "1px solid #6EE7B7", borderRadius: "12px",
// // //     padding: "20px 24px", color: "#065F46", marginBottom: "1.5rem",
// // //     textAlign: "center", boxShadow: "0 4px 12px rgba(16,185,129,0.1)",
// // //   },
// // //   successIcon: { fontSize: "40px", marginBottom: "8px" },
// // //   successTitle: { fontSize: "18px", fontWeight: "700", marginBottom: "4px" },
// // //   successSub: { fontSize: "13px", color: "#047857" },

// // //   // Error
// // //   errorBanner: {
// // //     background: "#FEF2F2", border: "1px solid #FECACA",
// // //     borderRadius: "10px", padding: "12px 16px",
// // //     color: "#991B1B", fontSize: "13px", fontWeight: "500",
// // //     textAlign: "center", marginBottom: "1rem",
// // //   },

// // //   // Button
// // //   submitBtn: {
// // //     width: "100%", padding: "14px", borderRadius: "12px",
// // //     border: "none", cursor: "pointer", fontFamily: "inherit",
// // //     fontSize: "15px", fontWeight: "700", marginTop: "0.75rem",
// // //     letterSpacing: "0.01em", transition: "all 0.2s",
// // //     background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
// // //     color: "#fff", boxShadow: "0 4px 14px rgba(79,70,229,0.35)",
// // //   },
// // //   submitBtnDisabled: {
// // //     width: "100%", padding: "14px", borderRadius: "12px",
// // //     border: "none", fontFamily: "inherit",
// // //     fontSize: "15px", fontWeight: "700", marginTop: "0.75rem",
// // //     background: "#D1D5DB", color: "#9CA3AF", cursor: "not-allowed",
// // //   },
// // // };

// // // // ─── Sub-components ──────────────────────────────────────────────────────────
// // // const StepIndicator = ({ steps }) => (
// // //   <div style={styles.stepsRow}>
// // //     {steps.map((step, i) => (
// // //       <React.Fragment key={step.label}>
// // //         <div style={styles.stepWrap}>
// // //           <div style={styles.stepNum(step.active, step.done)}>
// // //             {step.done ? "✓" : i + 1}
// // //           </div>
// // //           <span style={styles.stepLabel(step.active || step.done)}>{step.label}</span>
// // //         </div>
// // //         {i < steps.length - 1 && <div style={styles.connector} />}
// // //       </React.Fragment>
// // //     ))}
// // //   </div>
// // // );

// // // const SectionCard = ({ iconBg, iconChar, title, desc, children }) => (
// // //   <div style={styles.card}>
// // //     <div style={styles.secHead}>
// // //       <div style={styles.secIcon(iconBg)}>
// // //         <span style={{ fontSize: "16px" }}>{iconChar}</span>
// // //       </div>
// // //       <div>
// // //         <div style={styles.secTitle}>{title}</div>
// // //         {desc && <div style={styles.secDesc}>{desc}</div>}
// // //       </div>
// // //     </div>
// // //     {children}
// // //   </div>
// // // );

// // // const Field = ({ label, required, noMargin, children }) => (
// // //   <div style={noMargin ? styles.fieldNoMargin : styles.field}>
// // //     <label style={styles.label}>
// // //       {label} {required && <span style={styles.req}>*</span>}
// // //     </label>
// // //     {children}
// // //   </div>
// // // );

// // // // ─── Constants ───────────────────────────────────────────────────────────────
// // // const INITIAL_FORM = {
// // //   name: "", fatherName: "", motherName: "", address: "",
// // //   mobile: "", course: "", collegeName: "", rollNumber: "",
// // //   semester: "", payment: "",
// // // };

// // // // ─── Validation ──────────────────────────────────────────────────────────────
// // // const validate = (form) => {
// // //   const fields = {
// // //     name: "Full Name",
// // //     fatherName: "Father's Name",
// // //     motherName: "Mother's Name",
// // //     address: "Address",
// // //     mobile: "Mobile Number",
// // //     course: "Course Type",
// // //     collegeName: "College Name",
// // //     rollNumber: "Roll Number",
// // //     semester: "Semester",
// // //   };
// // //   for (const [key, label] of Object.entries(fields)) {
// // //     if (!form[key]?.trim()) return `Please fill in: ${label}`;
// // //   }
// // //   if (!/^\d{10}$/.test(form.mobile)) return "Enter a valid 10-digit mobile number";
// // //   if (![999, 4499].includes(Number(form.payment))) return "Please select a payment option";
// // //   return null;
// // // };

// // // // ─── Main Component ──────────────────────────────────────────────────────────
// // // const EnrollmentForm = () => {
// // //   const [form, setForm] = useState(INITIAL_FORM);
// // //   const [loading, setLoading] = useState(false);
// // //   const [success, setSuccess] = useState(null); // { name, course, payment }
// // //   const [error, setError] = useState("");

// // //   const handleChange = (e) => {
// // //     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// // //     setError("");
// // //   };

// // //   const handlePaymentSelect = (amount) => {
// // //     setForm((prev) => ({ ...prev, payment: String(amount) }));
// // //     setError("");
// // //   };

// // //   // ── MAIN SUBMIT ────────────────────────────────────────────────────────────
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError("");

// // //     // 1️⃣ Frontend validation
// // //     const validationError = validate(form);
// // //     if (validationError) {
// // //       setError(validationError);
// // //       window.scrollTo({ top: 0, behavior: "smooth" });
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);

// // //       // 2️⃣ Load Cashfree SDK
// // //       const sdkLoaded = await loadCashfreeSDK();
// // //       if (!sdkLoaded) {
// // //         throw new Error("Payment SDK load failed. Check your internet connection.");
// // //       }

// // //       // 3️⃣ Create order on backend
// // //       const orderRes = await fetch("https://registration-nu-eight.vercel.app/api/create-order", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           payment: Number(form.payment),
// // //           formData: {
// // //             name: form.name,
// // //             mobile: form.mobile,
// // //             email: form.email || "",
// // //           },
// // //         }),
// // //       });

// // //       const orderData = await orderRes.json();
// // //       if (!orderRes.ok || !orderData.success) {
// // //         throw new Error(orderData.message || "Order creation failed");
// // //       }

// // //       const { order_id, payment_session_id } = orderData.order;

// // //       // 4️⃣ Open Cashfree checkout
// // //       const cashfree = await window.Cashfree({ mode: "production" }); // use "sandbox" for testing
// // //       const checkoutOptions = {
// // //         paymentSessionId: payment_session_id,
// // //         redirectTarget: "_modal", // opens as popup
// // //       };

// // //       const result = await cashfree.checkout(checkoutOptions);

// // //       // 5️⃣ Handle result
// // //       if (result.error) {
// // //         throw new Error(result.error.message || "Payment failed. Please try again.");
// // //       }

// // //       if (result.paymentDetails?.paymentStatus === "SUCCESS" || result.redirect) {
// // //         // Payment done → verify on backend
// // //         await verifyAndSave(order_id);
// // //       } else {
// // //         throw new Error("Payment was not completed. Please try again.");
// // //       }

// // //     } catch (err) {
// // //       setLoading(false);
// // //       setError(err.message || "Something went wrong. Please try again.");
// // //       window.scrollTo({ top: 0, behavior: "smooth" });
// // //     }
// // //   };

// // //   // ── VERIFY PAYMENT + SAVE ENROLLMENT ──────────────────────────────────────
// // //   const verifyAndSave = async (order_id) => {
// // //     try {
// // //       const verifyRes = await fetch("https://registration-nu-eight.vercel.app/api/verify-payment", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           order_id,
// // //           formData: {
// // //             ...form,
// // //             payment: Number(form.payment),
// // //           },
// // //         }),
// // //       });

// // //       const verifyData = await verifyRes.json();
// // //       if (!verifyRes.ok || !verifyData.success) {
// // //         throw new Error(verifyData.message || "Enrollment save failed");
// // //       }

// // //       // ✅ Success!
// // //       setSuccess({
// // //         name: form.name,
// // //         course: form.course,
// // //         payment: Number(form.payment),
// // //       });
// // //       setForm(INITIAL_FORM);
// // //       window.scrollTo({ top: 0, behavior: "smooth" });

// // //     } catch (err) {
// // //       setError(`Payment succeeded but enrollment save failed: ${err.message}. Please contact support with your Order ID.`);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // ── STEPS ─────────────────────────────────────────────────────────────────
// // //   const steps = [
// // //     { label: "Personal", active: true, done: !!(form.name && form.mobile) },
// // //     { label: "Course",   active: true, done: !!form.course },
// // //     { label: "College",  active: true, done: !!(form.collegeName && form.rollNumber) },
// // //     { label: "Payment",  active: !!form.payment, done: false },
// // //   ];

// // //   // ── SUCCESS SCREEN ────────────────────────────────────────────────────────
// // //   if (success) {
// // //     return (
// // //       <div style={styles.page}>
// // //         <div style={{ ...styles.wrap, textAlign: "center", paddingTop: "4rem" }}>
// // //           <div style={styles.card}>
// // //             <div style={{ fontSize: "64px", marginBottom: "16px" }}>🎉</div>
// // //             <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "8px" }}>
// // //               Enrollment Confirmed!
// // //             </h2>
// // //             <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "20px" }}>
// // //               Payment of <strong style={{ color: "#4F46E5" }}>₹{success.payment.toLocaleString("en-IN")}</strong> received successfully.
// // //             </p>
// // //             <div style={{
// // //               background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "12px",
// // //               padding: "16px", marginBottom: "20px",
// // //             }}>
// // //               <div style={{ fontSize: "13px", color: "#065F46" }}>
// // //                 <strong>{success.name}</strong> is now enrolled in <strong>{success.course}</strong>
// // //               </div>
// // //               <div style={{ fontSize: "12px", color: "#047857", marginTop: "4px" }}>
// // //                 A confirmation will be sent to your registered mobile number
// // //               </div>
// // //             </div>
// // //             <button
// // //               onClick={() => setSuccess(null)}
// // //               style={{ ...styles.submitBtn, marginTop: "0" }}
// // //             >
// // //               Enroll Another Student
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   // ── MAIN FORM ─────────────────────────────────────────────────────────────
// // //   return (
// // //     <div style={styles.page}>
// // //       <div style={styles.wrap}>

// // //         <div style={styles.topHeader}>
// // //           <div style={styles.badge}>🎓 Registration Portal</div>
// // //           <h1 style={styles.topTitle}>Enrollment Form</h1>
// // //           <p style={styles.topSub}>Complete all sections to register your enrollment</p>
// // //         </div>

// // //         <StepIndicator steps={steps} />

// // //         {error && <div style={styles.errorBanner}>⚠️ {error}</div>}

// // //         <form onSubmit={handleSubmit} noValidate>

// // //           {/* ── Personal Details ─────────────────────────────────────────── */}
// // //           <SectionCard
// // //             iconBg="#EEF2FF" iconChar="👤"
// // //             title="Personal Details"
// // //             desc="Your basic information"
// // //           >
// // //             <div style={styles.grid2}>
// // //               <Field label="Full Name" required>
// // //                 <input
// // //                   style={styles.input} name="name" value={form.name}
// // //                   onChange={handleChange} placeholder="Your full name"
// // //                 />
// // //               </Field>
// // //               <Field label="Mobile Number" required>
// // //                 <input
// // //                   style={styles.input} name="mobile" value={form.mobile}
// // //                   onChange={handleChange} placeholder="10-digit number" maxLength={10}
// // //                   inputMode="numeric"
// // //                 />
// // //               </Field>
// // //             </div>
// // //             <div style={{ ...styles.grid2 }}>
// // //               <Field label="Father's Name" required>
// // //                 <input
// // //                   style={styles.input} name="fatherName" value={form.fatherName}
// // //                   onChange={handleChange} placeholder="Father's full name"
// // //                 />
// // //               </Field>
// // //               <Field label="Mother's Name" required>
// // //                 <input
// // //                   style={styles.input} name="motherName" value={form.motherName}
// // //                   onChange={handleChange} placeholder="Mother's full name"
// // //                 />
// // //               </Field>
// // //             </div>
// // //             <Field label="Address" required noMargin>
// // //               <textarea
// // //                 style={styles.textarea} name="address" value={form.address}
// // //                 onChange={handleChange} placeholder="Street, City, State, PIN Code"
// // //               />
// // //             </Field>
// // //           </SectionCard>

// // //           {/* ── Course Details ───────────────────────────────────────────── */}
// // //           <SectionCard
// // //             iconBg="#ECFDF5" iconChar="📚"
// // //             title="Course Details"
// // //             desc="Select your program type"
// // //           >
// // //             <Field label="Course Type" required noMargin>
// // //               <select style={styles.select} name="course" value={form.course} onChange={handleChange}>
// // //                 <option value="">— Select a course —</option>
// // //                 <option value="Industrial Training">Industrial Training</option>
// // //                 <option value="Internship">Internship</option>
// // //               </select>
// // //             </Field>
// // //           </SectionCard>

// // //           {/* ── College Details ──────────────────────────────────────────── */}
// // //           <SectionCard
// // //             iconBg="#EFF6FF" iconChar="🏫"
// // //             title="College Details"
// // //             desc="Your institution information"
// // //           >
// // //             <div style={styles.grid2}>
// // //               <Field label="College Name" required>
// // //                 <input
// // //                   style={styles.input} name="collegeName" value={form.collegeName}
// // //                   onChange={handleChange} placeholder="College / University"
// // //                 />
// // //               </Field>
// // //               <Field label="Roll Number" required>
// // //                 <input
// // //                   style={styles.input} name="rollNumber" value={form.rollNumber}
// // //                   onChange={handleChange} placeholder="Your roll number"
// // //                 />
// // //               </Field>
// // //             </div>
// // //             <Field label="Semester" required noMargin>
// // //               <input
// // //                 style={styles.input} name="semester" value={form.semester}
// // //                 onChange={handleChange} placeholder="e.g. 5th Semester"
// // //               />
// // //             </Field>
// // //           </SectionCard>

// // //           {/* ── Payment Details ──────────────────────────────────────────── */}
// // //           <SectionCard
// // //             iconBg="#FFFBEB" iconChar="💳"
// // //             title="Payment Details"
// // //             desc="Choose your payment plan"
// // //           >
// // //             <div style={styles.paymentGrid}>
// // //               {/* Token Option */}
// // //               <div
// // //                 style={styles.payCard(form.payment === "999")}
// // //                 onClick={() => handlePaymentSelect(999)}
// // //               >
// // //                 <div style={styles.payCardAmount(form.payment === "999")}>₹999</div>
// // //                 <div style={styles.payCardLabel}>Token Payment</div>
// // //                 <div style={styles.payCardType(form.payment === "999")}>Partial</div>
// // //               </div>

// // //               {/* Full Payment Option */}
// // //               <div
// // //                 style={styles.payCard(form.payment === "4499")}
// // //                 onClick={() => handlePaymentSelect(4499)}
// // //               >
// // //                 <div style={styles.payCardBadge}>RECOMMENDED</div>
// // //                 <div style={styles.payCardAmount(form.payment === "4499")}>₹4,499</div>
// // //                 <div style={styles.payCardLabel}>Full Payment</div>
// // //                 <div style={styles.payCardType(form.payment === "4499")}>Complete</div>
// // //               </div>
// // //             </div>

// // //             {form.payment && (
// // //               <div style={{
// // //                 marginTop: "14px", padding: "12px 16px",
// // //                 background: "#F5F3FF", borderRadius: "10px",
// // //                 display: "flex", justifyContent: "space-between", alignItems: "center",
// // //               }}>
// // //                 <span style={{ fontSize: "13px", color: "#6b7280" }}>Amount to pay now</span>
// // //                 <span style={{ fontSize: "18px", fontWeight: "800", color: "#4F46E5" }}>
// // //                   ₹{Number(form.payment).toLocaleString("en-IN")}
// // //                 </span>
// // //               </div>
// // //             )}
// // //           </SectionCard>

// // //           {/* ── Submit ───────────────────────────────────────────────────── */}
// // //           <button
// // //             type="submit"
// // //             style={loading ? styles.submitBtnDisabled : styles.submitBtn}
// // //             disabled={loading}
// // //           >
// // //             {loading
// // //               ? "⏳ Processing Payment..."
// // //               : `Pay ₹${form.payment ? Number(form.payment).toLocaleString("en-IN") : "—"} & Confirm Enrollment`
// // //             }
// // //           </button>

// // //           <p style={{ textAlign: "center", fontSize: "12px", color: "#9ca3af", marginTop: "10px" }}>
// // //             🔒 Secured by Cashfree Payments · 256-bit SSL Encryption
// // //           </p>

// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default EnrollmentForm;



// // import React, { useState, useEffect } from "react";

// // // ─── Payment Links ────────────────────────────────────────────────────────────
// // const PAYMENT_LINKS = {
// //   999:  "https://payments.cashfree.com/links/oa79n62a61rg_AAAAAAARvQk",
// //   4499: "https://payments.cashfree.com/links/oa79n62a61rg_AAAAAAARvQk", // apna full payment link yahan daal
// // };

// // // ─── Styles ──────────────────────────────────────────────────────────────────
// // const styles = {
// //   page: {
// //     background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0f9ff 100%)",
// //     minHeight: "100vh", padding: "2.5rem 1rem",
// //     fontFamily: "'Segoe UI', system-ui, sans-serif",
// //   },
// //   wrap: { maxWidth: "700px", margin: "0 auto" },
// //   topHeader: { textAlign: "center", marginBottom: "2.5rem" },
// //   badge: {
// //     display: "inline-block", background: "#EEF2FF", color: "#4F46E5",
// //     fontSize: "11px", fontWeight: "600", padding: "4px 12px", borderRadius: "20px",
// //     letterSpacing: "0.5px", marginBottom: "12px", textTransform: "uppercase",
// //   },
// //   topTitle: { fontSize: "28px", fontWeight: "700", color: "#111827", marginBottom: "6px", letterSpacing: "-0.5px" },
// //   topSub: { fontSize: "14px", color: "#6b7280" },
// //   stepsRow: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" },
// //   stepWrap: { display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" },
// //   stepNum: (active, done) => ({
// //     width: "32px", height: "32px", borderRadius: "50%",
// //     display: "flex", alignItems: "center", justifyContent: "center",
// //     fontSize: done ? "13px" : "12px", fontWeight: "600",
// //     background: done ? "#10B981" : active ? "#4F46E5" : "#e5e7eb",
// //     color: (active || done) ? "#fff" : "#9ca3af",
// //     boxShadow: active && !done ? "0 0 0 4px #EEF2FF" : "none",
// //   }),
// //   stepLabel: (active) => ({ fontSize: "11px", fontWeight: "500", color: active ? "#4F46E5" : "#9ca3af" }),
// //   connector: { width: "52px", height: "2px", background: "#e5e7eb", marginBottom: "20px" },
// //   card: {
// //     background: "#fff", border: "1px solid #E5E7EB", borderRadius: "16px",
// //     padding: "1.5rem", marginBottom: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
// //   },
// //   secHead: {
// //     display: "flex", alignItems: "center", gap: "12px",
// //     marginBottom: "1.25rem", paddingBottom: "12px", borderBottom: "1px solid #F3F4F6",
// //   },
// //   secIcon: (bg) => ({
// //     width: "36px", height: "36px", borderRadius: "10px", background: bg,
// //     display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
// //   }),
// //   secTitle: { fontSize: "14px", fontWeight: "700", color: "#111827" },
// //   secDesc: { fontSize: "12px", color: "#9ca3af", marginTop: "1px" },
// //   grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" },
// //   field: { display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" },
// //   fieldNoMargin: { display: "flex", flexDirection: "column", gap: "6px" },
// //   label: { fontSize: "12px", color: "#374151", fontWeight: "600" },
// //   req: { color: "#EF4444" },
// //   input: {
// //     background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: "10px",
// //     padding: "10px 14px", fontSize: "14px", color: "#111827", outline: "none",
// //     width: "100%", fontFamily: "inherit", boxSizing: "border-box",
// //   },
// //   textarea: {
// //     background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: "10px",
// //     padding: "10px 14px", fontSize: "14px", color: "#111827", outline: "none",
// //     width: "100%", fontFamily: "inherit", resize: "vertical", minHeight: "80px", boxSizing: "border-box",
// //   },
// //   select: {
// //     background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: "10px",
// //     padding: "10px 14px", fontSize: "14px", color: "#111827", outline: "none",
// //     width: "100%", fontFamily: "inherit", appearance: "none", cursor: "pointer", boxSizing: "border-box",
// //   },
// //   paymentGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },
// //   payCard: (selected) => ({
// //     border: selected ? "2px solid #4F46E5" : "2px solid #E5E7EB",
// //     borderRadius: "12px", padding: "16px", cursor: "pointer",
// //     background: selected ? "#EEF2FF" : "#F9FAFB",
// //     transition: "all 0.2s", position: "relative", textAlign: "center",
// //   }),
// //   payCardBadge: {
// //     position: "absolute", top: "-1px", right: "-1px",
// //     background: "#10B981", color: "#fff", fontSize: "9px", fontWeight: "700",
// //     padding: "3px 8px", borderRadius: "0 10px 0 8px", letterSpacing: "0.5px", textTransform: "uppercase",
// //   },
// //   payCardAmount: (selected) => ({
// //     fontSize: "22px", fontWeight: "800",
// //     color: selected ? "#4F46E5" : "#111827", letterSpacing: "-0.5px",
// //   }),
// //   payCardLabel: { fontSize: "12px", color: "#6b7280", marginTop: "2px" },
// //   payCardType: (selected) => ({
// //     fontSize: "11px", fontWeight: "600",
// //     color: selected ? "#4F46E5" : "#9ca3af", marginTop: "6px", textTransform: "uppercase",
// //   }),
// //   errorBanner: {
// //     background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "10px",
// //     padding: "12px 16px", color: "#991B1B", fontSize: "13px", fontWeight: "500",
// //     textAlign: "center", marginBottom: "1rem",
// //   },
// //   submitBtn: {
// //     width: "100%", padding: "14px", borderRadius: "12px", border: "none",
// //     cursor: "pointer", fontFamily: "inherit", fontSize: "15px", fontWeight: "700",
// //     marginTop: "0.75rem", background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
// //     color: "#fff", boxShadow: "0 4px 14px rgba(79,70,229,0.35)",
// //   },
// //   submitBtnDisabled: {
// //     width: "100%", padding: "14px", borderRadius: "12px", border: "none",
// //     fontFamily: "inherit", fontSize: "15px", fontWeight: "700", marginTop: "0.75rem",
// //     background: "#D1D5DB", color: "#9CA3AF", cursor: "not-allowed",
// //   },
// // };

// // // ─── Sub-components ──────────────────────────────────────────────────────────
// // const StepIndicator = ({ steps }) => (
// //   <div style={styles.stepsRow}>
// //     {steps.map((step, i) => (
// //       <React.Fragment key={step.label}>
// //         <div style={styles.stepWrap}>
// //           <div style={styles.stepNum(step.active, step.done)}>{step.done ? "✓" : i + 1}</div>
// //           <span style={styles.stepLabel(step.active || step.done)}>{step.label}</span>
// //         </div>
// //         {i < steps.length - 1 && <div style={styles.connector} />}
// //       </React.Fragment>
// //     ))}
// //   </div>
// // );

// // const SectionCard = ({ iconBg, iconChar, title, desc, children }) => (
// //   <div style={styles.card}>
// //     <div style={styles.secHead}>
// //       <div style={styles.secIcon(iconBg)}><span style={{ fontSize: "16px" }}>{iconChar}</span></div>
// //       <div>
// //         <div style={styles.secTitle}>{title}</div>
// //         {desc && <div style={styles.secDesc}>{desc}</div>}
// //       </div>
// //     </div>
// //     {children}
// //   </div>
// // );

// // const Field = ({ label, required, noMargin, children }) => (
// //   <div style={noMargin ? styles.fieldNoMargin : styles.field}>
// //     <label style={styles.label}>{label} {required && <span style={styles.req}>*</span>}</label>
// //     {children}
// //   </div>
// // );

// // // ─── Constants ───────────────────────────────────────────────────────────────
// // const INITIAL_FORM = {
// //   name: "", fatherName: "", motherName: "", address: "",
// //   mobile: "", course: "", collegeName: "", rollNumber: "", semester: "", payment: "",
// // };

// // const validate = (form) => {
// //   const fields = {
// //     name: "Full Name", fatherName: "Father's Name", motherName: "Mother's Name",
// //     address: "Address", mobile: "Mobile Number", course: "Course Type",
// //     collegeName: "College Name", rollNumber: "Roll Number", semester: "Semester",
// //   };
// //   for (const [key, label] of Object.entries(fields)) {
// //     if (!form[key]?.trim()) return `Please fill in: ${label}`;
// //   }
// //   if (!/^\d{10}$/.test(form.mobile)) return "Enter a valid 10-digit mobile number";
// //   if (![999, 4499].includes(Number(form.payment))) return "Please select a payment option";
// //   return null;
// // };

// // // ─── Main Component ──────────────────────────────────────────────────────────
// // const EnrollmentForm = () => {
// //   const [form, setForm] = useState(INITIAL_FORM);
// //   const [loading, setLoading] = useState(false);
// //   const [success, setSuccess] = useState(null);
// //   const [error, setError] = useState("");

// //   // ── Payment ke baad wapas aane pe auto-verify ─────────────────────────────
// //   useEffect(() => {
// //     const savedForm = sessionStorage.getItem("enrollForm");
// //     if (!savedForm) return;

// //     const params = new URLSearchParams(window.location.search);
// //     const orderId = params.get("order_id");

// //     if (orderId) {
// //       const parsedForm = JSON.parse(savedForm);
// //       verifyAndSave(parsedForm, orderId);
// //     }
// //   }, []);

// //   const handleChange = (e) => {
// //     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// //     setError("");
// //   };

// //   const handlePaymentSelect = (amount) => {
// //     setForm((prev) => ({ ...prev, payment: String(amount) }));
// //     setError("");
// //   };

// //   // ── SUBMIT: validate → save → redirect ───────────────────────────────────
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setError("");

// //     const validationError = validate(form);
// //     if (validationError) {
// //       setError(validationError);
// //       window.scrollTo({ top: 0, behavior: "smooth" });
// //       return;
// //     }

// //     setLoading(true);
// //     sessionStorage.setItem("enrollForm", JSON.stringify(form));
// //     window.location.href = PAYMENT_LINKS[Number(form.payment)];
// //   };

// //   // ── VERIFY + SAVE ENROLLMENT ──────────────────────────────────────────────
// //   const verifyAndSave = async (savedForm, orderId) => {
// //     setLoading(true);
// //     setError("");

// //     try {
// //       const res = await fetch("https://registration-nu-eight.vercel.app/api/verify-payment", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           order_id: orderId,
// //           formData: { ...savedForm, payment: Number(savedForm.payment) },
// //         }),
// //       });

// //       const data = await res.json();
// //       if (!res.ok || !data.success) throw new Error(data.message || "Enrollment save failed");

// //       sessionStorage.removeItem("enrollForm");
// //       window.history.replaceState({}, "", window.location.pathname);
// //       setForm(INITIAL_FORM);
// //       setSuccess({ name: savedForm.name, course: savedForm.course, payment: Number(savedForm.payment) });
// //       window.scrollTo({ top: 0, behavior: "smooth" });

// //     } catch (err) {
// //       setError(`Payment ho gayi lekin enrollment save nahi hua: ${err.message}. Support se contact karein.`);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const steps = [
// //     { label: "Personal", active: true, done: !!(form.name && form.mobile) },
// //     { label: "Course",   active: true, done: !!form.course },
// //     { label: "College",  active: true, done: !!(form.collegeName && form.rollNumber) },
// //     { label: "Payment",  active: !!form.payment, done: false },
// //   ];

// //   // ── SUCCESS SCREEN ────────────────────────────────────────────────────────
// //   if (success) {
// //     return (
// //       <div style={styles.page}>
// //         <div style={{ ...styles.wrap, textAlign: "center", paddingTop: "4rem" }}>
// //           <div style={styles.card}>
// //             <div style={{ fontSize: "64px", marginBottom: "16px" }}>🎉</div>
// //             <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "8px" }}>Enrollment Confirmed!</h2>
// //             <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "20px" }}>
// //               Payment of <strong style={{ color: "#4F46E5" }}>₹{success.payment.toLocaleString("en-IN")}</strong> received successfully.
// //             </p>
// //             <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "12px", padding: "16px", marginBottom: "20px" }}>
// //               <div style={{ fontSize: "13px", color: "#065F46" }}>
// //                 <strong>{success.name}</strong> is now enrolled in <strong>{success.course}</strong>
// //               </div>
// //               <div style={{ fontSize: "12px", color: "#047857", marginTop: "4px" }}>
// //                 A confirmation will be sent to your registered mobile number
// //               </div>
// //             </div>
// //             <button onClick={() => setSuccess(null)} style={{ ...styles.submitBtn, marginTop: "0" }}>
// //               Enroll Another Student
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // ── VERIFYING SCREEN (wapas aaye hain, verify ho raha hai) ───────────────
// //   if (loading) {
// //     return (
// //       <div style={{ ...styles.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
// //         <div style={{ textAlign: "center" }}>
// //           <div style={{ fontSize: "48px", marginBottom: "16px" }}>⏳</div>
// //           <div style={{ fontSize: "16px", fontWeight: "600", color: "#4F46E5" }}>Payment verify ho rahi hai...</div>
// //           <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "6px" }}>Kripya page band mat karein</div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // ── MAIN FORM ─────────────────────────────────────────────────────────────
// //   return (
// //     <div style={styles.page}>
// //       <div style={styles.wrap}>

// //         <div style={styles.topHeader}>
// //           <div style={styles.badge}>🎓 Registration Portal</div>
// //           <h1 style={styles.topTitle}>Enrollment Form</h1>
// //           <p style={styles.topSub}>Complete all sections to register your enrollment</p>
// //         </div>

// //         <StepIndicator steps={steps} />

// //         {error && <div style={styles.errorBanner}>⚠️ {error}</div>}

// //         <form onSubmit={handleSubmit} noValidate>

// //           <SectionCard iconBg="#EEF2FF" iconChar="👤" title="Personal Details" desc="Your basic information">
// //             <div style={styles.grid2}>
// //               <Field label="Full Name" required>
// //                 <input style={styles.input} name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
// //               </Field>
// //               <Field label="Mobile Number" required>
// //                 <input style={styles.input} name="mobile" value={form.mobile} onChange={handleChange} placeholder="10-digit number" maxLength={10} inputMode="numeric" />
// //               </Field>
// //             </div>
// //             <div style={styles.grid2}>
// //               <Field label="Father's Name" required>
// //                 <input style={styles.input} name="fatherName" value={form.fatherName} onChange={handleChange} placeholder="Father's full name" />
// //               </Field>
// //               <Field label="Mother's Name" required>
// //                 <input style={styles.input} name="motherName" value={form.motherName} onChange={handleChange} placeholder="Mother's full name" />
// //               </Field>
// //             </div>
// //             <Field label="Address" required noMargin>
// //               <textarea style={styles.textarea} name="address" value={form.address} onChange={handleChange} placeholder="Street, City, State, PIN Code" />
// //             </Field>
// //           </SectionCard>

// //           <SectionCard iconBg="#ECFDF5" iconChar="📚" title="Course Details" desc="Select your program type">
// //             <Field label="Course Type" required noMargin>
// //               <select style={styles.select} name="course" value={form.course} onChange={handleChange}>
// //                 <option value="">— Select a course —</option>
// //                 <option value="Industrial Training">Industrial Training</option>
// //                 <option value="Internship">Internship</option>
// //               </select>
// //             </Field>
// //           </SectionCard>

// //           <SectionCard iconBg="#EFF6FF" iconChar="🏫" title="College Details" desc="Your institution information">
// //             <div style={styles.grid2}>
// //               <Field label="College Name" required>
// //                 <input style={styles.input} name="collegeName" value={form.collegeName} onChange={handleChange} placeholder="College / University" />
// //               </Field>
// //               <Field label="Roll Number" required>
// //                 <input style={styles.input} name="rollNumber" value={form.rollNumber} onChange={handleChange} placeholder="Your roll number" />
// //               </Field>
// //             </div>
// //             <Field label="Semester" required noMargin>
// //               <input style={styles.input} name="semester" value={form.semester} onChange={handleChange} placeholder="e.g. 5th Semester" />
// //             </Field>
// //           </SectionCard>

// //           <SectionCard iconBg="#FFFBEB" iconChar="💳" title="Payment Details" desc="Choose your payment plan">
// //             <div style={styles.paymentGrid}>
// //               <div style={styles.payCard(form.payment === "999")} onClick={() => handlePaymentSelect(999)}>
// //                 <div style={styles.payCardAmount(form.payment === "999")}>₹999</div>
// //                 <div style={styles.payCardLabel}>Token Payment</div>
// //                 <div style={styles.payCardType(form.payment === "999")}>Partial</div>
// //               </div>
// //               <div style={styles.payCard(form.payment === "4499")} onClick={() => handlePaymentSelect(4499)}>
// //                 <div style={styles.payCardBadge}>RECOMMENDED</div>
// //                 <div style={styles.payCardAmount(form.payment === "4499")}>₹4,499</div>
// //                 <div style={styles.payCardLabel}>Full Payment</div>
// //                 <div style={styles.payCardType(form.payment === "4499")}>Complete</div>
// //               </div>
// //             </div>
// //             {form.payment && (
// //               <div style={{ marginTop: "14px", padding: "12px 16px", background: "#F5F3FF", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //                 <span style={{ fontSize: "13px", color: "#6b7280" }}>Amount to pay now</span>
// //                 <span style={{ fontSize: "18px", fontWeight: "800", color: "#4F46E5" }}>₹{Number(form.payment).toLocaleString("en-IN")}</span>
// //               </div>
// //             )}
// //           </SectionCard>

// //           <button type="submit" style={styles.submitBtn}>
// //             {`Pay ₹${form.payment ? Number(form.payment).toLocaleString("en-IN") : "—"} & Confirm Enrollment`}
// //           </button>

// //           <p style={{ textAlign: "center", fontSize: "12px", color: "#9ca3af", marginTop: "10px" }}>
// //             🔒 Secured by Cashfree Payments · 256-bit SSL Encryption
// //           </p>

// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EnrollmentForm;


// import React, { useState, useEffect } from "react";

// // ─── Payment Link ────────────────────────────────────────────────────────────
// const BASE_PAYMENT_LINK = "https://payments.cashfree.com/links/oa79n62a61rg_AAAAAAARvQk";
// const getPaymentUrl = (amount) => `${BASE_PAYMENT_LINK}?amount=${amount}`;

// // ─── Styles ──────────────────────────────────────────────────────────────────
// const styles = {
//   page: {
//     background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0f9ff 100%)",
//     minHeight: "100vh", padding: "2.5rem 1rem",
//     fontFamily: "'Segoe UI', system-ui, sans-serif",
//   },
//   wrap: { maxWidth: "700px", margin: "0 auto" },
//   topHeader: { textAlign: "center", marginBottom: "2.5rem" },
//   badge: {
//     display: "inline-block", background: "#EEF2FF", color: "#4F46E5",
//     fontSize: "11px", fontWeight: "600", padding: "4px 12px", borderRadius: "20px",
//     letterSpacing: "0.5px", marginBottom: "12px", textTransform: "uppercase",
//   },
//   topTitle: { fontSize: "28px", fontWeight: "700", color: "#111827", marginBottom: "6px", letterSpacing: "-0.5px" },
//   topSub: { fontSize: "14px", color: "#6b7280" },
//   stepsRow: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" },
//   stepWrap: { display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" },
//   stepNum: (active, done) => ({
//     width: "32px", height: "32px", borderRadius: "50%",
//     display: "flex", alignItems: "center", justifyContent: "center",
//     fontSize: done ? "13px" : "12px", fontWeight: "600",
//     background: done ? "#10B981" : active ? "#4F46E5" : "#e5e7eb",
//     color: (active || done) ? "#fff" : "#9ca3af",
//     boxShadow: active && !done ? "0 0 0 4px #EEF2FF" : "none",
//   }),
//   stepLabel: (active) => ({ fontSize: "11px", fontWeight: "500", color: active ? "#4F46E5" : "#9ca3af" }),
//   connector: { width: "52px", height: "2px", background: "#e5e7eb", marginBottom: "20px" },
//   card: {
//     background: "#fff", border: "1px solid #E5E7EB", borderRadius: "16px",
//     padding: "1.5rem", marginBottom: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
//   },
//   secHead: {
//     display: "flex", alignItems: "center", gap: "12px",
//     marginBottom: "1.25rem", paddingBottom: "12px", borderBottom: "1px solid #F3F4F6",
//   },
//   secIcon: (bg) => ({
//     width: "36px", height: "36px", borderRadius: "10px", background: bg,
//     display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
//   }),
//   secTitle: { fontSize: "14px", fontWeight: "700", color: "#111827" },
//   secDesc: { fontSize: "12px", color: "#9ca3af", marginTop: "1px" },
//   grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" },
//   field: { display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" },
//   fieldNoMargin: { display: "flex", flexDirection: "column", gap: "6px" },
//   label: { fontSize: "12px", color: "#374151", fontWeight: "600" },
//   req: { color: "#EF4444" },
//   input: {
//     background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: "10px",
//     padding: "10px 14px", fontSize: "14px", color: "#111827", outline: "none",
//     width: "100%", fontFamily: "inherit", boxSizing: "border-box",
//   },
//   textarea: {
//     background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: "10px",
//     padding: "10px 14px", fontSize: "14px", color: "#111827", outline: "none",
//     width: "100%", fontFamily: "inherit", resize: "vertical", minHeight: "80px", boxSizing: "border-box",
//   },
//   select: {
//     background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: "10px",
//     padding: "10px 14px", fontSize: "14px", color: "#111827", outline: "none",
//     width: "100%", fontFamily: "inherit", appearance: "none", cursor: "pointer", boxSizing: "border-box",
//   },
//   paymentGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },
//   payCard: (selected) => ({
//     border: selected ? "2px solid #4F46E5" : "2px solid #E5E7EB",
//     borderRadius: "12px", padding: "16px", cursor: "pointer",
//     background: selected ? "#EEF2FF" : "#F9FAFB",
//     transition: "all 0.2s", position: "relative", textAlign: "center",
//   }),
//   payCardBadge: {
//     position: "absolute", top: "-1px", right: "-1px",
//     background: "#10B981", color: "#fff", fontSize: "9px", fontWeight: "700",
//     padding: "3px 8px", borderRadius: "0 10px 0 8px", letterSpacing: "0.5px", textTransform: "uppercase",
//   },
//   payCardAmount: (selected) => ({
//     fontSize: "22px", fontWeight: "800",
//     color: selected ? "#4F46E5" : "#111827", letterSpacing: "-0.5px",
//   }),
//   payCardLabel: { fontSize: "12px", color: "#6b7280", marginTop: "2px" },
//   payCardType: (selected) => ({
//     fontSize: "11px", fontWeight: "600",
//     color: selected ? "#4F46E5" : "#9ca3af", marginTop: "6px", textTransform: "uppercase",
//   }),
//   errorBanner: {
//     background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "10px",
//     padding: "12px 16px", color: "#991B1B", fontSize: "13px", fontWeight: "500",
//     textAlign: "center", marginBottom: "1rem",
//   },
//   submitBtn: {
//     width: "100%", padding: "14px", borderRadius: "12px", border: "none",
//     cursor: "pointer", fontFamily: "inherit", fontSize: "15px", fontWeight: "700",
//     marginTop: "0.75rem", background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
//     color: "#fff", boxShadow: "0 4px 14px rgba(79,70,229,0.35)",
//   },
//   submitBtnDisabled: {
//     width: "100%", padding: "14px", borderRadius: "12px", border: "none",
//     fontFamily: "inherit", fontSize: "15px", fontWeight: "700", marginTop: "0.75rem",
//     background: "#D1D5DB", color: "#9CA3AF", cursor: "not-allowed",
//   },
// };

// // ─── Sub-components ──────────────────────────────────────────────────────────
// const StepIndicator = ({ steps }) => (
//   <div style={styles.stepsRow}>
//     {steps.map((step, i) => (
//       <React.Fragment key={step.label}>
//         <div style={styles.stepWrap}>
//           <div style={styles.stepNum(step.active, step.done)}>{step.done ? "✓" : i + 1}</div>
//           <span style={styles.stepLabel(step.active || step.done)}>{step.label}</span>
//         </div>
//         {i < steps.length - 1 && <div style={styles.connector} />}
//       </React.Fragment>
//     ))}
//   </div>
// );

// const SectionCard = ({ iconBg, iconChar, title, desc, children }) => (
//   <div style={styles.card}>
//     <div style={styles.secHead}>
//       <div style={styles.secIcon(iconBg)}><span style={{ fontSize: "16px" }}>{iconChar}</span></div>
//       <div>
//         <div style={styles.secTitle}>{title}</div>
//         {desc && <div style={styles.secDesc}>{desc}</div>}
//       </div>
//     </div>
//     {children}
//   </div>
// );

// const Field = ({ label, required, noMargin, children }) => (
//   <div style={noMargin ? styles.fieldNoMargin : styles.field}>
//     <label style={styles.label}>{label} {required && <span style={styles.req}>*</span>}</label>
//     {children}
//   </div>
// );

// // ─── Constants ───────────────────────────────────────────────────────────────
// const INITIAL_FORM = {
//   name: "", fatherName: "", motherName: "", address: "",
//   mobile: "", course: "", collegeName: "", rollNumber: "", semester: "", payment: "",
// };

// const validate = (form) => {
//   const fields = {
//     name: "Full Name", fatherName: "Father's Name", motherName: "Mother's Name",
//     address: "Address", mobile: "Mobile Number", course: "Course Type",
//     collegeName: "College Name", rollNumber: "Roll Number", semester: "Semester",
//   };
//   for (const [key, label] of Object.entries(fields)) {
//     if (!form[key]?.trim()) return `Please fill in: ${label}`;
//   }
//   if (!/^\d{10}$/.test(form.mobile)) return "Enter a valid 10-digit mobile number";
//   if (![999, 4499].includes(Number(form.payment))) return "Please select a payment option";
//   return null;
// };

// // ─── Main Component ──────────────────────────────────────────────────────────
// const EnrollmentForm = () => {
//   const [form, setForm] = useState(INITIAL_FORM);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [error, setError] = useState("");

//   // ── Payment ke baad wapas aane pe auto-verify ─────────────────────────────
//   useEffect(() => {
//     const savedForm = sessionStorage.getItem("enrollForm");
//     if (!savedForm) return;

//     const params = new URLSearchParams(window.location.search);
//     const orderId = params.get("order_id");

//     if (orderId) {
//       const parsedForm = JSON.parse(savedForm);
//       verifyAndSave(parsedForm, orderId);
//     }
//   }, []);

//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     setError("");
//   };

//   const handlePaymentSelect = (amount) => {
//     setForm((prev) => ({ ...prev, payment: String(amount) }));
//     setError("");
//   };

//   // ── SUBMIT: validate → save → redirect ───────────────────────────────────
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     const validationError = validate(form);
//     if (validationError) {
//       setError(validationError);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }

//     setLoading(true);
//     sessionStorage.setItem("enrollForm", JSON.stringify(form));
//     window.location.href = getPaymentUrl(Number(form.payment));
//   };

//   // ── VERIFY + SAVE ENROLLMENT ──────────────────────────────────────────────
//   const verifyAndSave = async (savedForm, orderId) => {
//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch("https://registration-nu-eight.vercel.app/api/verify-payment", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           order_id: orderId,
//           formData: { ...savedForm, payment: Number(savedForm.payment) },
//         }),
//       });

//       const data = await res.json();
//       if (!res.ok || !data.success) throw new Error(data.message || "Enrollment save failed");

//       sessionStorage.removeItem("enrollForm");
//       window.history.replaceState({}, "", window.location.pathname);
//       setForm(INITIAL_FORM);
//       setSuccess({ name: savedForm.name, course: savedForm.course, payment: Number(savedForm.payment) });
//       window.scrollTo({ top: 0, behavior: "smooth" });

//     } catch (err) {
//       setError(`Payment ho gayi lekin enrollment save nahi hua: ${err.message}. Support se contact karein.`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const steps = [
//     { label: "Personal", active: true, done: !!(form.name && form.mobile) },
//     { label: "Course",   active: true, done: !!form.course },
//     { label: "College",  active: true, done: !!(form.collegeName && form.rollNumber) },
//     { label: "Payment",  active: !!form.payment, done: false },
//   ];

//   // ── SUCCESS SCREEN ────────────────────────────────────────────────────────
//   if (success) {
//     return (
//       <div style={styles.page}>
//         <div style={{ ...styles.wrap, textAlign: "center", paddingTop: "4rem" }}>
//           <div style={styles.card}>
//             <div style={{ fontSize: "64px", marginBottom: "16px" }}>🎉</div>
//             <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "8px" }}>Enrollment Confirmed!</h2>
//             <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "20px" }}>
//               Payment of <strong style={{ color: "#4F46E5" }}>₹{success.payment.toLocaleString("en-IN")}</strong> received successfully.
//             </p>
//             <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "12px", padding: "16px", marginBottom: "20px" }}>
//               <div style={{ fontSize: "13px", color: "#065F46" }}>
//                 <strong>{success.name}</strong> is now enrolled in <strong>{success.course}</strong>
//               </div>
//               <div style={{ fontSize: "12px", color: "#047857", marginTop: "4px" }}>
//                 A confirmation will be sent to your registered mobile number
//               </div>
//             </div>
//             <button onClick={() => setSuccess(null)} style={{ ...styles.submitBtn, marginTop: "0" }}>
//               Enroll Another Student
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ── VERIFYING SCREEN (wapas aaye hain, verify ho raha hai) ───────────────
//   if (loading) {
//     return (
//       <div style={{ ...styles.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <div style={{ textAlign: "center" }}>
//           <div style={{ fontSize: "48px", marginBottom: "16px" }}>⏳</div>
//           <div style={{ fontSize: "16px", fontWeight: "600", color: "#4F46E5" }}>Payment verify ho rahi hai...</div>
//           <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "6px" }}>Kripya page band mat karein</div>
//         </div>
//       </div>
//     );
//   }

//   // ── MAIN FORM ─────────────────────────────────────────────────────────────
//   return (
//     <div style={styles.page}>
//       <div style={styles.wrap}>

//         <div style={styles.topHeader}>
//           <div style={styles.badge}>🎓 Registration Portal</div>
//           <h1 style={styles.topTitle}>Enrollment Form</h1>
//           <p style={styles.topSub}>Complete all sections to register your enrollment</p>
//         </div>

//         <StepIndicator steps={steps} />

//         {error && <div style={styles.errorBanner}>⚠️ {error}</div>}

//         <form onSubmit={handleSubmit} noValidate>

//           <SectionCard iconBg="#EEF2FF" iconChar="👤" title="Personal Details" desc="Your basic information">
//             <div style={styles.grid2}>
//               <Field label="Full Name" required>
//                 <input style={styles.input} name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
//               </Field>
//               <Field label="Mobile Number" required>
//                 <input style={styles.input} name="mobile" value={form.mobile} onChange={handleChange} placeholder="10-digit number" maxLength={10} inputMode="numeric" />
//               </Field>
//             </div>
//             <div style={styles.grid2}>
//               <Field label="Father's Name" required>
//                 <input style={styles.input} name="fatherName" value={form.fatherName} onChange={handleChange} placeholder="Father's full name" />
//               </Field>
//               <Field label="Mother's Name" required>
//                 <input style={styles.input} name="motherName" value={form.motherName} onChange={handleChange} placeholder="Mother's full name" />
//               </Field>
//             </div>
//             <Field label="Address" required noMargin>
//               <textarea style={styles.textarea} name="address" value={form.address} onChange={handleChange} placeholder="Street, City, State, PIN Code" />
//             </Field>
//           </SectionCard>

//           <SectionCard iconBg="#ECFDF5" iconChar="📚" title="Course Details" desc="Select your program type">
//             <Field label="Course Type" required noMargin>
//               <select style={styles.select} name="course" value={form.course} onChange={handleChange}>
//                 <option value="">— Select a course —</option>
//                 <option value="Industrial Training">Industrial Training</option>
//                 <option value="Internship">Internship</option>
//               </select>
//             </Field>
//           </SectionCard>

//           <SectionCard iconBg="#EFF6FF" iconChar="🏫" title="College Details" desc="Your institution information">
//             <div style={styles.grid2}>
//               <Field label="College Name" required>
//                 <input style={styles.input} name="collegeName" value={form.collegeName} onChange={handleChange} placeholder="College / University" />
//               </Field>
//               <Field label="Roll Number" required>
//                 <input style={styles.input} name="rollNumber" value={form.rollNumber} onChange={handleChange} placeholder="Your roll number" />
//               </Field>
//             </div>
//             <Field label="Semester" required noMargin>
//               <input style={styles.input} name="semester" value={form.semester} onChange={handleChange} placeholder="e.g. 5th Semester" />
//             </Field>
//           </SectionCard>

//           <SectionCard iconBg="#FFFBEB" iconChar="💳" title="Payment Details" desc="Choose your payment plan">
//             <div style={styles.paymentGrid}>
//               <div style={styles.payCard(form.payment === "999")} onClick={() => handlePaymentSelect(999)}>
//                 <div style={styles.payCardAmount(form.payment === "999")}>₹999</div>
//                 <div style={styles.payCardLabel}>Token Payment</div>
//                 <div style={styles.payCardType(form.payment === "999")}>Partial</div>
//               </div>
//               <div style={styles.payCard(form.payment === "4499")} onClick={() => handlePaymentSelect(4499)}>
//                 <div style={styles.payCardBadge}>RECOMMENDED</div>
//                 <div style={styles.payCardAmount(form.payment === "4499")}>₹4,499</div>
//                 <div style={styles.payCardLabel}>Full Payment</div>
//                 <div style={styles.payCardType(form.payment === "4499")}>Complete</div>
//               </div>
//             </div>
//             {form.payment && (
//               <div style={{ marginTop: "14px", padding: "12px 16px", background: "#F5F3FF", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <span style={{ fontSize: "13px", color: "#6b7280" }}>Amount to pay now</span>
//                 <span style={{ fontSize: "18px", fontWeight: "800", color: "#4F46E5" }}>₹{Number(form.payment).toLocaleString("en-IN")}</span>
//               </div>
//             )}
//           </SectionCard>

//           <button type="submit" style={styles.submitBtn}>
//             {`Pay ₹${form.payment ? Number(form.payment).toLocaleString("en-IN") : "—"} & Confirm Enrollment`}
//           </button>

//           <p style={{ textAlign: "center", fontSize: "12px", color: "#9ca3af", marginTop: "10px" }}>
//             🔒 Secured by Cashfree Payments · 256-bit SSL Encryption
//           </p>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default EnrollmentForm;


import React, { useState, useEffect } from "react";

// ─── DO ALAG PAYMENT LINKS (amount fixed hota hai Cashfree link mein) ─────────
const PAYMENT_LINKS = {
  999:  "https://payments.cashfree.com/links/oa79n62a61rg_AAAAAAARvQk",        // ₹999 token link
  4499: "https://payments.cashfree.com/links/YOUR_4499_LINK_HERE",              // ₹4499 full payment link
};

// ─── Styles ──────────────────────────────────────────────────────────────────
const S = {
  page: {
    background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0f9ff 100%)",
    minHeight: "100vh", padding: "2.5rem 1rem",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  },
  wrap: { maxWidth: "700px", margin: "0 auto" },
  topHeader: { textAlign: "center", marginBottom: "2.5rem" },
  badge: {
    display: "inline-block", background: "#EEF2FF", color: "#4F46E5",
    fontSize: "11px", fontWeight: "600", padding: "4px 12px", borderRadius: "20px",
    letterSpacing: "0.5px", marginBottom: "12px", textTransform: "uppercase",
  },
  topTitle: { fontSize: "28px", fontWeight: "700", color: "#111827", marginBottom: "6px", letterSpacing: "-0.5px" },
  topSub: { fontSize: "14px", color: "#6b7280" },

  stepsRow: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" },
  stepWrap: { display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" },
  stepNum: (active, done) => ({
    width: "32px", height: "32px", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "12px", fontWeight: "600",
    background: done ? "#10B981" : active ? "#4F46E5" : "#e5e7eb",
    color: (active || done) ? "#fff" : "#9ca3af",
    boxShadow: active && !done ? "0 0 0 4px #EEF2FF" : "none",
  }),
  stepLabel: (active) => ({ fontSize: "11px", fontWeight: "500", color: active ? "#4F46E5" : "#9ca3af" }),
  connector: { width: "52px", height: "2px", background: "#e5e7eb", marginBottom: "20px" },

  card: {
    background: "#fff", border: "1px solid #E5E7EB", borderRadius: "16px",
    padding: "1.5rem", marginBottom: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  secHead: {
    display: "flex", alignItems: "center", gap: "12px",
    marginBottom: "1.25rem", paddingBottom: "12px", borderBottom: "1px solid #F3F4F6",
  },
  secIcon: (bg) => ({
    width: "36px", height: "36px", borderRadius: "10px", background: bg,
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  }),
  secTitle: { fontSize: "14px", fontWeight: "700", color: "#111827" },
  secDesc: { fontSize: "12px", color: "#9ca3af", marginTop: "1px" },

  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" },
  field: { display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" },
  fieldNoMargin: { display: "flex", flexDirection: "column", gap: "6px" },
  label: { fontSize: "12px", color: "#374151", fontWeight: "600" },
  req: { color: "#EF4444" },

  input: {
    background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: "10px",
    padding: "10px 14px", fontSize: "14px", color: "#111827", outline: "none",
    width: "100%", fontFamily: "inherit", boxSizing: "border-box",
  },
  textarea: {
    background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: "10px",
    padding: "10px 14px", fontSize: "14px", color: "#111827", outline: "none",
    width: "100%", fontFamily: "inherit", resize: "vertical", minHeight: "80px", boxSizing: "border-box",
  },
  select: {
    background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: "10px",
    padding: "10px 14px", fontSize: "14px", color: "#111827", outline: "none",
    width: "100%", fontFamily: "inherit", appearance: "none", cursor: "pointer", boxSizing: "border-box",
  },

  paymentGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },
  payCard: (selected) => ({
    border: selected ? "2px solid #4F46E5" : "2px solid #E5E7EB",
    borderRadius: "12px", padding: "20px 16px", cursor: "pointer",
    background: selected ? "#EEF2FF" : "#F9FAFB",
    transition: "all 0.2s", position: "relative", textAlign: "center",
  }),
  payCardBadge: {
    position: "absolute", top: "-1px", right: "-1px",
    background: "#10B981", color: "#fff", fontSize: "9px", fontWeight: "700",
    padding: "3px 8px", borderRadius: "0 10px 0 8px", letterSpacing: "0.5px", textTransform: "uppercase",
  },
  payCardAmount: (selected) => ({
    fontSize: "24px", fontWeight: "800",
    color: selected ? "#4F46E5" : "#111827", letterSpacing: "-0.5px",
  }),
  payCardLabel: { fontSize: "12px", color: "#6b7280", marginTop: "4px" },
  payCardType: (selected) => ({
    fontSize: "11px", fontWeight: "600",
    color: selected ? "#4F46E5" : "#9ca3af", marginTop: "8px", textTransform: "uppercase", letterSpacing: "0.5px",
  }),

  errorBanner: {
    background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "10px",
    padding: "12px 16px", color: "#991B1B", fontSize: "13px", fontWeight: "500",
    textAlign: "center", marginBottom: "1rem",
  },
  submitBtn: {
    width: "100%", padding: "14px", borderRadius: "12px", border: "none",
    cursor: "pointer", fontFamily: "inherit", fontSize: "15px", fontWeight: "700",
    marginTop: "0.75rem", background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
    color: "#fff", boxShadow: "0 4px 14px rgba(79,70,229,0.35)",
  },
  submitBtnDisabled: {
    width: "100%", padding: "14px", borderRadius: "12px", border: "none",
    fontFamily: "inherit", fontSize: "15px", fontWeight: "700", marginTop: "0.75rem",
    background: "#D1D5DB", color: "#9CA3AF", cursor: "not-allowed",
  },
  dlBtn: {
    display: "inline-flex", alignItems: "center", gap: "8px",
    padding: "12px 28px", borderRadius: "10px", border: "none",
    cursor: "pointer", fontFamily: "inherit", fontSize: "14px", fontWeight: "700",
    background: "linear-gradient(135deg, #10B981, #059669)",
    color: "#fff", boxShadow: "0 4px 12px rgba(16,185,129,0.35)",
  },
};

// ─── Sub-components ──────────────────────────────────────────────────────────
const StepIndicator = ({ steps }) => (
  <div style={S.stepsRow}>
    {steps.map((step, i) => (
      <React.Fragment key={step.label}>
        <div style={S.stepWrap}>
          <div style={S.stepNum(step.active, step.done)}>{step.done ? "✓" : i + 1}</div>
          <span style={S.stepLabel(step.active || step.done)}>{step.label}</span>
        </div>
        {i < steps.length - 1 && <div style={S.connector} />}
      </React.Fragment>
    ))}
  </div>
);

const SectionCard = ({ iconBg, iconChar, title, desc, children }) => (
  <div style={S.card}>
    <div style={S.secHead}>
      <div style={S.secIcon(iconBg)}><span style={{ fontSize: "16px" }}>{iconChar}</span></div>
      <div>
        <div style={S.secTitle}>{title}</div>
        {desc && <div style={S.secDesc}>{desc}</div>}
      </div>
    </div>
    {children}
  </div>
);

const Field = ({ label, required, noMargin, children }) => (
  <div style={noMargin ? S.fieldNoMargin : S.field}>
    <label style={S.label}>{label} {required && <span style={S.req}>*</span>}</label>
    {children}
  </div>
);

// ─── Constants ───────────────────────────────────────────────────────────────
const INITIAL_FORM = {
  name: "", fatherName: "", motherName: "", address: "",
  mobile: "", course: "", collegeName: "", rollNumber: "", semester: "", payment: "",
};

const validate = (form) => {
  const fields = {
    name: "Full Name", fatherName: "Father's Name", motherName: "Mother's Name",
    address: "Address", mobile: "Mobile Number", course: "Course Type",
    collegeName: "College Name", rollNumber: "Roll Number", semester: "Semester",
  };
  for (const [key, label] of Object.entries(fields)) {
    if (!form[key]?.trim()) return `Please fill in: ${label}`;
  }
  if (!/^\d{10}$/.test(form.mobile)) return "Enter a valid 10-digit mobile number";
  if (![999, 4499].includes(Number(form.payment))) return "Please select a payment option";
  return null;
};

// ─── Main Component ──────────────────────────────────────────────────────────
const EnrollmentForm = () => {
  const [form, setForm]       = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null); // { name, course, payment, enrollmentId }
  const [error, setError]     = useState("");
  const [dlLoading, setDlLoading] = useState(false);

  // ── Payment ke baad wapas aane pe auto-verify ─────────────────────────────
  useEffect(() => {
    const savedForm = sessionStorage.getItem("enrollForm");
    if (!savedForm) return;

    const params  = new URLSearchParams(window.location.search);
    const orderId = params.get("order_id");

    if (orderId) {
      const parsedForm = JSON.parse(savedForm);
      verifyAndSave(parsedForm, orderId);
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handlePaymentSelect = (amount) => {
    setForm((prev) => ({ ...prev, payment: String(amount) }));
    setError("");
  };

  // ── SUBMIT: validate → save in session → redirect to payment link ─────────
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const err = validate(form);
    if (err) {
      setError(err);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setLoading(true);
    sessionStorage.setItem("enrollForm", JSON.stringify(form));

    // Selected amount ke hisaab se sahi link pe jaao
    const paymentUrl = PAYMENT_LINKS[Number(form.payment)];
    window.location.href = paymentUrl;
  };

  // ── VERIFY + SAVE ENROLLMENT ──────────────────────────────────────────────
  const verifyAndSave = async (savedForm, orderId) => {
    setLoading(true);
    setError("");

    try {
      const res  = await fetch("https://registration-nu-eight.vercel.app/api/verify-payment", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          order_id: orderId,
          formData: { ...savedForm, payment: Number(savedForm.payment) },
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Enrollment save failed");

      sessionStorage.removeItem("enrollForm");
      window.history.replaceState({}, "", window.location.pathname);
      setForm(INITIAL_FORM);
      setSuccess({
        name:         savedForm.name,
        course:       savedForm.course,
        payment:      Number(savedForm.payment),
        enrollmentId: data.data._id,  // PDF ke liye
      });
      window.scrollTo({ top: 0, behavior: "smooth" });

    } catch (err) {
      setError(`Payment ho gayi lekin enrollment save nahi hua: ${err.message}. Support se contact karein.`);
    } finally {
      setLoading(false);
    }
  };

  // ── PDF DOWNLOAD ──────────────────────────────────────────────────────────
  const downloadReceipt = async () => {
    if (!success?.enrollmentId) return;
    setDlLoading(true);

    try {
      const res = await fetch(`https://registration-nu-eight.vercel.app/api/receipt/${success.enrollmentId}`);
      if (!res.ok) throw new Error("PDF generation failed");

      const blob = await res.blob();
      const url  = window.URL.createObjectURL(blob);
      const a    = document.createElement("a");
      a.href     = url;
      a.download = `BeeCode_Receipt_${success.name.replace(/\s+/g, "_")}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("PDF download failed. Please try again.");
    } finally {
      setDlLoading(false);
    }
  };

  const steps = [
    { label: "Personal", active: true, done: !!(form.name && form.mobile) },
    { label: "Course",   active: true, done: !!form.course },
    { label: "College",  active: true, done: !!(form.collegeName && form.rollNumber) },
    { label: "Payment",  active: !!form.payment, done: false },
  ];

  // ── VERIFYING SCREEN ──────────────────────────────────────────────────────
  if (loading) {
    return (
      <div style={{ ...S.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>⏳</div>
          <div style={{ fontSize: "16px", fontWeight: "600", color: "#4F46E5" }}>Payment verify ho rahi hai...</div>
          <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "6px" }}>Kripya page band mat karein</div>
        </div>
      </div>
    );
  }

  // ── SUCCESS SCREEN ────────────────────────────────────────────────────────
  if (success) {
    return (
      <div style={S.page}>
        <div style={{ ...S.wrap, textAlign: "center", paddingTop: "3rem" }}>
          <div style={S.card}>
            <div style={{ fontSize: "60px", marginBottom: "12px" }}>🎉</div>
            <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "6px" }}>
              Enrollment Confirmed!
            </h2>
            <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "20px" }}>
              Payment of{" "}
              <strong style={{ color: "#4F46E5" }}>
                ₹{success.payment.toLocaleString("en-IN")}
              </strong>{" "}
              received successfully.
            </p>

            {/* Details box */}
            <div style={{
              background: "#F0FDF4", border: "1px solid #BBF7D0",
              borderRadius: "12px", padding: "16px", marginBottom: "24px", textAlign: "left",
            }}>
              <div style={{ fontSize: "13px", color: "#065F46", marginBottom: "6px" }}>
                <strong>{success.name}</strong> — {success.course}
              </div>
              <div style={{ fontSize: "12px", color: "#047857" }}>
                ✅ Enrollment complete. Receipt download karo neeche.
              </div>
            </div>

            {/* PDF Download button */}
            <button onClick={downloadReceipt} disabled={dlLoading} style={S.dlBtn}>
              {dlLoading ? "⏳ Generating..." : "⬇️  Download Receipt (PDF)"}
            </button>

            <div style={{ marginTop: "20px" }}>
              <button
                onClick={() => setSuccess(null)}
                style={{ background: "none", border: "none", color: "#6b7280", fontSize: "13px", cursor: "pointer", textDecoration: "underline" }}
              >
                Enroll Another Student
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── MAIN FORM ─────────────────────────────────────────────────────────────
  return (
    <div style={S.page}>
      <div style={S.wrap}>

        <div style={S.topHeader}>
          <div style={S.badge}>🎓 Registration Portal</div>
          <h1 style={S.topTitle}>Enrollment Form</h1>
          <p style={S.topSub}>Complete all sections to register your enrollment</p>
        </div>

        <StepIndicator steps={steps} />

        {error && <div style={S.errorBanner}>⚠️ {error}</div>}

        <form onSubmit={handleSubmit} noValidate>

          {/* Personal */}
          <SectionCard iconBg="#EEF2FF" iconChar="👤" title="Personal Details" desc="Your basic information">
            <div style={S.grid2}>
              <Field label="Full Name" required>
                <input style={S.input} name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
              </Field>
              <Field label="Mobile Number" required>
                <input style={S.input} name="mobile" value={form.mobile} onChange={handleChange} placeholder="10-digit number" maxLength={10} inputMode="numeric" />
              </Field>
            </div>
            <div style={S.grid2}>
              <Field label="Father's Name" required>
                <input style={S.input} name="fatherName" value={form.fatherName} onChange={handleChange} placeholder="Father's full name" />
              </Field>
              <Field label="Mother's Name" required>
                <input style={S.input} name="motherName" value={form.motherName} onChange={handleChange} placeholder="Mother's full name" />
              </Field>
            </div>
            <Field label="Address" required noMargin>
              <textarea style={S.textarea} name="address" value={form.address} onChange={handleChange} placeholder="Street, City, State, PIN Code" />
            </Field>
          </SectionCard>

          {/* Course */}
          <SectionCard iconBg="#ECFDF5" iconChar="📚" title="Course Details" desc="Select your program type">
            <Field label="Course Type" required noMargin>
              <select style={S.select} name="course" value={form.course} onChange={handleChange}>
                <option value="">— Select a course —</option>
                <option value="Industrial Training">Industrial Training</option>
                <option value="Internship">Internship</option>
              </select>
            </Field>
          </SectionCard>

          {/* College */}
          <SectionCard iconBg="#EFF6FF" iconChar="🏫" title="College Details" desc="Your institution information">
            <div style={S.grid2}>
              <Field label="College Name" required>
                <input style={S.input} name="collegeName" value={form.collegeName} onChange={handleChange} placeholder="College / University" />
              </Field>
              <Field label="Roll Number" required>
                <input style={S.input} name="rollNumber" value={form.rollNumber} onChange={handleChange} placeholder="Your roll number" />
              </Field>
            </div>
            <Field label="Semester" required noMargin>
              <input style={S.input} name="semester" value={form.semester} onChange={handleChange} placeholder="e.g. 5th Semester" />
            </Field>
          </SectionCard>

          {/* Payment */}
          <SectionCard iconBg="#FFFBEB" iconChar="💳" title="Payment Details" desc="Choose your payment plan">
            <div style={S.paymentGrid}>

              {/* ₹999 Token */}
              <div style={S.payCard(form.payment === "999")} onClick={() => handlePaymentSelect(999)}>
                <div style={S.payCardAmount(form.payment === "999")}>₹999</div>
                <div style={S.payCardLabel}>Token Payment</div>
                <div style={S.payCardType(form.payment === "999")}>Partial · Pay rest later</div>
              </div>

              {/* ₹4499 Full */}
              <div style={S.payCard(form.payment === "4499")} onClick={() => handlePaymentSelect(4499)}>
                <div style={S.payCardBadge}>RECOMMENDED</div>
                <div style={S.payCardAmount(form.payment === "4499")}>₹4,499</div>
                <div style={S.payCardLabel}>Full Payment</div>
                <div style={S.payCardType(form.payment === "4499")}>Complete · No dues</div>
              </div>

            </div>

            {form.payment && (
              <div style={{
                marginTop: "14px", padding: "12px 16px",
                background: "#F5F3FF", borderRadius: "10px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: "13px", color: "#6b7280" }}>
                  You will be redirected to Cashfree to pay
                </span>
                <span style={{ fontSize: "20px", fontWeight: "800", color: "#4F46E5" }}>
                  ₹{Number(form.payment).toLocaleString("en-IN")}
                </span>
              </div>
            )}
          </SectionCard>

          <button type="submit" style={S.submitBtn}>
            {`Pay ₹${form.payment ? Number(form.payment).toLocaleString("en-IN") : "—"} & Confirm Enrollment →`}
          </button>

          <p style={{ textAlign: "center", fontSize: "12px", color: "#9ca3af", marginTop: "10px" }}>
            🔒 Secured by Cashfree Payments · 256-bit SSL Encryption
          </p>

        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;