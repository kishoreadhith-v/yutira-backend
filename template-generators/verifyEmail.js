export const verifyEmailTemplate = (
  name,
  link,
  headerImg = "https://i.ibb.co/129BwTm/header.png",
  footerImg = "https://i.ibb.co/HBc2VWT/footer.png"
) => `   <table border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody>
    <tr>
        <td bgcolor="#f5f5f5" align="center" style="padding: 0px 15px 18px 15px; background-color: #f5f5f5;">
            <table border="0" cellpadding="0" cellspacing="0" width="666" class="responsive-table">
                <tbody>
                    <tr>
                        <td>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                    <tr>
                                        <td align="center"
                                            style="padding: 18px 0 0 0; border-top: 1px #CFD2D3 solid;">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- HERO IMAGE -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                    
                                    <tr style="background: white; margin-top: 2rem;">
                                        <td align="center">
                                            <p
                                                style="font-size: 2rem; font-weight: 600; font-family: 'Poppins', sans-serif; color: black; padding-top: 2rem;">
                                                Verify your email
                                            </p>
                                        </td>
                                    </tr>
                                    <tr style="background: white; ">
                                        <td
                                            style="padding: 0px 40px 0px 2rem; font-size: 1.1rem; font-family: 'Poppins', sans-serif;">
                                            <b style="font-size: 1.2rem;">
                                                Hey ${name},
                                            </b>
                                            <p>
                                                To verify your email address, please click on the link below.
                                            </p>
                                            <a href="${link}"
                                                style="color: #332881; font-weight: 600;">${link}</a>
                                            <p>
                                                In case you did not register for Yutira 2024, please ignore this
                                                email.
                                            </p>
                                            <b>Best Wishes,</b><br />
                                            <p style="padding-bottom: 4rem;">

                                                Yutira 2024 Team<br />
                                                PSG College of Technology
                                            </p>

                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</tbody>
</table>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tbody>
    <tr>
        <td bgcolor="#ffffff" align="center" style="padding:  0;">
            <!-- UNSUBSCRIBE COPY -->
            <table width="666" border="0" cellspacing="0" cellpadding="0" align="center"
                class="responsive-table">
                <tbody>
                    <tr>
                        <td align="center"
                            style="padding: 1rem;    font-size: 12px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color:#666666;">
                            <span class="appleFooter" style="color:#666666;">Civil Engineering Association and ICI - Student's Chapter - PSG College of
                                Technology
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</tbody>
</table>
`;
