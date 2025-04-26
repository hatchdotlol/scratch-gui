const getUsername = async () => {
    if (document.cookie === "null" || document.cookie === "") {
        return "";
    } else {
        const res = await fetch("https://api.hatch.lol/auth/me", {
            headers: {
                Token: document.cookie
            }
        });
        if (res.ok) {
            return await (await res.json()).name;
        } else {
            return "";
        }
    }
}

export {
    getUsername
};
