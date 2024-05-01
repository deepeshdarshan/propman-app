export type TokenProps = {
    client_id: string,
    client_secret: string,
    code: string | null,
    grant_type: string,
    redirect_uri?: string
};
