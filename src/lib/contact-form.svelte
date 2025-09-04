<script>
import * as env from "$env/static/public";
import emailjs from "@emailjs/browser";

async function sendEmail(e) {
	e.preventDefault();

	await emailjs.sendForm(
		env.PUBLIC_SERVICE_ID,
		env.PUBLIC_CONTACT_FORM_TEMPLATE_ID,
		e.target,
		{
			publicKey: env.PUBLIC_EMAIL_API_KEY,
		},
	);
}
</script>

<form onsubmit={sendEmail}>
	<label><span>Name *</span> <input type="text" name="name" required /></label>
	<label
		><span>Email address *</span>
		<input type="email" name="email" required /></label
	>
	<label
		><span>Postcode *</span>
		<input type="text" name="postcode" required /></label
	>
	<label
		><span>Services required</span>
		<textarea name="services-required" rows="8"></textarea></label
	>
	<label
		><span>Frequency</span>
		<select type="text" name="frequency">
			<option value="unspecified">Please select...</option>
			<option value="regular">Regular</option>
			<option value="one-off">One-off</option>
		</select></label
	>
	<input type="submit" value="Send" />
	<div class="hint">* required</div>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	form > label {
		width: 100%;
		display: flex;
		gap: 1em;
		align-items: center;
	}

	form > label > span {
		flex: 1;
	}

	form > label > input,
	form > label > textarea,
	form > label > select {
		flex: 2;
	}

	form input,
	form textarea,
	form select {
		border: 1px solid rgb(var(--colour-black));
		padding: 0.5em;
		background-color: rgb(var(--colour-white));
		color: rgb(var(--colour-black));
		font-family: var(--body-font-family);
	}

	form input:-webkit-autofill,
	form input:autofill,
	form textarea:-webkit-autofill,
	form textarea:autofill {
		-webkit-text-fill-color: inherit;
		box-shadow: 0 0 0px 1000px rgb(var(--colour-accent)) inset;
	}

	form input[type="submit"]:hover,
	form input:focus,
	form textarea:focus,
	form select:focus {
		outline: none;
		border-width: 2px;
		padding: calc(0.5em - 1px);
	}

	form input[type="submit"],
	form select {
		cursor: pointer;
	}

	form input[type="submit"] {
		cursor: pointer;
		background-color: rgb(var(--colour-accent));
		transition: background-color 0.2s;
	}

	form input[type="submit"]:active {
		background-color: rgba(var(--colour-accent), 0.8);
	}

	form .hint {
		font-size: 0.8em;
	}
</style>
