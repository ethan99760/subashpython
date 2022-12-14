package com.yas.media.viewmodel;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotNull;

public record MediaPostVm(String caption, @NotNull MultipartFile multipartFile, String fileNameOverride) {
}
