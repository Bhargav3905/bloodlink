export const approvalEmail = (name) => `
<h2>Welcome to BloodLink 🩸</h2>
<p>Hello <strong>${name}</strong>,</p>
<p>Your account has been approved successfully.</p>
<p>You can now login and start using BloodLink.</p>
<hr>
<p>Thank you,<br>BloodLink Team</p>
`;

export const rejectionEmail = (name) => `
<h2>BloodLink Registration Update</h2>
<p>Hello <strong>${name}</strong>,</p>
<p>Your registration could not be approved at this time.</p>
<p>You may register again after correcting your information.</p>
<p>If you believe this was a mistake, please contact the administrator.</p>
<hr>
<p>BloodLink Team</p>
`;

export const paymentSuccessEmail = (name, bloodGroup, quantity) => `
<h2>Payment Successful ✅</h2>
<p>Hello <strong>${name}</strong>,</p>
<p>Your blood request has been successfully completed.</p>
<ul>
    <li>Blood Group : ${bloodGroup}</li>
    <li>Units : ${quantity}</li>
</ul>
<p>Thank you for using BloodLink.</p>
`;

export const emergencyEmail = (hospital, bloodGroup, quantity) => `
<h2>🚨 Emergency Blood Request</h2>
<p>${hospital} has requested emergency blood.</p>
<ul>
    <li>Blood Group : ${bloodGroup}</li>
    <li>Units : ${quantity}</li>
</ul>
<p>Please respond immediately if available.</p>
`;

export const forgotPasswordEmail = (resetLink) => `
<h2>Password Reset</h2>
<p>Click below to reset your password.</p>
<a href="${resetLink}">
Reset Password
</a>
<p>This link expires in 15 minutes.</p>
`;
